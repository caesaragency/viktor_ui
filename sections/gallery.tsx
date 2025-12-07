// viktor/gallery.tsx
// Gallery Section - Variant 1 (Simple grid - 2-3 columns)

import Image from 'next/image';
import { SectionBoundary } from './components';
import type { CSSProperties } from 'react';
import type { MenuItem } from '../app/types';
import { normalizeImagePath } from './helpers';

export type GalleryProps = {
  items: MenuItem[];
};

// GalleryVariant1 – Simple grid (2-3 columns)
export function GalleryVariant1({ items }: GalleryProps) {
  const allImages = items.flatMap((item) => item.images ?? []);
  const uniqueImages = Array.from(new Set(allImages))
    .map(normalizeImagePath)
    .filter((img): img is string => img !== null);

  if (!uniqueImages.length) return null;

  return (
    <SectionBoundary id="gallery" aria-labelledby="gallery-heading">
      <div className="flex items-center gap-4 mb-6">
        <h2
          id="gallery-heading"
          className="text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap"
          style={{ color: 'var(--accent-color)' } as CSSProperties}
        >
          Gallery
        </h2>
        <div
          className="h-px flex-1"
          style={{ backgroundColor: 'var(--accent-color)' } as CSSProperties}
        />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
        {uniqueImages.map((src) => (
          <div
            key={src}
            className="relative h-32 sm:h-40 md:h-48 w-full overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 33vw"
            />
          </div>
        ))}
      </div>
    </SectionBoundary>
  );
}

