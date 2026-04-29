import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import type { Status } from '@/types';

const STATUS_CONFIG: Record<
  Status,
  { label: string; tooltipPrefix: string; variant: 'verified' | 'approx' | 'unknown' }
> = {
  verified: { label: 'V', tooltipPrefix: 'VERIFIED · ', variant: 'verified' },
  approx: { label: '≈', tooltipPrefix: 'APPROX · ', variant: 'approx' },
  unknown: { label: '?', tooltipPrefix: 'UNKNOWN · ', variant: 'unknown' },
};

interface StatusBadgeProps {
  status: Status;
  source?: string | null;
  note?: string | null;
}

export function StatusBadge({ status, source, note }: StatusBadgeProps) {
  const cfg = STATUS_CONFIG[status];
  const tooltipText = cfg.tooltipPrefix + (source ?? note ?? 'sin info adicional');

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge
          variant={cfg.variant}
          className="mr-1 cursor-help"
          aria-label={tooltipText}
        >
          {cfg.label}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
}
