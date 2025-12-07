# Restaurant Platform - Section Components

This folder contains standalone React components for all restaurant sections. Each section file contains the **v1 variant** (the standard/default version) of that section, configured with the **ink theme** (dark mode with indigo colors).

## 📁 File Structure

```
viktor/
├── README.md           # This file
├── types.ts            # TypeScript type definitions
├── helpers.ts         # Shared helper functions
├── components.tsx      # Shared components (SectionBoundary)
├── layout.tsx         # RestaurantLayout wrapper (header + paper card)
├── styles.css          # Global styles
├── sample-data.json   # Sample restaurant data with ink theme
├── example.tsx        # Complete React example
├── example.html       # Static HTML example
│
├── hero.tsx           # Hero section - Variant 1
├── about.tsx          # About section - Variant 1
├── menu.tsx           # Menu section - Variant 1
├── hours.tsx          # Hours section - Variant 1
├── gallery.tsx         # Gallery section - Variant 1
├── contact.tsx        # Contact section - Variant 1
└── footer.tsx         # Footer section - Variant 1
```

## 🎨 Theme System - Ink Theme

All components use CSS variables for theming. The **ink theme** is configured in `sample-data.json`:

```css
:root {
  --brand-color: #818cf8;        /* Indigo brand color */
  --accent-color: #c7d2fe;       /* Light indigo accent */
  --body-text: #c7d2fe;          /* Light indigo for body text (dark theme) */
  --secondary-text: #94a3b8;     /* Slate-400 for secondary text */
  --page-bg: #020617;            /* Almost black page background */
  --paper-bg: #0f172a;          /* Dark slate content card background */
}
```

## 📦 Dependencies

### Required
- **React** (for JSX)
- **Tailwind CSS** (for styling classes)
- **TypeScript** (for type safety)

### Optional
- **Next.js Image** component (used in `hero.tsx` and `gallery.tsx`)
  - If not using Next.js, replace `import Image from 'next/image'` with regular `<img>` tags
  - Example replacement:
    ```tsx
    // Instead of:
    <Image src={src} alt="..." fill className="..." />
    
    // Use:
    <img src={src} alt="..." className="absolute inset-0 w-full h-full object-cover ..." />
    ```

## 🚀 Usage

### Complete Example (React/Next.js)

**IMPORTANT**: Always wrap your sections with `RestaurantLayout` to get the header, background, and paper card container.

```tsx
import { RestaurantLayout } from './layout';
import { HeroVariant1 } from './hero';
import { AboutVariant1 } from './about';
import { MenuVariant1 } from './menu';
import { HoursVariant1 } from './hours';
import { GalleryVariant1 } from './gallery';
import { ContactVariant1 } from './contact';
import { FooterVariant1 } from './footer';
import type { RestaurantRow, MenuCategory, MenuItem, OpeningHour } from './types';
import sampleData from './sample-data.json';
import './styles.css'; // IMPORTANT: Include the CSS file

function App() {
  const restaurant = sampleData.restaurant as RestaurantRow;
  const categories = sampleData.categories as MenuCategory[];
  const items = sampleData.items as MenuItem[];
  const openingHours = sampleData.openingHours as OpeningHour[];

  return (
    <RestaurantLayout restaurant={restaurant}>
      <HeroVariant1 restaurant={restaurant} lang="en" domain="caesar-trattoria" />
      <AboutVariant1 restaurant={restaurant} lang="en" />
      <MenuVariant1 categories={categories} items={items} lang="en" />
      <HoursVariant1 openingHours={openingHours} />
      <GalleryVariant1 items={items} />
      <ContactVariant1 restaurant={restaurant} />
      <FooterVariant1 restaurant={restaurant} />
    </RestaurantLayout>
  );
}
```

### Setup Steps

1. **Include `styles.css`** in your project
   - In Next.js: Import it in your root layout or `_app.tsx`
   - In Create React App: Import it in `index.tsx` or `App.tsx`
   - In plain HTML: Add `<link rel="stylesheet" href="./styles.css">` in `<head>`

3. **Use `RestaurantLayout`** to wrap all sections
   - This provides the header navigation, background, and paper card container
   - It automatically sets up all CSS variables based on the restaurant theme

4. **Import and use section components** inside the layout

## 📝 Component Props

### HeroVariant1
```tsx
<HeroVariant1 
  restaurant={restaurant} 
  lang="en" | "es" 
  domain="restaurant-slug" 
/>
```

### AboutVariant1
```tsx
<AboutVariant1 
  restaurant={restaurant} 
  lang="en" | "es" 
/>
```

### MenuVariant1
```tsx
<MenuVariant1 
  categories={categories} 
  items={items} 
  lang="en" | "es" 
/>
```

### HoursVariant1
```tsx
<HoursVariant1 
  openingHours={openingHours} 
/>
```

### GalleryVariant1
```tsx
<GalleryVariant1 
  items={items} 
/>
```

### ContactVariant1
```tsx
<ContactVariant1 
  restaurant={restaurant} 
/>
```

### FooterVariant1
```tsx
<FooterVariant1 
  restaurant={restaurant} 
/>
```

## 🎯 Key Features

- **Fully typed** with TypeScript
- **Theme-aware** using CSS variables (ink theme configured)
- **Responsive** with Tailwind breakpoints
- **Accessible** with proper ARIA labels
- **Localized** support for English and Spanish
- **All v1 variants** - standard/default layouts for all sections

## 🔧 Customization

All components use Tailwind CSS classes and inline styles with CSS variables. You can:

1. **Change colors**: Update CSS variables in your root stylesheet
2. **Modify spacing**: Adjust Tailwind classes (e.g., `mb-6` → `mb-8`)
3. **Update typography**: Change font classes (e.g., `text-xs` → `text-sm`)
4. **Adjust layout**: Modify grid/flex classes

## 📄 Sample Data

The `sample-data.json` file contains a complete example restaurant with:
- Restaurant info (name, tagline, description, contact, location)
- Menu categories and items
- Opening hours
- **Ink theme configuration** (dark mode, indigo colors, no brick wall)

Use this to test your components without connecting to a database.

## ⚠️ Important Notes

### Required Setup

1. **RestaurantLayout is REQUIRED**: Always wrap your sections with `<RestaurantLayout>`. Without it, you won't have:
   - The header navigation bar
   - The page background color
   - The "paper card" container (white/dark card with border)
   - CSS variables properly set

2. **Include styles.css**: The CSS file contains basic global styles. Make sure to import it:
   ```tsx
   import './styles.css';
   ```

3. **Tailwind CSS**: All components use Tailwind classes. Make sure Tailwind is configured in your project.

### Other Notes

- The `LanguageSwitcher` in `hero.tsx` is a simplified placeholder. Replace it with your own implementation if needed.
- Image paths in `sample-data.json` are examples. Update them to match your actual image locations.
- All components are server-side compatible (no client-side hooks used).
- The contact form submits to `/api/reservations` - update this endpoint in your application.
- **Ink theme** is a dark theme - make sure your background colors are set correctly for visibility.

## 🐛 Troubleshooting

**Images not showing?**
- Check image paths in your data
- Replace Next.js `Image` component with regular `<img>` if not using Next.js
- Ensure images are accessible at the specified paths

**Styles not applying?**
- Make sure Tailwind CSS is configured in your project
- Verify CSS variables are defined in your root stylesheet
- Check that Tailwind classes are not being purged

**Type errors?**
- Ensure all imports from `./types` are correct
- Verify your data matches the type definitions
- Check that TypeScript is properly configured

**Dark theme visibility issues?**
- Ensure `--page-bg` and `--paper-bg` are dark colors
- Verify `--body-text` and `--accent-color` are light colors for contrast
- Check that text colors use the CSS variables correctly

