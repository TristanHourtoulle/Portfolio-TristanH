'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { ClientId } from '@/lib/types';

interface AccentContextValue {
  hoveredClientId: ClientId | null;
  pinnedClientId: ClientId | null;
  setHoveredClientId: (clientId: ClientId | null) => void;
  pinClientId: (clientId: ClientId) => void;
}

const AccentContext = createContext<AccentContextValue | null>(null);

interface AccentProviderProps {
  children: ReactNode;
}

/**
 * Drives the case-study recoloring mechanism from the mockup: hovering,
 * focusing, or clicking an element tied to a client retints the whole
 * page through a `data-accent` attribute on <html>, which globals.css
 * maps to that client's brand and ink colors. A click pins the color;
 * moving away then falls back to the pinned client instead of the
 * default accent.
 *
 * The attribute has to live on `document.documentElement`, which sits
 * outside this component's own subtree (the header is rendered from the
 * root layout, above wherever this provider is mounted). Reaching it is
 * therefore the one deliberate, minimal DOM write in the app, done here
 * as a side effect keyed off the derived state below rather than an
 * imperative listener per element.
 */
export function AccentProvider({ children }: AccentProviderProps) {
  const [hoveredClientId, setHoveredClientId] = useState<ClientId | null>(null);
  const [pinnedClientId, setPinnedClientId] = useState<ClientId | null>(null);

  const activeClientId = hoveredClientId ?? pinnedClientId;

  useEffect(() => {
    const root = document.documentElement;
    if (activeClientId) {
      root.setAttribute('data-accent', activeClientId);
    } else {
      root.removeAttribute('data-accent');
    }
  }, [activeClientId]);

  const pinClientId = useCallback((clientId: ClientId) => {
    setPinnedClientId(clientId);
  }, []);

  const value = useMemo<AccentContextValue>(
    () => ({ hoveredClientId, pinnedClientId, setHoveredClientId, pinClientId }),
    [hoveredClientId, pinnedClientId, pinClientId]
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
}

export interface AccentTriggerHandlers {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onClick: () => void;
}

/**
 * Returns the event handlers a component needs to act as a recoloring
 * trigger for the given client. Spread the result onto the interactive
 * element (a case-study card, or a secondary-mention span/link).
 */
export function useAccentTrigger(clientId: ClientId): AccentTriggerHandlers {
  const context = useContext(AccentContext);
  if (!context) {
    throw new Error('useAccentTrigger must be used within an AccentProvider');
  }
  const { setHoveredClientId, pinClientId } = context;

  const onMouseEnter = useCallback(() => setHoveredClientId(clientId), [setHoveredClientId, clientId]);
  const onMouseLeave = useCallback(() => setHoveredClientId(null), [setHoveredClientId]);
  const onFocus = useCallback(() => setHoveredClientId(clientId), [setHoveredClientId, clientId]);
  const onBlur = useCallback(() => setHoveredClientId(null), [setHoveredClientId]);
  const onClick = useCallback(() => pinClientId(clientId), [pinClientId, clientId]);

  return { onMouseEnter, onMouseLeave, onFocus, onBlur, onClick };
}
