// viktor/about.tsx
// About Section - Variant 1 (Standard with heading and divider)

import Image from 'next/image';
import { SectionBoundary } from './components';
import type { CSSProperties } from 'react';
import type { RestaurantRow } from '../app/types';
import { getLocalizedText } from './helpers';

export type AboutProps = {
  restaurant: RestaurantRow;
  lang: 'en' | 'es';
};

// AboutVariant1 – Standard with heading and divider
export function AboutVariant1({ restaurant, lang }: AboutProps) {
  const aboutText = getLocalizedText(
    (restaurant.info as { about_text?: Record<string, string> })?.about_text,
    lang
  ) || getLocalizedText(restaurant.info?.description, lang);

  if (!aboutText) return null;

  return (
    <SectionBoundary id="about" aria-labelledby="about-heading">
      <div className="flex items-center gap-4 mb-6">
        <h2
          id="about-heading"
          className="text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap"
          style={{ color: 'var(--accent-color)' } as CSSProperties}
        >
          About
        </h2>
        <div
          className="h-px flex-1"
          style={{ backgroundColor: 'var(--accent-color)' } as CSSProperties}
        />
      </div>
      <div className="space-y-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: 'var(--body-text)' } as CSSProperties}
            >
              {aboutText}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
              <Image
                src="/images/1.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative w-full aspect-square overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50">
              <Image
                src="/images/3.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionBoundary>
  );
}

