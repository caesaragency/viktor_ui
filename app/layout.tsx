import React, { type ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import type { RestaurantRow } from './types';
import './globals.css';

export const metadata: Metadata = {
  title: "Restaurant Preview",
  description: "Restaurant website sections preview",
};

type RestaurantLayoutProps = {
  restaurant: RestaurantRow;
  children: ReactNode;
};

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/hours', label: 'Hours & Location' },
  { href: '/contact', label: 'Reservations' },
];

export function RestaurantLayout({ restaurant, children }: RestaurantLayoutProps) {
  const brand = restaurant.theme?.brand ?? '#b91c1c';
  const accent = restaurant.theme?.accent ?? '#111827';
  const pageBackground = restaurant.theme?.pageBackground ?? '#faf9f3';
  const paperBackground = restaurant.theme?.paperBackground ?? '#ffffff';
  const mutedText = restaurant.theme?.mutedText;
  const mode = restaurant.theme?.mode ?? 'light';

  // Determine if dark theme
  const isDark = mode === 'dark';

  // Header background: dark for dark themes, light for light themes
  const headerBg = isDark
    ? 'rgba(15, 23, 42, 0.95)' // dark slate with transparency
    : 'rgba(255, 255, 255, 0.90)'; // white with transparency

  // Border colors: lighter for dark themes, darker for light themes
  const borderColor = isDark
    ? 'rgba(255, 255, 255, 0.1)' // subtle white border for dark
    : 'rgba(15, 23, 42, 0.08)'; // subtle dark border for light

  // Text colors: use accent color for consistency
  // For dark themes, accent is light (like #c7d2fe), so use it for body text
  // For light themes, use dark text that's visible on light backgrounds
  const bodyTextColor = isDark 
    ? accent // Use accent color directly for dark themes (it's already light)
    : '#1f2937'; // Dark text for light themes
  const secondaryTextColor = isDark
    ? mutedText ?? accent // Use mutedText or accent for secondary in dark
    : '#475569'; // Medium dark for light themes

  const rootStyle = {
    '--brand-color': brand,
    '--accent-color': accent,
    '--page-bg': pageBackground,
    '--paper-bg': paperBackground,
    '--body-text': bodyTextColor,
    '--secondary-text': secondaryTextColor,
    backgroundColor: pageBackground,
  } as React.CSSProperties;

  return (
    <div className={`min-h-screen ${restaurant.theme?.brick ? 'brick-wall' : ''} ${isDark ? '' : 'text-slate-900'}`} style={rootStyle}>
      {/* Top bar / Header */}
      <header
        className="sticky top-0 z-10 border-b backdrop-blur-sm"
        style={{
          backgroundColor: headerBg,
          borderColor: borderColor,
        }}
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-[10px] font-semibold tracking-[0.4em] uppercase hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent-color)' }}
          >
            {restaurant.name}
          </Link>

          <nav className="flex items-center gap-4 text-xs sm:gap-6 sm:text-sm">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-1 text-xs sm:text-sm transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{
                  color: 'var(--accent-color)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* "Paper" content area */}
      <main>
        <div className="mx-auto max-w-5xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 lg:px-8 lg:pt-12">
          <div
            className="rounded-sm border border-slate-200/80 bg-white/95 px-4 py-6 shadow-sm sm:px-8 sm:py-8 lg:px-12 lg:py-12"
            style={{
              backgroundColor: 'var(--paper-bg)',
              borderColor: borderColor,
            }}
          >
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

// Default export required by Next.js
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

