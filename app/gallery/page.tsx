import { GalleryVariant1 } from '../../sections/gallery';
import { FooterVariant1 } from '../../sections/footer';
import type { RestaurantRow, MenuItem } from '../types';
import sampleData from '../../sections/sample-data.json';
import { RestaurantLayout } from '../layout';

export default function GalleryPage() {
  const restaurant = sampleData.restaurant as RestaurantRow;
  const items = sampleData.items as MenuItem[];

  return (
    <RestaurantLayout restaurant={restaurant}>
      <GalleryVariant1 items={items} />
      <FooterVariant1 restaurant={restaurant} />
    </RestaurantLayout>
  );
}

