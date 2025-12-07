// // viktor/hours.tsx
// // Hours Section - Variant 1 (Main - standard)

// import Image from 'next/image';
// import { SectionBoundary } from './components';
// import type { CSSProperties } from 'react';
// import type { OpeningHour } from '../app/types';

// export type HoursProps = {
//   openingHours: OpeningHour[];
// };

// const WEEKDAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

// // HoursVariant1 – Main (standard)
// export function HoursVariant1({ openingHours }: HoursProps) {
//   // Group hours by weekday and combine time ranges
//   const groupedHours = openingHours.reduce((acc, hour) => {
//     if (!acc[hour.weekday]) {
//       acc[hour.weekday] = [];
//     }
//     acc[hour.weekday].push(hour);
//     return acc;
//   }, {} as Record<number, typeof openingHours>);

//   // Sort weekdays and format
//   const formattedHours = Object.keys(groupedHours)
//     .map(Number)
//     .sort((a, b) => a - b)
//     .map((weekday) => {
//       const hours = groupedHours[weekday];
//       const closedHours = hours.filter((h) => h.is_closed);
      
//       if (closedHours.length === hours.length) {
//         return { weekday, timeRanges: ['Closed'] };
//       }

//       const openHours = hours
//         .filter((h) => !h.is_closed)
//         .map((h) => `${h.opens_at.slice(0, 5)} – ${h.closes_at.slice(0, 5)}`);
      
//       return { weekday, timeRanges: openHours };
//     });

//   return (
//     <SectionBoundary id="hours" aria-labelledby="hours-heading" className="border-t-0 pt-0 mt-0">
//       <div className="flex items-center gap-4 mb-6">
//         <h2
//           id="hours-heading"
//           className="text-s font-semibold uppercase tracking-[0.3em] whitespace-nowrap"
//           style={{ color: 'var(--accent-color)' } as CSSProperties}
//         >
//           Hours & Location
//         </h2>
//         <div
//           className="h-px flex-1"
//           style={{ backgroundColor: 'var(--accent-color)' } as CSSProperties}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-start mb-6">
//         <ul className="space-y-2.5 text-[17px] md:col-span-2">
//           {formattedHours.map((item) => (
//             <li key={item.weekday} className="flex items-baseline">
//               <span
//                 className="font-medium min-w-14 text-[17px]"
//                 style={{ color: 'var(--accent-color)' } as CSSProperties}
//               >
//                 {WEEKDAY_LABELS[item.weekday]}:
//               </span>
//               <div className="flex items-baseline ml-4 flex-wrap">
//                 <span
//                   className="font-semibold text-[17px] whitespace-nowrap"
//                   style={{ color: 'var(--body-text)' } as CSSProperties}
//                 >
//                   {item.timeRanges[0]}
//                 </span>
//                 {item.timeRanges.length > 1 && (
//                   <>
//                     <span className="ml-16" />
//                     <span
//                       className="font-semibold text-[17px] whitespace-nowrap"
//                       style={{ color: 'var(--body-text)' } as CSSProperties}
//                     >
//                       {item.timeRanges[1]}
//                     </span>
//                   </>
//                 )}
//               </div>
//             </li>
//           ))}
//         </ul>
        
//         <div className="relative w-full aspect-[5/3] md:col-span-5 overflow-hidden rounded-sm border border-slate-200/80 bg-slate-50 shadow-sm">
//           <Image
//             src="/images/2.jpg"
//             alt=""
//             fill
//             className="object-cover transition-transform duration-300 hover:scale-105"
//             sizes="(max-width: 768px) 100vw, 71vw"
//           />
//         </div>
//       </div>

//       {/* Map Section */}
//       <div className="mt-8">
//         <h3
//           className="text-xs font-semibold uppercase tracking-[0.3em] mb-4"
//           style={{ color: 'var(--accent-color)' } as CSSProperties}
//         >
//           Location
//         </h3>
//         <div className="w-full h-64 sm:h-80 md:h-96 rounded-sm overflow-hidden border border-slate-200/80">
//           <iframe
//             src="https://www.google.com/maps?q=Calle+Mayor+10,+Alicante,+Spain&output=embed"
//             width="100%"
//             height="100%"
//             style={{ border: 0 }}
//             allowFullScreen
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//             title="Restaurant Location - Calle Mayor 10, Alicante"
//           />
//         </div>
//         <p
//           className="text-sm mt-3"
//           style={{ color: 'var(--secondary-text)' } as CSSProperties}
//         >
//           Calle Mayor 10, Alicante
//         </p>
//       </div>
//     </SectionBoundary>
//   );
// }

