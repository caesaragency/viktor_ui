// viktor/footer.tsx
// Footer Section - Variant 1 (Minimal)

import { SectionBoundary } from './components';
import type { CSSProperties } from 'react';
import type { RestaurantRow } from '../app/types';

export type FooterProps = {
  restaurant: RestaurantRow;
};

// FooterVariant1 – Minimal
export function FooterVariant1({ restaurant }: FooterProps) {
  const city = restaurant.info?.location?.city;

  return (
    <SectionBoundary id="footer" className="border-t-2 border-slate-200/60">
      <footer className="text-xs text-slate-500 text-center pt-6">
        <p>
          <span style={{ color: 'var(--accent-color)', fontWeight: 600 } as CSSProperties}>
            {restaurant.name}
          </span>
          {city && ` · ${city}`} · © {new Date().getFullYear()}
        </p>
      </footer>
    </SectionBoundary>
  );
}

