import { useState } from 'react';
import { ChevronDown, Check, AlertCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { BASE_PLANS, PLATFORMS } from '@/data/plans';
import { planBudgetEUR, planCreditsAllowance } from '@/data/pricing';
import type { Cycle, PlatformId } from '@/types';
import { cn } from '@/lib/utils';

interface PlatformBlockProps {
  platformId: PlatformId;
  activePlanIds: string[];
  setActivePlanIds: (ids: string[]) => void;
  cycle: Cycle;
}

export function PlatformBlock({
  platformId,
  activePlanIds,
  setActivePlanIds,
  cycle,
}: PlatformBlockProps) {
  const platform = PLATFORMS[platformId];
  const allPlatformPlans = Object.entries(BASE_PLANS).filter(
    ([, p]) => p.platform === platformId
  );
  const activePlatformPlans = allPlatformPlans.filter(([k]) => activePlanIds.includes(k));
  const isActive = activePlatformPlans.length > 0;
  const [expanded, setExpanded] = useState(false);

  const togglePlatform = () => {
    if (isActive) {
      setActivePlanIds(activePlanIds.filter((id) => BASE_PLANS[id].platform !== platformId));
    } else {
      setActivePlanIds([...activePlanIds, allPlatformPlans[0][0]]);
      setExpanded(true);
    }
  };

  const setSinglePlan = (planId: string) => {
    const cleaned = activePlanIds.filter((id) => BASE_PLANS[id].platform !== platformId);
    setActivePlanIds([...cleaned, planId]);
  };

  const currentPlanId = activePlatformPlans[0]?.[0];
  const currentPlan = currentPlanId ? BASE_PLANS[currentPlanId] : null;
  const budget = currentPlanId ? planBudgetEUR(currentPlanId, cycle) : null;
  const creds = currentPlanId ? planCreditsAllowance(currentPlanId, cycle) : null;
  const cycleFallback = currentPlan && cycle === 'annual' && !currentPlan.annual;
  const isVerifiedSource = !!platform.verifiedSource;

  return (
    <div
      className={cn(
        'border bg-bg-secondary mb-1.5 transition-all',
        isActive ? 'border-current bg-bg-secondary' : 'border-border bg-bg-panel'
      )}
      style={{ borderColor: isActive ? platform.color : undefined }}
    >
      <Collapsible open={expanded} onOpenChange={setExpanded}>
        <div className="flex items-center justify-between p-2.5">
          <button
            onClick={togglePlatform}
            className="flex items-center gap-2 cursor-pointer flex-1 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-pressed={isActive}
          >
            <div
              className={cn(
                'w-2.5 h-2.5 rounded-full border-[1.5px] flex-shrink-0',
                isActive ? '' : 'border-fg-dim'
              )}
              style={{
                backgroundColor: isActive ? platform.color : 'transparent',
                borderColor: isActive ? platform.color : undefined,
              }}
            />
            <span
              className="font-display text-2xs tracking-wider"
              style={{ color: isActive ? platform.color : '#666' }}
            >
              {platform.label}
            </span>
            <Tooltip>
              <TooltipTrigger asChild>
                {isVerifiedSource ? (
                  <Check className="w-3 h-3 text-status-verified" aria-label="Fuente verificada" />
                ) : (
                  <AlertCircle
                    className="w-3 h-3 text-status-approx"
                    aria-label="Datos aproximados"
                  />
                )}
              </TooltipTrigger>
              <TooltipContent>
                {isVerifiedSource
                  ? `Fuente verificada: ${platform.verifiedSource}`
                  : 'Datos aproximados o desconocidos'}
              </TooltipContent>
            </Tooltip>
          </button>
          {isActive && allPlatformPlans.length > 1 && (
            <CollapsibleTrigger asChild>
              <button
                className="text-fg-muted hover:text-fg-primary text-base px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={expanded ? 'Colapsar planes' : 'Expandir planes'}
              >
                <ChevronDown
                  className={cn(
                    'w-3.5 h-3.5 transition-transform',
                    expanded && 'rotate-180'
                  )}
                />
              </button>
            </CollapsibleTrigger>
          )}
        </div>

        {isActive && currentPlan && (
          <div className="px-2.5 pb-2.5">
            {!expanded && (
              <div className="text-2xs text-fg-muted pl-4.5">
                <span className="text-fg-primary font-bold">{currentPlan.label}</span>
                {budget !== null ? (
                  <>
                    <span className="text-accent"> · {budget.toFixed(2)}€/mes</span>
                    {creds && (
                      <span className="text-fg-dark"> · {creds.toLocaleString()} cr</span>
                    )}
                  </>
                ) : (
                  <span className="text-fg-dark"> · pago por uso</span>
                )}
                {cycleFallback && (
                  <div className="text-status-approx text-3xs mt-0.5">⚠ solo mensual</div>
                )}
              </div>
            )}

            <CollapsibleContent>
              <div className="pl-4.5 flex flex-col gap-1">
                {allPlatformPlans.map(([planId, plan]) => {
                  const isCurrent = planId === currentPlanId;
                  const planB = planBudgetEUR(planId, cycle);
                  const planC = planCreditsAllowance(planId, cycle);
                  return (
                    <button
                      key={planId}
                      onClick={() => setSinglePlan(planId)}
                      aria-pressed={isCurrent}
                      className={cn(
                        'border px-2 py-1 text-left text-3xs flex justify-between items-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                        isCurrent
                          ? 'bg-bg-elevated text-fg-primary'
                          : 'bg-transparent text-fg-muted border-border hover:border-fg-primary'
                      )}
                      style={{ borderColor: isCurrent ? platform.color : undefined }}
                    >
                      <span>{plan.label}</span>
                      <span className={cn(isCurrent ? 'text-accent' : 'text-fg-dim')}>
                        {planB !== null ? `${planB.toFixed(0)}€` : 'use'}
                        {planC && (
                          <span className="text-fg-dim ml-1.5">
                            · {planC < 10000 ? (planC / 1000).toFixed(1) : (planC / 1000).toFixed(0)}K
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </CollapsibleContent>
          </div>
        )}
      </Collapsible>
    </div>
  );
}
