import { BillingToggle } from './BillingToggle';
import { StatusFilter } from './StatusFilter';
import { PlatformBlock } from './PlatformBlock';
import { Label } from './Label';
import { PLATFORMS } from '@/data/plans';
import type { Cycle, PlatformId, StatusFilter as StatusFilterT } from '@/types';

interface SidebarProps {
  cycle: Cycle;
  setCycle: (c: Cycle) => void;
  totalBudget: number;
  monthlyTotal: number;
  annualTotal: number;
  statusFilter: StatusFilterT;
  setStatusFilter: (v: StatusFilterT) => void;
  activePlanIds: string[];
  setActivePlanIds: (ids: string[]) => void;
}

export function Sidebar({
  cycle,
  setCycle,
  totalBudget,
  monthlyTotal,
  annualTotal,
  statusFilter,
  setStatusFilter,
  activePlanIds,
  setActivePlanIds,
}: SidebarProps) {
  return (
    <aside>
      <BillingToggle
        cycle={cycle}
        setCycle={setCycle}
        totalBudget={totalBudget}
        monthlyTotal={monthlyTotal}
        annualTotal={annualTotal}
      />
      <StatusFilter value={statusFilter} onChange={setStatusFilter} />
      <Label>Plataformas y planes</Label>
      {(Object.keys(PLATFORMS) as PlatformId[]).map((pid) => (
        <PlatformBlock
          key={pid}
          platformId={pid}
          activePlanIds={activePlanIds}
          setActivePlanIds={setActivePlanIds}
          cycle={cycle}
        />
      ))}
    </aside>
  );
}
