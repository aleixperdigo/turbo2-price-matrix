import { Label } from './Label';
import type { Cycle } from '@/types';
import { cn } from '@/lib/utils';

interface BillingToggleProps {
  cycle: Cycle;
  setCycle: (c: Cycle) => void;
  totalBudget: number;
  monthlyTotal: number;
  annualTotal: number;
}

export function BillingToggle({
  cycle,
  setCycle,
  totalBudget,
  monthlyTotal,
  annualTotal,
}: BillingToggleProps) {
  const savingsPct = monthlyTotal > 0 ? ((monthlyTotal - annualTotal) / monthlyTotal) * 100 : 0;

  return (
    <div className="border border-accent bg-bg-secondary p-2.5 mb-3">
      <div className="flex justify-between items-center mb-2">
        <Label>Billing global</Label>
        {savingsPct > 0 && cycle === 'monthly' && (
          <span className="text-3xs text-status-verified font-bold">
            ↓ ahorra {savingsPct.toFixed(0)}% anual
          </span>
        )}
        {savingsPct > 0 && cycle === 'annual' && (
          <span className="text-3xs text-accent font-bold">
            ✓ ahorrando {savingsPct.toFixed(0)}%
          </span>
        )}
      </div>
      <div role="radiogroup" aria-label="Ciclo de facturación" className="flex gap-1.5 h-10">
        <button
          role="radio"
          aria-checked={cycle === 'monthly'}
          onClick={() => setCycle('monthly')}
          className={cn(
            'flex-1 font-display text-xl border-2 transition-all',
            cycle === 'monthly'
              ? 'bg-accent text-bg-primary border-accent'
              : 'bg-transparent text-fg-muted border-border-strong hover:border-fg-primary'
          )}
        >
          M
        </button>
        <button
          role="radio"
          aria-checked={cycle === 'annual'}
          onClick={() => setCycle('annual')}
          className={cn(
            'flex-1 font-display text-xl border-2 transition-all',
            cycle === 'annual'
              ? 'bg-accent text-bg-primary border-accent'
              : 'bg-transparent text-fg-muted border-border-strong hover:border-fg-primary'
          )}
        >
          A
        </button>
      </div>
      <div className="mt-2 flex justify-between text-2xs">
        <span className="text-fg-muted">{cycle === 'monthly' ? 'Mensual' : 'Anual'}</span>
        <span className="text-accent font-bold">{totalBudget.toFixed(2)}€/mes total</span>
      </div>
    </div>
  );
}
