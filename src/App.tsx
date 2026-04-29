import { useMemo, useState } from 'react';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Header } from '@/components/dashboard/Header';
import { Footer } from '@/components/dashboard/Footer';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { ModelSelector } from '@/components/dashboard/ModelSelector';
import { ParamsBar } from '@/components/dashboard/ParamsBar';
import { Ranking } from '@/components/dashboard/Ranking';
import {
  BASE_PLANS,
  DEFAULT_ACTIVE_MODELS,
  DEFAULT_ACTIVE_PLANS,
  PLATFORMS,
} from '@/data/plans';
import { MODELS } from '@/data/models';
import {
  planBudgetEUR,
  priceForPlan,
} from '@/data/pricing';
import type {
  Audio,
  Cycle,
  Mode,
  PlatformId,
  RankingItem,
  RankingRow as RankingRowT,
  Resolution,
  SortMode,
  StatusFilter as StatusFilterT,
} from '@/types';

const PLATFORM_ORDER: PlatformId[] = ['freepik', 'fal', 'comfy', 'higgsfield', 'weavy'];

export default function App() {
  const [activeModelIds, setActiveModelIds] = useState<string[]>(DEFAULT_ACTIVE_MODELS);
  const [activePlanIds, setActivePlanIds] = useState<string[]>(DEFAULT_ACTIVE_PLANS);
  const [cycle, setCycle] = useState<Cycle>('annual');
  const [mode, setMode] = useState<Mode>('t2v');
  const [audio, setAudio] = useState<Audio>('off');
  const [res, setRes] = useState<Resolution>('1080p');
  const [dur, setDur] = useState(5);
  const [statusFilter, setStatusFilter] = useState<StatusFilterT>('all');
  const [sortMode, setSortMode] = useState<SortMode>('price');

  const toggleModel = (k: string) => {
    const isActivating = !activeModelIds.includes(k);
    const newActive = isActivating
      ? [...activeModelIds, k]
      : activeModelIds.filter((x) => x !== k);
    setActiveModelIds(newActive);
    // Auto-switch a I2V si se activa un modelo de la familia GROK
    if (isActivating && MODELS[k]?.family === 'GROK' && mode !== 'i2v') {
      setMode('i2v');
    }
  };

  const ranking: RankingItem[] = useMemo(() => {
    const rows: RankingRowT[] = [];
    activeModelIds.forEach((modelKey) => {
      activePlanIds.forEach((planId) => {
        const result = priceForPlan(
          planId,
          cycle,
          modelKey,
          MODELS[modelKey],
          mode,
          res,
          dur,
          audio
        );
        rows.push({ type: 'row', modelKey, planId, result });
      });
    });

    const filtered = rows.filter((r) => {
      if (statusFilter === 'all') return true;
      if (statusFilter === 'verified') return r.result.status === 'verified' || r.result.unavailable;
      if (statusFilter === 'approx_plus')
        return r.result.status !== 'unknown' || r.result.unavailable;
      return true;
    });

    const byPrice = (a: RankingRowT, b: RankingRowT) => {
      if (a.result.unavailable && !b.result.unavailable) return 1;
      if (!a.result.unavailable && b.result.unavailable) return -1;
      if (a.result.unavailable && b.result.unavailable) return 0;
      if (a.result.isUnlimited && !b.result.isUnlimited) return -1;
      if (b.result.isUnlimited && !a.result.isUnlimited) return 1;
      return (a.result.eur ?? 0) - (b.result.eur ?? 0);
    };

    if (sortMode === 'price') {
      return [...filtered].sort(byPrice);
    }

    if (sortMode === 'model') {
      const groups: Record<string, RankingRowT[]> = {};
      filtered.forEach((r) => {
        if (!groups[r.modelKey]) groups[r.modelKey] = [];
        groups[r.modelKey].push(r);
      });
      const orderedKeys = activeModelIds.filter((k) => groups[k]);
      const result: RankingItem[] = [];
      orderedKeys.forEach((modelKey) => {
        const groupRows = groups[modelKey].sort(byPrice);
        const cheapest = groupRows.find((r) => !r.result.unavailable);
        result.push({
          type: 'group_header',
          groupKey: 'model_' + modelKey,
          label: MODELS[modelKey].label,
          subtitle: groupRows.length + ' plataformas',
          color: '#ffd400',
          cheapest: cheapest ? cheapest.result : null,
          platformBest: cheapest ? PLATFORMS[BASE_PLANS[cheapest.planId].platform] : null,
        });
        groupRows.forEach((r) => result.push(r));
      });
      return result;
    }

    if (sortMode === 'platform') {
      const groups: Record<string, RankingRowT[]> = {};
      filtered.forEach((r) => {
        const platformId = BASE_PLANS[r.planId].platform;
        if (!groups[platformId]) groups[platformId] = [];
        groups[platformId].push(r);
      });
      const orderedPlatforms = PLATFORM_ORDER.filter((p) => groups[p]);
      const result: RankingItem[] = [];
      orderedPlatforms.forEach((platformId) => {
        const groupRows = groups[platformId].sort(byPrice);
        const cheapest = groupRows.find((r) => !r.result.unavailable);
        const platform = PLATFORMS[platformId];
        result.push({
          type: 'group_header',
          groupKey: 'platform_' + platformId,
          label: platform.label,
          subtitle: groupRows.length + ' modelos',
          color: platform.color,
          cheapest: cheapest ? cheapest.result : null,
          modelBest: cheapest ? MODELS[cheapest.modelKey] : null,
        });
        groupRows.forEach((r) => result.push(r));
      });
      return result;
    }

    return filtered;
  }, [activeModelIds, activePlanIds, cycle, mode, res, dur, audio, statusFilter, sortMode]);

  const maxEur = Math.max(
    ...ranking
      .filter((r) => r.type === 'row' && !r.result.unavailable && !r.result.isUnlimited)
      .map((r) => (r as RankingRowT).result.eur ?? 0),
    0.01
  );

  const totalBudget = activePlanIds.reduce(
    (s, id) => s + (planBudgetEUR(id, cycle) ?? 0),
    0
  );
  const monthlyTotal = activePlanIds.reduce(
    (s, id) => s + (planBudgetEUR(id, 'monthly') ?? 0),
    0
  );
  const annualTotal = activePlanIds.reduce(
    (s, id) => s + (planBudgetEUR(id, 'annual') ?? 0),
    0
  );

  const audioApplies = activeModelIds.some((k) => MODELS[k]?.audioApplies);

  const globalStats = useMemo(() => {
    let v = 0,
      a = 0,
      u = 0;
    Object.values(MODELS).forEach((m) => {
      Object.values(m.pricing).forEach((byRes) => {
        Object.values(byRes).forEach((byMode) => {
          Object.values(byMode).forEach((cell) => {
            if (cell === null) return;
            if (cell.status === 'verified') v++;
            else if (cell.status === 'approx') a++;
            else if (cell.status === 'unknown') u++;
          });
        });
      });
    });
    return { v, a, u };
  }, []);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="bg-bg-primary text-fg-primary min-h-screen font-mono text-[12.5px] leading-relaxed p-3 md:p-5 max-w-[1480px] mx-auto">
        <Header globalStats={globalStats} />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4">
          <Sidebar
            cycle={cycle}
            setCycle={setCycle}
            totalBudget={totalBudget}
            monthlyTotal={monthlyTotal}
            annualTotal={annualTotal}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            activePlanIds={activePlanIds}
            setActivePlanIds={setActivePlanIds}
          />

          <main>
            <ModelSelector activeModelIds={activeModelIds} toggleModel={toggleModel} />
            <ParamsBar
              mode={mode}
              setMode={setMode}
              audio={audio}
              setAudio={setAudio}
              audioApplies={audioApplies}
              res={res}
              setRes={setRes}
              dur={dur}
              setDur={setDur}
            />
            <Ranking
              ranking={ranking}
              maxEur={maxEur}
              cycle={cycle}
              sortMode={sortMode}
              setSortMode={setSortMode}
              activeModelCount={activeModelIds.length}
              activePlanCount={activePlanIds.length}
            />
            <Footer />
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
