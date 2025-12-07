import { HoursVariant1 } from '../../sections/hours';
import { FooterVariant1 } from '../../sections/footer';
import type { RestaurantRow, OpeningHour } from '../types';
import sampleData from '../../sections/sample-data.json';
import { RestaurantLayout } from '../layout';

export default function HoursPage() {
  const restaurant = sampleData.restaurant as RestaurantRow;
  const openingHours = sampleData.openingHours as OpeningHour[];

  return (
    <RestaurantLayout restaurant={restaurant}>
      <HoursVariant1 openingHours={openingHours} />
      <FooterVariant1 restaurant={restaurant} />
    </RestaurantLayout>
  );
}

