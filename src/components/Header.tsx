'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { NAVIGATION, SITE_CONFIG } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <nav className="container-portfolio">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="#hero"
              className="text-lg font-medium text-text-dark hover:text-primary-blue transition-colors"
              onClick={closeMobileMenu}
            >
              {SITE_CONFIG.name}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {NAVIGATION.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className="text-sm text-text-light hover:text-primary-blue transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Theme Toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-primary-blue/10 transition-colors cursor-pointer"
                aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
              >
                <div className="relative w-5 h-5">
                  <Moon
                    className={`w-5 h-5 text-text-light hover:text-primary-blue absolute inset-0 transition-all duration-300 ${
                      mounted && theme === 'light'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 rotate-90 scale-75'
                    }`}
                  />
                  <Sun
                    className={`w-5 h-5 text-text-light hover:text-primary-blue absolute inset-0 transition-all duration-300 ${
                      mounted && theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-75'
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* Mobile: Theme Toggle + Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-primary-blue/10 transition-colors cursor-pointer"
                aria-label={theme === 'light' ? 'Activer le mode sombre' : 'Activer le mode clair'}
              >
                <div className="relative w-5 h-5">
                  <Moon
                    className={`w-5 h-5 text-text-light absolute inset-0 transition-all duration-300 ${
                      mounted && theme === 'light'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 rotate-90 scale-75'
                    }`}
                  />
                  <Sun
                    className={`w-5 h-5 text-text-light absolute inset-0 transition-all duration-300 ${
                      mounted && theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-75'
                    }`}
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-primary-blue/10 transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`w-6 h-6 text-text-dark absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
                    }`}
                  />
                  <X
                    className={`w-6 h-6 text-text-dark absolute inset-0 transition-all duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/95 backdrop-blur-lg transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMobileMenu}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-x-0 top-16 bottom-0 flex flex-col transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <nav className="flex-1 container-portfolio pt-8">
            <ul className="space-y-2">
              {NAVIGATION.map((item, index) => (
                <li
                  key={item.id}
                  className={`transform transition-all duration-300 ${
                    isMobileMenuOpen
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="group flex items-center justify-between py-4 px-4 rounded-xl text-lg font-medium text-text-dark hover:bg-primary-blue/10 hover:text-primary-blue transition-all duration-200"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-5 h-5 text-text-light group-hover:text-primary-blue group-hover:translate-x-1 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div
            className={`container-portfolio pb-8 transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isMobileMenuOpen ? `${NAVIGATION.length * 50 + 200}ms` : '0ms',
            }}
          >
            <div className="pt-6 border-t border-primary-blue/10">
              <p className="text-sm text-text-light text-center">
                {SITE_CONFIG.name} &copy; {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
