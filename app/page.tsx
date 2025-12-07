import { HeroVariant1 } from '../sections/hero';
import { AboutVariant1 } from '../sections/about';
import type { RestaurantRow } from './types';
import sampleData from '../sections/sample-data.json';
import { RestaurantLayout } from './layout';

export default function Home() {
  const restaurant = sampleData.restaurant as RestaurantRow;
  const lang = 'en';

  return (
    <RestaurantLayout restaurant={restaurant}>
      <HeroVariant1 restaurant={restaurant} lang={lang} />
      <AboutVariant1 restaurant={restaurant} lang={lang} />
    </RestaurantLayout>
  );
}
