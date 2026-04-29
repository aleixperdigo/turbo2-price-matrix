import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center text-3xs font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent text-bg-primary px-2 py-0.5',
        verified:
          'bg-status-verified text-bg-primary w-3.5 h-3.5 font-display text-2xs',
        approx:
          'bg-status-approx text-bg-primary w-3.5 h-3.5 font-display text-2xs',
        unknown:
          'bg-status-unknown text-bg-primary w-3.5 h-3.5 font-display text-2xs',
        outline: 'border border-border text-fg-muted px-2 py-0.5',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { badgeVariants };
