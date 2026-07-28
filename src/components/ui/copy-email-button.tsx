'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Copy } from 'lucide-react';

const COPY_RESET_DELAY_MS = 2000;

interface CopyEmailButtonProps {
  email: string;
}

/**
 * Copies the email via the Clipboard API, falling back to a hidden
 * textarea + execCommand for browsers or contexts (non-HTTPS, older
 * WebViews) where navigator.clipboard is unavailable. Shows a temporary
 * "Copié" label, exactly like the mockup's copy-email button.
 */
export function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [isCopied, setIsCopied] = useState(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, []);

  const showCopiedState = useCallback(() => {
    setIsCopied(true);
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }
    resetTimeoutRef.current = setTimeout(() => setIsCopied(false), COPY_RESET_DELAY_MS);
  }, []);

  const handleCopy = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        copyWithFallback(email);
      }
    } catch {
      copyWithFallback(email);
    }
    showCopiedState();
  }, [email, showCopiedState]);

  return (
    <button
      type="button"
      className={clsx('copy-email', isCopied && 'copied')}
      onClick={handleCopy}
      aria-label="Copier l'adresse email"
    >
      <Copy className="copy-icon" aria-hidden="true" />
      <span className="copy-label" aria-live="polite">
        {isCopied ? 'Copié' : email}
      </span>
    </button>
  );
}

function copyWithFallback(text: string): void {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
}
