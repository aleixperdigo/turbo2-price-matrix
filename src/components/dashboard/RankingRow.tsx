import { StatusBadge } from './StatusBadge';
import { PLATFORMS } from '@/data/plans';
import { planCreditsAllowance } from '@/data/pricing';
import type { Cycle, Model, Plan, RankingRow as RankingRowT } from '@/types';
import { cn } from '@/lib/utils';

interface RankingRowProps {
  row: RankingRowT;
  maxEur: number;
  plan: Plan;
  cycle: Cycle;
  model: Model;
}

export function RankingRow({ row, maxEur, plan, cycle, model }: RankingRowProps) {
  const { result, planId } = row;
  const platform = PLATFORMS[plan.platform];
  const isNA = !!result.unavailable;
  const isUnlimited = !!result.isUnlimited;
  const eur = result.eur ?? 0;
  const credits = result.credits ?? null;
  const widthPct = isNA ? 0 : isUnlimited ? 100 : Math.max((eur / maxEur) * 100, 3);
  const planCreds = credits != null ? planCreditsAllowance(planId, cycle) : null;
  const creditsUsedPct =
    credits != null && planCreds ? (credits / planCreds) * 100 : null;

  const baseOpacity = isNA
    ? 'opacity-40'
    : result.status === 'unknown'
      ? 'opacity-55'
      : result.status === 'approx'
        ? 'opacity-85'
        : 'opacity-100';

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-[180px_200px_1fr_110px] items-center gap-2.5 py-2.5 border-b border-dashed border-border transition-colors hover:bg-bg-elevated',
        baseOpacity
      )}
    >
      {/* Modelo */}
      <div>
        <div className="font-bold text-2xs text-fg-primary">
          {model.label}
          {model.isNew && <span className="text-status-verified ml-1">★</span>}
        </div>
      </div>

      {/* Plataforma + plan + status */}
      <div>
        <div
          className="font-bold text-2xs tracking-wider flex items-center"
          style={{ color: platform.color }}
        >
          {!isNA && result.status && (
            <StatusBadge status={result.status} source={result.source} note={result.note} />
          )}
          {platform.label}
        </div>
        <div className="text-3xs text-fg-muted">
          {plan.label}
          {plan.platform !== 'fal' && plan.platform !== 'comfy' && (
            <span className="text-fg-dark"> · {cycle === 'annual' ? 'Anual' : 'Mensual'}</span>
          )}
        </div>
        {result.note && !isNA && (
          <div className="text-3xs text-accent mt-0.5">⚠ {result.note}</div>
        )}
      </div>

      {/* Barra de precio */}
      <div>
        <div
          className={cn(
            'h-5 relative overflow-hidden',
            isNA
              ? 'bg-[repeating-linear-gradient(45deg,#161616,#161616_4px,transparent_4px,transparent_8px)]'
              : isUnlimited
                ? 'bg-[repeating-linear-gradient(90deg,rgba(0,217,122,0.2),rgba(0,217,122,0.2)_8px,transparent_8px,transparent_16px)]'
                : 'bg-bg-elevated'
          )}
        >
          {!isNA && (
            <div
              className="h-full flex items-center pl-2 transition-all duration-500 ease-out"
              style={{
                width: `${widthPct}%`,
                backgroundColor: isUnlimited ? '#00d97a' : platform.color,
              }}
            >
              <span className="text-2xs text-bg-primary font-bold whitespace-nowrap">
                {isUnlimited ? 'INCLUIDO' : `${eur.toFixed(3)} €`}
              </span>
            </div>
          )}
        </div>
        {!isNA && credits != null && (
          <div className="text-3xs text-fg-dark mt-0.5 flex justify-between">
            <span>{credits.toFixed(0)} cr consumidos</span>
            {creditsUsedPct != null && planCreds && (
              <span className={cn(creditsUsedPct > 50 ? 'text-status-approx' : 'text-fg-dark')}>
                {creditsUsedPct.toFixed(1)}% del plan ({planCreds.toLocaleString()} cr/mes)
              </span>
            )}
          </div>
        )}
        {!isNA && credits === null && (
          <div className="text-3xs text-fg-dark mt-0.5">sin créditos · pago por uso</div>
        )}
      </div>

      {/* Precio EUR grande */}
      <div
        className="text-right font-display text-base"
        style={{ color: isNA ? '#6a4444' : platform.color }}
      >
        {isNA ? (
          <span className="text-2xs font-mono font-normal">
            {result.reason === 'maxDur'
              ? 'MAX DUR'
              : result.reason === 'no-pricing'
                ? 'NO DISP'
                : 'N/A'}
          </span>
        ) : isUnlimited ? (
          <span className="text-status-verified">INCL</span>
        ) : (
          `${eur.toFixed(3)}€`
        )}
      </div>
    </div>
  );
}
