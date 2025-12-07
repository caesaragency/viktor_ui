import { MenuVariant1 } from '../../sections/menu';
import { FooterVariant1 } from '../../sections/footer';
import type { RestaurantRow, MenuCategory, MenuItem } from '../types';
import sampleData from '../../sections/sample-data.json';
import { RestaurantLayout } from '../layout';

export default function MenuPage() {
  const restaurant = sampleData.restaurant as RestaurantRow;
  const categories = sampleData.categories as MenuCategory[];
  const items = sampleData.items as MenuItem[];
  const lang = 'en';

  return (
    <RestaurantLayout restaurant={restaurant}>
      <MenuVariant1 categories={categories} items={items} lang={lang} />
      <FooterVariant1 restaurant={restaurant} />
    </RestaurantLayout>
  );
}

