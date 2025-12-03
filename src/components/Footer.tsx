'use client';

import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { Phone, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { NAVIGATION, SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants';

function SocialIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case 'github':
      return <Github className={className} />;
    case 'linkedin':
      return <Linkedin className={className} />;
    default:
      return null;
  }
}

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentYear = new Date().getFullYear();

  // Use all navigation links
  const navLinks = NAVIGATION;

  return (
    <footer
      ref={footerRef}
      className="bg-card-bg border-t border-gray-300/10 dark:border-gray-500/10"
    >
      <div className="container-portfolio py-10 md:py-16">
        {/* Mobile Layout */}
        <div
          className={clsx(
            'flex flex-col md:hidden',
            'transition-all duration-500 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {/* Brand & CTA - centered on mobile */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-text-dark mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-text-light mb-6 text-sm">
              Développeur web freelance passionné par la création d&apos;expériences
              digitales uniques et performantes.
            </p>
            <Button
              variant="primary"
              size="md"
              href={SITE_CONFIG.ctaHref}
              icon={<Phone className="w-4 h-4" />}
            >
              {SITE_CONFIG.ctaText}
            </Button>
          </div>

          {/* Navigation & Contact - side by side on mobile */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            {/* Navigation */}
            <div>
              <h4 className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-3">
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="text-sm text-text-light hover:text-primary-blue transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-semibold text-text-dark uppercase tracking-wider mb-3">
                Contact
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:tristan68420@gmail.com"
                    className="inline-flex items-center gap-1.5 text-sm text-text-light hover:text-primary-blue transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Email
                  </a>
                </li>
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.id}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-text-light hover:text-primary-blue transition-colors duration-200"
                    >
                      <SocialIcon icon={social.icon} className="w-3.5 h-3.5" />
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Mobile */}
          <div className="border-t border-gray-300/10 dark:border-gray-500/10 pt-6">
            <div className="flex flex-col items-center gap-4">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="mailto:tristan68420@gmail.com"
                  aria-label="Email"
                  className="p-2.5 text-text-light hover:text-primary-blue hover:bg-primary-blue/10 rounded-full transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 text-text-light hover:text-primary-blue hover:bg-primary-blue/10 rounded-full transition-all duration-200"
                  >
                    <SocialIcon icon={social.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
              {/* Copyright */}
              <p className="text-xs text-text-light/70">
                &copy; {currentYear} {SITE_CONFIG.name}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div
          className={clsx(
            'hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12',
            'transition-all duration-500 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {/* Column 1: Brand & CTA */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-text-dark mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-text-light mb-6 max-w-md">
              Développeur web freelance passionné par la création d&apos;expériences
              digitales uniques et performantes.
            </p>
            <Button
              variant="primary"
              size="md"
              href={SITE_CONFIG.ctaHref}
              icon={<Phone className="w-4 h-4" />}
            >
              {SITE_CONFIG.ctaText}
            </Button>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-text-light hover:text-primary-blue transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div>
            <h4 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:tristan68420@gmail.com"
                  className="inline-flex items-center gap-2 text-text-light hover:text-primary-blue transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  tristan68420@gmail.com
                </a>
              </li>
              {SOCIAL_LINKS.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-light hover:text-primary-blue transition-colors duration-200"
                  >
                    <SocialIcon icon={social.icon} className="w-4 h-4" />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Divider & Bottom Bar */}
        <div
          className={clsx(
            'hidden md:block border-t border-gray-300/10 dark:border-gray-500/10 mt-10 pt-8',
            'transition-all duration-500 ease-out delay-200',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="flex flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 text-text-light hover:text-primary-blue hover:bg-primary-blue/10 rounded-lg transition-all duration-200"
                >
                  <SocialIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-text-light">
              &copy; {currentYear} {SITE_CONFIG.name}. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
