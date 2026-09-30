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
 * Provides the case-study accent recoloring context.
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
 * Accent recoloring handlers for a client.
 * @param clientId - client whose accent the element triggers
 * @returns handlers to spread onto the interactive element
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
