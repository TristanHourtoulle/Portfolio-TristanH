'use client';

import { clsx } from 'clsx';
import Image from 'next/image';

interface TechCardProps {
  title: string;
  description: string;
  icon?: string;
  technologies?: string[];
  className?: string;
  size?: 'default' | 'large';
}

export function TechCard({
  title,
  description,
  icon,
  technologies,
  className,
  size = 'default',
}: TechCardProps) {
  return (
    <div
      className={clsx(
        'bg-card-bg rounded-2xl p-6',
        'shadow-sm hover:shadow-md',
        'hover:-translate-y-1',
        'transition-all duration-300',
        'border-2 border-gray-300/10 dark:border-gray-500/10',
        className
      )}
    >
      {/* Large centered icon or multiple tech icons */}
      <div className={clsx('flex justify-center mb-4', size === 'large' ? 'gap-6' : '')}>
        {icon ? (
          <div className="w-16 h-16 relative">
            <Image
              src={`/icons/${icon}.svg`}
              alt={`${title} icon`}
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        ) : technologies && technologies.length > 0 ? (
          <div className="flex items-center justify-center gap-4">
            {technologies.map((tech) => (
              <div key={tech} className="w-12 h-12 md:w-16 md:h-16 relative">
                <Image
                  src={`/icons/${tech.toLowerCase().replace('.', '')}.svg`}
                  alt={`${tech} icon`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        ) : null}
      </div>

      {/* Title with small icon */}
      <div className="flex items-center gap-2 mb-2">
        {icon && (
          <div className="w-5 h-5 relative shrink-0">
            <Image
              src={`/icons/${icon}.svg`}
              alt=""
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        {!icon && technologies && (
          <div className="w-5 h-5 relative shrink-0">
            <Image
              src="/icons/server.svg"
              alt=""
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
        <h3 className="text-base font-semibold text-text-dark">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-text-light leading-relaxed">{description}</p>
    </div>
  );
}
