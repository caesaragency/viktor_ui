import { ContactVariant1 } from '../../sections/contact';
import { FooterVariant1 } from '../../sections/footer';
import type { RestaurantRow } from '../types';
import sampleData from '../../sections/sample-data.json';
import { RestaurantLayout } from '../layout';

export default function ContactPage() {
  const restaurant = sampleData.restaurant as RestaurantRow;

  return (
    <RestaurantLayout restaurant={restaurant}>
      <ContactVariant1 restaurant={restaurant} />
      <FooterVariant1 restaurant={restaurant} />
    </RestaurantLayout>
  );
}

