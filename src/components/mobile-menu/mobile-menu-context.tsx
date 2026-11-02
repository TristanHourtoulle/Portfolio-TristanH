'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export const MOBILE_MENU_SHEET_ID = 'mobile-menu-sheet';

const DESKTOP_QUERY = '(min-width: 761px)';
const OPEN_ATTRIBUTE = 'data-menu';
const EXIT_ATTRIBUTE = 'data-menu-exit';
const LOCK_CLASS = 'menu-locked';

interface MobileMenuValue {
  isOpen: boolean;
  close: () => void;
  closeForNavigation: () => void;
  toggle: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

const MobileMenuContext = createContext<MobileMenuValue | null>(null);

/**
 * Shares the mobile menu state between the header trigger and the sheet.
 *
 * @param children The whole document body content.
 * @returns The provider, which renders no element of its own.
 */
export function MobileMenuProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const skipRestoreRef = useRef(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((value) => !value), []);
  const closeForNavigation = useCallback(() => {
    skipRestoreRef.current = true;
    document.documentElement.setAttribute(EXIT_ATTRIBUTE, 'instant');
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isOpen) {
      root.setAttribute(OPEN_ATTRIBUTE, 'open');
      return () => root.removeAttribute(OPEN_ATTRIBUTE);
    }

    root.removeAttribute(OPEN_ATTRIBUTE);
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => root.removeAttribute(EXIT_ATTRIBUTE));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
      root.removeAttribute(OPEN_ATTRIBUTE);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const { body } = document;
    const offset = window.scrollY;
    body.classList.add(LOCK_CLASS);
    body.style.top = `-${offset}px`;

    return () => {
      body.classList.remove(LOCK_CLASS);
      body.style.top = '';
      if (skipRestoreRef.current) {
        skipRestoreRef.current = false;
        return;
      }
      window.scrollTo({ top: offset, left: 0, behavior: 'instant' });
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };
    desktop.addEventListener('change', handleChange);
    return () => desktop.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handlePopState = () => setIsOpen(false);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo<MobileMenuValue>(
    () => ({ isOpen, close, closeForNavigation, toggle, triggerRef }),
    [isOpen, close, closeForNavigation, toggle],
  );

  return (
    <MobileMenuContext.Provider value={value}>
      {children}
    </MobileMenuContext.Provider>
  );
}

/**
 * Reads the mobile menu state.
 *
 * @returns The menu state and its controls.
 */
export function useMobileMenu(): MobileMenuValue {
  const value = useContext(MobileMenuContext);
  if (value === null) {
    throw new Error('useMobileMenu must be used inside MobileMenuProvider');
  }
  return value;
}
