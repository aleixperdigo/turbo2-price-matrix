import { Label } from './Label';
import { Card } from '@/components/ui/card';
import { MODELS } from '@/data/models';
import type { Model, ModelFamily } from '@/types';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

const FAMILY_LABELS: Record<ModelFamily, string> = {
  SEEDANCE: 'SEEDANCE',
  KLING: 'KLING',
  HAPPYHORSE: 'HAPPYHORSE · NEW',
  VEO: 'VEO',
  HAILUO: 'HAILUO',
  WAN: 'WAN',
  PIXVERSE: 'PIXVERSE',
  GROK: 'GROK',
  OMNI: 'OMNI · NEW',
};

interface ModelSelectorProps {
  activeModelIds: string[];
  toggleModel: (id: string) => void;
}

export function ModelSelector({ activeModelIds, toggleModel }: ModelSelectorProps) {
  const modelsByFamily = useMemo(() => {
    const g: Partial<Record<ModelFamily, Array<{ key: string } & Model>>> = {};
    Object.entries(MODELS).forEach(([key, m]) => {
      const fam = m.family;
      if (!g[fam]) g[fam] = [];
      g[fam]!.push({ key, ...m });
    });
    return g;
  }, []);

  return (
    <Card className="mb-3">
      <div className="-mb-1">
        <Label>Modelos a comparar (multi-selección)</Label>
      </div>
      {(Object.keys(FAMILY_LABELS) as ModelFamily[]).map((family) => {
        const models = modelsByFamily[family];
        if (!models || models.length === 0) return null;
        return (
          <div key={family} className="mb-2 last:mb-0">
            <div className="text-3xs text-fg-dark uppercase tracking-widest mb-1">
              {FAMILY_LABELS[family]}
            </div>
            <div className="flex flex-wrap gap-1">
              {models.map((m) => {
                const active = activeModelIds.includes(m.key);
                return (
                  <button
                    key={m.key}
                    onClick={() => toggleModel(m.key)}
                    aria-pressed={active}
                    className={cn(
                      'inline-flex items-center gap-1 h-7 px-2 text-2xs uppercase tracking-widest font-medium border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
                      active
                        ? 'bg-accent text-bg-primary border-accent font-bold'
                        : 'bg-transparent text-fg-muted border-border hover:border-fg-primary hover:text-fg-primary'
                    )}
                  >
                    {m.label}
                    {m.isNew && (
                      <span
                        className={cn('ml-0.5', active ? 'text-bg-primary' : 'text-status-verified')}
                      >
                        ★
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </Card>
  );
}
