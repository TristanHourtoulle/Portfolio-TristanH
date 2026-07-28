#!/usr/bin/env node
/**
 * Port-aware launcher for `next dev` and `next start`.
 *
 * This machine runs a lot of local services at once, so fixed ports keep
 * colliding. Instead of hardcoding a port, this script actually probes TCP
 * ports one by one (real `net.createServer().listen()` calls, not a static
 * blocklist) starting from a base port chosen to sit clear of the ports
 * already known to be busy on this machine, and hands the first free one
 * to Next.js.
 *
 * Usage: node scripts/next-port.mjs <dev|start> [extra next args...]
 */

import { createServer } from "node:net";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Base port for the search.
//
// Chosen to sit clear of everything already occupied on this machine:
// 3001 (a Node project), 4001-4009 (a fleet of Node services, with room
// left to grow), 8080, 9000, 9001, 5433 (Docker), and 5000 / 7000 which
// belong to macOS ControlCenter's AirPlay receiver. 4300 leaves a wide
// margin above the busy 4001-4009 block while staying in a conventional
// "dev server" range.
const BASE_PORT = 4300;

// Ports that must never be used even if a naive check reports them free.
// 5000 and 7000 are claimed by macOS ControlCenter (AirPlay Receiver),
// which can behave inconsistently with a single probe, so they are
// excluded outright rather than trusted.
const EXCLUDED_PORTS = new Set([5000, 7000]);

// Reasonable ceiling so a pathological environment fails fast instead of
// scanning forever.
const MAX_ATTEMPTS = 50;

/**
 * Checks whether a TCP port is actually free by attempting to listen on
 * it on all interfaces (0.0.0.0). Listening on 0.0.0.0 also catches ports
 * that are only partially bound on a single interface, since a bind to
 * 0.0.0.0 conflicts with any existing bind on the same port.
 *
 * @param {number} port
 * @returns {Promise<boolean>}
 */
function isPortFree(port) {
  return new Promise((resolve) => {
    const server = createServer();

    server.once("error", () => {
      resolve(false);
    });

    server.once("listening", () => {
      server.close(() => resolve(true));
    });

    server.listen(port, "0.0.0.0");
  });
}

/**
 * Scans upward from `start`, skipping excluded ports, until a real free
 * port is found or the attempt budget runs out.
 *
 * @param {{ start: number, excluded: Set<number>, maxAttempts: number }} options
 * @returns {Promise<number>}
 */
async function findAvailablePort({ start, excluded, maxAttempts }) {
  let port = start;
  let attempts = 0;

  while (attempts < maxAttempts) {
    if (!excluded.has(port)) {
      const free = await isPortFree(port);
      if (free) {
        return port;
      }
    }
    port += 1;
    attempts += 1;
  }

  throw new Error(
    `Could not find a free port after ${maxAttempts} attempts starting from ${start}.`
  );
}

/**
 * Resolves the port to use, honoring a user-provided PORT env var when
 * it is actually free, and falling back to the automatic scan otherwise.
 *
 * @returns {Promise<number>}
 */
async function resolvePort() {
  const rawPort = process.env.PORT;

  if (rawPort === undefined || rawPort === "") {
    return findAvailablePort({
      start: BASE_PORT,
      excluded: EXCLUDED_PORTS,
      maxAttempts: MAX_ATTEMPTS,
    });
  }

  const requested = Number(rawPort);

  if (!Number.isInteger(requested) || requested < 1 || requested > 65535) {
    console.warn(
      `[next-port] PORT="${rawPort}" is not a valid port number, ignoring it and scanning from ${BASE_PORT}.`
    );
    return findAvailablePort({
      start: BASE_PORT,
      excluded: EXCLUDED_PORTS,
      maxAttempts: MAX_ATTEMPTS,
    });
  }

  if (EXCLUDED_PORTS.has(requested)) {
    console.warn(
      `[next-port] PORT=${requested} is reserved by macOS AirPlay (ControlCenter) and cannot be used. Picking the next free port instead.`
    );
    return findAvailablePort({
      start: requested + 1,
      excluded: EXCLUDED_PORTS,
      maxAttempts: MAX_ATTEMPTS,
    });
  }

  const requestedIsFree = await isPortFree(requested);

  if (requestedIsFree) {
    return requested;
  }

  console.warn(
    `[next-port] PORT=${requested} is already in use. Falling back to the next free port.`
  );
  return findAvailablePort({
    start: requested + 1,
    excluded: EXCLUDED_PORTS,
    maxAttempts: MAX_ATTEMPTS,
  });
}

/**
 * Spawns `next <mode>` on the given port, inheriting stdio, and forwards
 * SIGINT/SIGTERM to the whole process group so Ctrl+C actually kills
 * Next.js and any worker processes it spawns, instead of leaving orphans
 * listening on the port.
 *
 * @param {"dev" | "start"} mode
 * @param {number} port
 * @param {string[]} extraArgs
 * @returns {Promise<number>}
 */
function runNext(mode, port, extraArgs) {
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const projectRoot = path.join(scriptDir, "..");
  const nextBin = path.join(projectRoot, "node_modules", ".bin", "next");

  const args = [mode, "-p", String(port), ...extraArgs];

  const child = spawn(nextBin, args, {
    cwd: projectRoot,
    stdio: "inherit",
    // Run as its own process group leader so a shutdown signal can be
    // relayed to every descendant process (Next.js can spawn workers),
    // avoiding orphaned servers left listening on the port.
    detached: true,
  });

  let shuttingDown = false;

  const relaySignal = (signal) => {
    if (shuttingDown || !child.pid) {
      return;
    }
    shuttingDown = true;
    try {
      process.kill(-child.pid, signal);
    } catch {
      // Process group may already be gone, nothing left to clean up.
    }
  };

  process.on("SIGINT", () => relaySignal("SIGINT"));
  process.on("SIGTERM", () => relaySignal("SIGTERM"));

  return new Promise((resolve) => {
    child.on("exit", (code, signal) => {
      if (signal) {
        resolve(1);
        return;
      }
      resolve(code ?? 0);
    });
  });
}

async function main() {
  const mode = process.argv[2];
  const extraArgs = process.argv.slice(3);

  if (mode !== "dev" && mode !== "start") {
    console.error(
      `[next-port] Usage: node scripts/next-port.mjs <dev|start> [extra next args...]`
    );
    process.exit(1);
    return;
  }

  const port = await resolvePort();
  const url = `http://localhost:${port}`;

  console.log(`[next-port] Starting Next.js (${mode}) on ${url}`);

  const exitCode = await runNext(mode, port, extraArgs);
  process.exit(exitCode);
}

main().catch((error) => {
  console.error(`[next-port] Failed to start: ${error.message}`);
  process.exit(1);
});
