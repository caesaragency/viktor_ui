// viktor/components.tsx
// Shared components for sections

import type { ReactNode } from 'react';

type SectionBoundaryProps = {
  id?: string;
  'aria-labelledby'?: string;
  children: ReactNode;
  className?: string;
};

export function SectionBoundary({
  id,
  'aria-labelledby': ariaLabelledBy,
  children,
  className = '',
}: SectionBoundaryProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`border-t border-slate-200 pt-8 mt-8 first:mt-0 first:pt-0 first:border-t-0 ${className}`}
    >
      {children}
    </section>
  );
}

