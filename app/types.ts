// viktor/types.ts
// Type definitions for restaurant sections

export type LocalizedText = Record<string, string>;

export interface RestaurantInfoLocation {
  address?: string;
  city?: string;
  country?: string;
}

export interface RestaurantInfoContact {
  phone?: string;
  email?: string;
}

export interface RestaurantInfo {
  tagline?: LocalizedText;
  description?: LocalizedText;
  location?: RestaurantInfoLocation;
  contact?: RestaurantInfoContact;
  hero_image_path?: string;
  logo_path?: string;
  [key: string]: unknown;
}

export interface RestaurantTheme {
  mode?: 'light' | 'dark' | string;
  brand?: string;
  accent?: string;
  background?: string;
  pageBackground?: string;
  paperBackground?: string;
  mutedText?: string;
  brick?: boolean;
  brickLine?: string;
  [key: string]: unknown;
}

export interface RestaurantRow {
  id: string;
  slug: string;
  name: string;
  is_published: boolean;
  deleted_at: string | null;
  theme: RestaurantTheme | null;
  info: RestaurantInfo | null;
  settings: Record<string, unknown> | null;
}

export interface MenuCategory {
  id: string;
  restaurant_id: string;
  name: LocalizedText;
  description: LocalizedText | null;
  slug: string;
  sort_order: number | null;
  is_available: boolean | null;
}

export interface MenuItem {
  id: string;
  restaurant_id: string;
  category_id: string | null;
  name: LocalizedText;
  description: LocalizedText | null;
  price: number | string;
  images: string[] | null;
  tags: string[] | null;
  is_available: boolean | null;
  sort_order: number | null;
}

export interface OpeningHour {
  id: string;
  restaurant_id: string;
  weekday: number;
  opens_at: string;
  closes_at: string;
  is_closed: boolean;
}

