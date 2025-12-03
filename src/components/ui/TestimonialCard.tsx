'use client';

import { clsx } from 'clsx';
import { Star } from 'lucide-react';
import type { Testimonial } from '@/lib/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

function StarRatingInline({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-4 h-4 fill-primary-blue text-primary-blue" />
      <span className="text-sm font-medium text-text-dark">{rating}/5</span>
    </div>
  );
}

function StarRatingFull({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={clsx(
            'w-4 h-4',
            i < rating ? 'fill-primary-blue text-primary-blue' : 'fill-gray-200 text-gray-200'
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, rating, review, variant = 'default' } = testimonial;

  const cardBaseClasses =
    'bg-card-bg rounded-2xl p-6 border-2 border-gray-300/10 dark:border-gray-500/10 h-full transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:border-primary-blue/20';

  // Featured variant (Vincent G. style - wide card, review first, then stars + name)
  if (variant === 'featured') {
    return (
      <div className={cardBaseClasses}>
        <p className="text-sm text-text-light leading-relaxed mb-4 text-justify">{review}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRatingFull rating={rating} />
            <span className="text-sm text-text-light">{rating}/5</span>
          </div>
          <span className="font-semibold text-text-dark">{name}</span>
        </div>
      </div>
    );
  }

  // Determine card style based on name for matching Figma design
  const isPaulStyle = name === 'Paul L.';
  const isCorinneStyle = name === 'Corinne E.';
  const isTimotheStyle = name === 'Timothé C.';

  if (isPaulStyle) {
    // Paul L. style: Stars centered at top, name below, then review (tall card)
    return (
      <div className={`${cardBaseClasses} flex flex-col`}>
        <div className="flex justify-center mb-3">
          <StarRatingFull rating={rating} />
        </div>
        <h4 className="font-semibold text-text-dark mb-3">{name}</h4>
        <p className="text-sm text-text-light leading-relaxed text-justify">{review}</p>
      </div>
    );
  }

  if (isCorinneStyle) {
    // Corinne E. style: Name on left, full stars on right, review below
    return (
      <div className={`${cardBaseClasses} flex flex-col`}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-text-dark">{name}</h4>
          <StarRatingFull rating={rating} />
        </div>
        <p className="text-sm text-text-light leading-relaxed text-justify">{review}</p>
      </div>
    );
  }

  if (isTimotheStyle) {
    // Timothé C. style: Name on left, inline rating on right, review below (wide card)
    return (
      <div className={`${cardBaseClasses} flex flex-col`}>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-text-dark">{name}</h4>
          <StarRatingInline rating={rating} />
        </div>
        <p className="text-sm text-text-light leading-relaxed text-justify">{review}</p>
      </div>
    );
  }

  // Default style (Cyril K.): Name with inline rating, review below
  return (
    <div className={`${cardBaseClasses} flex flex-col`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-text-dark">{name}</h4>
        <StarRatingInline rating={rating} />
      </div>
      <p className="text-sm text-text-light leading-relaxed text-justify">{review}</p>
    </div>
  );
}
