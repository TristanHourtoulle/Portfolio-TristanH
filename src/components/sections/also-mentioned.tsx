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
 * Secondary mention wired to the recoloring mechanism.
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
