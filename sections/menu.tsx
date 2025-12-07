// viktor/menu.tsx
// Menu Section - Variant 1 (Two column grid - standard)

import { SectionBoundary } from './components';
import type { CSSProperties } from 'react';
import type { MenuCategory, MenuItem } from '../app/types';
import { getLocalizedText } from './helpers';

export type MenuProps = {
  categories: MenuCategory[];
  items: MenuItem[];
  lang: 'en' | 'es';
};

// MenuVariant1 – Two column grid (standard)
export function MenuVariant1({ categories, items, lang }: MenuProps) {
  return (
    <SectionBoundary id="menu" aria-labelledby="menu-heading">
      <div className="flex items-center gap-4 mb-10">
        <h2
          id="menu-heading"
          className="text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap"
          style={{ color: 'var(--accent-color)' } as CSSProperties}
        >
          Menu
        </h2>
        <div
          className="h-px flex-1"
          style={{ backgroundColor: 'var(--accent-color)' } as CSSProperties}
        />
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
        {categories.map((cat) => {
          const catName = getLocalizedText(cat.name, lang);
          const catDesc = getLocalizedText(cat.description ?? undefined, lang);

          const catItems = items.filter(
            (item) => item.category_id === cat.id && item.is_available !== false
          );

          if (!catItems.length) return null;

          return (
            <div key={cat.id} className="space-y-3">
              <div className="mb-4">
                <h3
                  className="text-lg font-bold uppercase tracking-[0.15em] mb-1"
                  style={{ color: 'var(--brand-color)' } as CSSProperties}
                >
                  {catName}
                </h3>
                {catDesc && (
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: 'var(--secondary-text)' } as CSSProperties}
                  >
                    {catDesc}
                  </p>
                )}
              </div>

              <ul className="space-y-3">
                {catItems.map((item) => {
                  const itemName = getLocalizedText(item.name, lang);
                  const itemDesc = getLocalizedText(
                    item.description ?? undefined,
                    lang
                  );

                  const rawPrice = item.price ?? 0;
                  const priceNumber =
                    typeof rawPrice === 'string' ? Number(rawPrice) : rawPrice;

                  return (
                    <li
                      key={item.id}
                      className="flex items-start justify-between gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div
                          className="text-sm font-medium leading-tight"
                          style={{ color: 'var(--body-text)' } as CSSProperties}
                        >
                          {itemName}
                        </div>
                        {itemDesc && (
                          <p
                            className="text-xs mt-1 leading-relaxed line-clamp-2"
                            style={{ color: 'var(--secondary-text)' } as CSSProperties}
                          >
                            {itemDesc}
                          </p>
                        )}
                      </div>
                      <div
                        className="text-sm font-medium whitespace-nowrap"
                        style={{ color: 'var(--body-text)' } as CSSProperties}
                      >
                        €{priceNumber.toFixed(2)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </SectionBoundary>
  );
}

