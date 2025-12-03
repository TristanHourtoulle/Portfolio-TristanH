'use client';

import { Star } from 'lucide-react';
import { clsx } from 'clsx';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function StarRating({
  rating,
  maxRating = 5,
  showText = false,
  size = 'sm',
  className,
}: StarRatingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div
      className={clsx('flex items-center gap-1', className)}
      aria-label={`Note: ${rating} sur ${maxRating}`}
    >
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={clsx(
            sizeClasses[size],
            index < rating
              ? 'text-primary-blue fill-primary-blue'
              : 'text-text-light'
          )}
        />
      ))}
      {showText && (
        <span
          className={clsx(
            'ml-1 font-medium text-text-dark',
            textSizeClasses[size]
          )}
        >
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
}
