// viktor/contact.tsx
// Contact Section - Variant 1 (Main - full form)

import { SectionBoundary } from './components';
import type { CSSProperties } from 'react';
import type { RestaurantRow } from '../app/types';

export type ContactProps = {
  restaurant: RestaurantRow;
};

// ContactVariant1 – Main (full form)
export function ContactVariant1({ restaurant }: ContactProps) {
  const contact = restaurant.info?.contact ?? {};
  const address = restaurant.info?.location?.address;
  const city = restaurant.info?.location?.city;

  return (
    <SectionBoundary id="contact" aria-labelledby="contact-heading">
      <div className="flex items-center gap-4 mb-6">
        <h2
          id="contact-heading"
          className="text-xs font-semibold uppercase tracking-[0.3em] whitespace-nowrap"
          style={{ color: 'var(--accent-color)' } as CSSProperties}
        >
          Contact / Reservation
        </h2>
        <div
          className="h-px flex-1"
          style={{ backgroundColor: 'var(--accent-color)' } as CSSProperties}
        />
      </div>

      <div className="space-y-2.5 text-sm mb-8" style={{ color: 'var(--body-text)' } as CSSProperties}>
        {(address || city) && (
          <p className="font-medium">
            {address}
            {address && city ? ', ' : ''}
            {city}
          </p>
        )}
        {contact.phone && (
          <p>
            <span style={{ color: 'var(--secondary-text)' } as CSSProperties}>Tel:</span> {contact.phone}
          </p>
        )}
        {contact.email && (
          <p>
            <span style={{ color: 'var(--secondary-text)' } as CSSProperties}>Email:</span> {contact.email}
          </p>
        )}
        {contact.phone && (
          <p className="text-xs mt-4 italic" style={{ color: 'var(--secondary-text)' } as CSSProperties}>
            For same-day reservations, please call.
          </p>
        )}
      </div>

      <form className="space-y-5 max-w-md" action="/api/reservations" method="POST">
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
            type="text"
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
              type="email"
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
              type="tel"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
              htmlFor="date"
            >
              Date
            </label>
            <input
              id="date"
              name="date"
              className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
              type="date"
              required
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
              htmlFor="time"
            >
              Time
            </label>
            <input
              id="time"
              name="time"
              className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
              type="time"
              required
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
              htmlFor="partySize"
            >
              Guests
            </label>
            <input
              id="partySize"
              name="partySize"
              className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors"
              type="number"
              min={1}
              defaultValue={2}
              required
            />
          </div>
        </div>
        <div>
          <label
            className="block text-xs font-semibold uppercase tracking-wide mb-2 text-gray-900"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border border-slate-300 rounded-sm px-3 py-2.5 text-sm bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[(--brand-color)] focus:border-transparent transition-colors resize-none"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[(--brand-color)]"
          style={{ backgroundColor: 'var(--brand-color)' } as CSSProperties}
        >
          Send Request
        </button>
      </form>
    </SectionBoundary>
  );
}

