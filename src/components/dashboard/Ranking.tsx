import { SortToggle } from './SortToggle';
import { RankingRow } from './RankingRow';
import { GroupHeader } from './GroupHeader';
import { Card } from '@/components/ui/card';
import { BASE_PLANS } from '@/data/plans';
import { MODELS } from '@/data/models';
import type { Cycle, RankingItem, SortMode } from '@/types';

interface RankingProps {
  ranking: RankingItem[];
  maxEur: number;
  cycle: Cycle;
  sortMode: SortMode;
  setSortMode: (m: SortMode) => void;
  activeModelCount: number;
  activePlanCount: number;
}

export function Ranking({
  ranking,
  maxEur,
  cycle,
  sortMode,
  setSortMode,
  activeModelCount,
  activePlanCount,
}: RankingProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
        <h2 className="font-display text-2xs text-fg-muted tracking-widest m-0">
          // RANKING — {activeModelCount}M × {activePlanCount}P · {cycle === 'annual' ? 'ANUAL' : 'MENSUAL'}
        </h2>
        <div className="text-2xs text-accent font-bold">
          ✓ verified · ≈ approx · ? unknown
        </div>
      </div>

      <SortToggle value={sortMode} onChange={setSortMode} />

      {ranking.length === 0 ? (
        <div className="py-10 text-center text-fg-dark">
          <div className="text-2xl text-accent mb-2">⊘</div>
          <div className="text-2xs">Selecciona al menos un modelo y un plan</div>
        </div>
      ) : (
        ranking.map((row, i) => {
          if (row.type === 'group_header') {
            return (
              <GroupHeader key={`hdr-${row.groupKey}-${i}`} header={row} isFirst={i === 0} />
            );
          }
          const plan = BASE_PLANS[row.planId];
          const model = MODELS[row.modelKey];
          if (!plan || !model) return null;
          return (
            <RankingRow
              key={`${row.modelKey}-${row.planId}-${i}`}
              row={row}
              maxEur={maxEur}
              plan={plan}
              cycle={cycle}
              model={model}
            />
          );
        })
      )}
    </Card>
  );
}
