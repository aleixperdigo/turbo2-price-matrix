import { Label } from './Label';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import type { StatusFilter as StatusFilterT } from '@/types';

interface StatusFilterProps {
  value: StatusFilterT;
  onChange: (v: StatusFilterT) => void;
}

export function StatusFilter({ value, onChange }: StatusFilterProps) {
  return (
    <div className="border border-border bg-bg-secondary p-2.5 mb-3">
      <Label>Filtro calidad datos</Label>
      <ToggleGroup
        type="single"
        value={value}
        onValueChange={(v) => v && onChange(v as StatusFilterT)}
        className="flex-col items-stretch"
      >
        <ToggleGroupItem value="all">Todo</ToggleGroupItem>
        <ToggleGroupItem value="approx_plus">Verified + Approx</ToggleGroupItem>
        <ToggleGroupItem value="verified">Solo Verified ✓</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
