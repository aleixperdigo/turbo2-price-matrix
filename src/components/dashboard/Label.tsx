import { cn } from '@/lib/utils';

export function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('label-mono label-bar', className)}>{children}</div>;
}
