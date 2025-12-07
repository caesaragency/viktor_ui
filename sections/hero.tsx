// viktor/hero.tsx
// Hero Section - Variant 1 (Two-column baseline)

import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { RestaurantRow } from '../app/types';
import { getLocalizedText, normalizeImagePath, getInitials } from './helpers';

export type HeroProps = {
  restaurant: RestaurantRow;
  lang: 'en' | 'es';
};

// Simple Language Switcher placeholder
function LanguageSwitcher({ currentLang }: { currentLang: 'en' | 'es' }) {
  return (
    <div className="flex gap-4 text-xs">
      <span className={currentLang === 'en' ? 'font-semibold text-slate-700' : 'text-slate-500'}>EN</span>
      <span className={currentLang === 'es' ? 'font-semibold text-slate-900' : 'text-slate-500'}>ES</span>
    </div>
  );
}

function getSafeImageSrc(restaurant: RestaurantRow): string | null {
  return normalizeImagePath(
    restaurant.info?.hero_image_path || restaurant.info?.logo_path
  );
}

// HeroVariant1 – Two-column baseline (improved current)
export function HeroVariant1({ restaurant, lang }: HeroProps) {
  const tagline = getLocalizedText(restaurant.info?.tagline, lang);
  const description = getLocalizedText(restaurant.info?.description, lang);
  const address = restaurant.info?.location?.address;
  const city = restaurant.info?.location?.city;
  const heroImage = getSafeImageSrc(restaurant);

  return (
    <section id="hero" className="mb-12 md:mb-16">
      <div className="md:grid md:grid-cols-2 md:gap-12 md:items-start mb-6">
        {/* Left: Text content */}
        <div className="mb-8 md:mb-0">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight"
                style={{ color: 'var(--brand-color)' } as CSSProperties}
              >
                {restaurant.name}
              </h1>

              {tagline && (
                <p
                  className="text-base font-medium uppercase tracking-[0.3em] mb-4"
                  style={{ color: 'var(--accent-color)' } as CSSProperties}
                >
                  {tagline}
                </p>
              )}

              {(address || city) && (
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: 'var(--accent-color)' } as CSSProperties}
                >
                  {address}
                  {address && city ? ', ' : ''}
                  {city}
                </p>
              )}
            </div>

            <div className="md:hidden">
              <LanguageSwitcher currentLang={lang} />
            </div>
          </div>

          <div className="hidden md:block">
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>

        {/* Right: Hero image */}
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 w-full overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={restaurant.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="flex items-center justify-center h-full w-full"
              style={{
                background: `linear-gradient(135deg, var(--brand-color)15, var(--brand-color)05)`,
              }}
            >
              <span
                className="text-6xl sm:text-7xl font-bold opacity-20"
                style={{ color: 'var(--brand-color)' } as CSSProperties}
              >
                {getInitials(restaurant.name)}
              </span>
            </div>
          )}
        </div>
      </div>
      
      {/* Description spans full width below the grid */}
      {description && (
        <p
          className="text-sm sm:text-base leading-relaxed w-full"
          style={{ color: 'var(--secondary-text)' } as CSSProperties}
        >
          {description}
        </p>
      )}
    </section>
  );
}

