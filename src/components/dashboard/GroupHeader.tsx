import type { RankingGroupHeader } from '@/types';
import { cn } from '@/lib/utils';

interface GroupHeaderProps {
  header: RankingGroupHeader;
  isFirst: boolean;
}

export function GroupHeader({ header, isFirst }: GroupHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between p-2 mb-1.5 bg-bg-panel border-l-[3px] border-r border-y',
        !isFirst && 'mt-3.5'
      )}
      style={{
        borderLeftColor: header.color,
        borderTopColor: header.color + '33',
      }}
    >
      <div className="flex items-baseline gap-2.5 min-w-0">
        <span
          className="font-display text-sm md:text-base tracking-wider truncate"
          style={{ color: header.color }}
        >
          {header.label}
        </span>
        <span className="text-3xs text-fg-dark whitespace-nowrap">{header.subtitle}</span>
      </div>
      {header.cheapest && !header.cheapest.unavailable && (
        <div className="text-3xs text-fg-muted flex items-center gap-1.5 whitespace-nowrap">
          <span className="hidden sm:inline">más barato:</span>
          <span
            className="font-display text-2xs"
            style={{
              color: header.cheapest.isUnlimited ? '#00d97a' : header.color,
            }}
          >
            {header.cheapest.isUnlimited
              ? 'INCLUIDO'
              : `${(header.cheapest.eur ?? 0).toFixed(3)}€`}
          </span>
          {header.platformBest && (
            <span className="font-bold" style={{ color: header.platformBest.color }}>
              en {header.platformBest.label}
            </span>
          )}
          {header.modelBest && (
            <span className="text-fg-primary font-bold">con {header.modelBest.label}</span>
          )}
        </div>
      )}
    </div>
  );
}
