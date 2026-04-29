import { ArrowDownUp, Rows3, Columns3 } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SortMode } from '@/types';

interface SortToggleProps {
  value: SortMode;
  onChange: (v: SortMode) => void;
}

export function SortToggle({ value, onChange }: SortToggleProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 p-2.5 mb-3.5 bg-bg-panel border border-border">
      <span className="label-mono mr-1">Ordenar por</span>
      <Tabs value={value} onValueChange={(v) => onChange(v as SortMode)} className="flex-1">
        <TabsList className="grid grid-cols-3 gap-1 w-full">
          <TabsTrigger value="price" className="w-full">
            <ArrowDownUp className="w-3 h-3 mr-1" />
            Precio
          </TabsTrigger>
          <TabsTrigger value="model" className="w-full">
            <Rows3 className="w-3 h-3 mr-1" />
            Cluster modelo
          </TabsTrigger>
          <TabsTrigger value="platform" className="w-full">
            <Columns3 className="w-3 h-3 mr-1" />
            Cluster plataforma
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
