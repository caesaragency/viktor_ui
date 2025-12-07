// viktor/helpers.ts
// Shared helper functions for sections

export function getLocalizedText(
  obj: Record<string, string> | undefined | null,
  lang: string
): string {
  if (!obj) return '';
  if (obj[lang]) return obj[lang];
  if (obj.en) return obj.en;
  const first = Object.values(obj)[0];
  return typeof first === 'string' ? first : '';
}

export function normalizeImagePath(path: string | undefined | null): string | null {
  if (!path) return null;
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  return path.startsWith('/') ? path : `/${path}`;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

