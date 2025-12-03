'use client';

import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { HERO_BADGES, SITE_CONFIG } from '@/lib/constants';

export function Hero() {
  return (
    <section id='hero' className='pt-24 pb-8 md:pt-32 md:pb-12'>
      <div className='container-portfolio'>
        {/* Profile Row: Photo + Name + Badges on same line */}
        <div className='flex flex-wrap items-center gap-4 mb-8'>
          {/* Profile Image */}
          <div className='relative w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-full overflow-hidden ring-2 ring-primary-blue/20'>
            <Image
              src='/images/TristanH.svg'
              alt='Photo de profil de Tristan H.'
              fill
              className='object-cover'
              priority
              sizes='(max-width: 768px) 64px, 80px'
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className='absolute inset-0 bg-linear-to-br from-primary-blue to-secondary-green -z-10' />
          </div>

          {/* Name */}
          <h1 className='text-2xl md:text-3xl font-semibold text-text-dark'>
            {SITE_CONFIG.name}
          </h1>

          {/* Badges */}
          <div className='flex gap-2'>
            {HERO_BADGES.map((badge) => (
              <Badge
                key={badge.id}
                label={badge.label}
                variant={badge.variant}
              />
            ))}
          </div>
        </div>

        {/* Main Title */}
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-text-dark mb-4 leading-tight'>
          Je ne crée pas de site{' '}
          <span className='font-accent text-primary-blue text-3xl md:text-4xl lg:text-5xl'>
            mais des expériences
          </span>
        </h2>

        {/* Subtitle */}
        <p className='text-base md:text-lg text-text-light mb-8 max-w-2xl'>
          Je crée des sites expériences web modernes, adaptés à vos besoins et
          alignés avec vos valeurs.
        </p>

        {/* CTA Button */}
        <Button
          variant='primary'
          size='md'
          href={SITE_CONFIG.ctaHref}
          icon={<Phone className='w-4 h-4' />}
        >
          {SITE_CONFIG.ctaText}
        </Button>
      </div>
    </section>
  );
}
