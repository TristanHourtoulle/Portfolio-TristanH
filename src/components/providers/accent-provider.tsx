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
  setHoveredClientId: (clientId: ClientId | null) => void;
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

  useEffect(() => {
    const root = document.documentElement;
    if (hoveredClientId) {
      root.setAttribute('data-accent', hoveredClientId);
    } else {
      root.removeAttribute('data-accent');
    }
  }, [hoveredClientId]);

  const value = useMemo<AccentContextValue>(
    () => ({ hoveredClientId, setHoveredClientId }),
    [hoveredClientId]
  );

  return <AccentContext.Provider value={value}>{children}</AccentContext.Provider>;
}

export interface AccentTriggerHandlers {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
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
  const { setHoveredClientId } = context;

  const onMouseEnter = useCallback(() => setHoveredClientId(clientId), [setHoveredClientId, clientId]);
  const onMouseLeave = useCallback(() => setHoveredClientId(null), [setHoveredClientId]);
  const onFocus = useCallback(() => setHoveredClientId(clientId), [setHoveredClientId, clientId]);
  const onBlur = useCallback(() => setHoveredClientId(null), [setHoveredClientId]);

  return { onMouseEnter, onMouseLeave, onFocus, onBlur };
}
