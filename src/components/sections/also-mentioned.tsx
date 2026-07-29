'use client';

import { ALSO_MENTIONED_INTRO, ALSO_MENTIONED_ITEMS } from '@/lib/constants';
import type { AlsoMentionedItem, ClientId } from '@/lib/types';
import { useAccentTrigger } from '@/components/providers/accent-provider';

interface TintedMentionProps {
  clientId: ClientId;
  label: string;
  href?: string;
}

/**
 * A secondary mention wired to the recoloring mechanism. Renders as a
 * link when `href` is set (Edukai never reaches this branch, it has no
 * clientId), or as a focusable span with no destination for a client
 * mention with no link, matching the mockup's markup exactly. No current
 * item in `ALSO_MENTIONED_ITEMS` uses the no-href branch (Moduloop Kits
 * was promoted to a full case study), but the mechanism stays generic
 * for a future secondary mention.
 */
function TintedMention({ clientId, label, href }: TintedMentionProps) {
  const triggerHandlers = useAccentTrigger(clientId);

  if (href) {
    return (
      <a data-client={clientId} href={href} {...triggerHandlers}>
        {label}
      </a>
    );
  }

  return (
    <span data-client={clientId} tabIndex={0} {...triggerHandlers}>
      {label}
    </span>
  );
}

function AlsoMentionedItemView({ item }: { item: AlsoMentionedItem }) {
  if (item.clientId) {
    return <TintedMention clientId={item.clientId} label={item.label} href={item.href} />;
  }

  // Edukai: plain link, deliberately outside the recoloring mechanism.
  return (
    <a href={item.href} target="_blank" rel="noopener noreferrer">
      {item.label}
    </a>
  );
}

export function AlsoMentioned() {
  return (
    <p className="also">
      {ALSO_MENTIONED_INTRO}
      {ALSO_MENTIONED_ITEMS.map((item) => (
        <span key={item.label}>
          <AlsoMentionedItemView item={item} />
          {item.trailingText}
        </span>
      ))}
    </p>
  );
}
