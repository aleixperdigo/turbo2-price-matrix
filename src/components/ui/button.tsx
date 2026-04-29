import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap text-2xs font-medium uppercase tracking-widest transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-bg-primary border border-accent font-bold hover:bg-accent/90',
        outline:
          'bg-transparent text-fg-muted border border-border-strong hover:border-fg-primary hover:text-fg-primary',
        ghost: 'bg-transparent text-fg-muted hover:bg-bg-elevated hover:text-fg-primary',
        chip: 'bg-transparent text-fg-muted border border-border hover:border-fg-primary hover:text-fg-primary aria-pressed:bg-accent aria-pressed:text-bg-primary aria-pressed:border-accent aria-pressed:font-bold',
      },
      size: {
        default: 'h-8 px-3',
        sm: 'h-7 px-2.5 text-3xs',
        lg: 'h-12 px-6 text-base',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { buttonVariants };
