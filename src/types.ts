// ════════════════════════════════════════════════════════════════════
// Domain types
// ════════════════════════════════════════════════════════════════════

export type PlatformId = 'freepik' | 'fal' | 'comfy' | 'higgsfield' | 'weavy';
export type Cycle = 'monthly' | 'annual';
export type Mode = 't2v' | 'i2v' | 'v2v';
export type Resolution = '720p' | '1080p';
export type Audio = 'on' | 'off';
export type Status = 'verified' | 'approx' | 'unknown';
export type SortMode = 'price' | 'model' | 'platform';
export type StatusFilter = 'all' | 'approx_plus' | 'verified';

export type ModelFamily =
  | 'SEEDANCE'
  | 'KLING'
  | 'HAPPYHORSE'
  | 'VEO'
  | 'HAILUO'
  | 'WAN'
  | 'PIXVERSE'
  | 'GROK';

export type PricingType =
  | 'cr_per_sec'
  | 'cr_per_clip_5s'
  | 'cr_per_clip_6s'
  | 'cr_per_clip_10s'
  | 'cr_per_run'
  | 'usd_per_sec'
  | 'usd_per_clip_6s'
  | 'kling_2_5_fal'
  | 'unlimited'
  | 'comfy_seedance_token';

export interface Platform {
  label: string;
  color: string;
  verifiedSource: string | null;
  note?: string;
}

export interface PlanVariant {
  price: number | null;
  credits: number | null;
}

export interface Plan {
  platform: PlatformId;
  label: string;
  currency: 'USD' | 'EUR';
  monthly: PlanVariant;
  annual: PlanVariant | null;
}

export interface PricingCell {
  type: PricingType;
  value?: number;
  audioOn?: number;
  rate?: number;
  mode?: 'std' | 'fast';
  res?: Resolution;
  vt?: Mode;
  durRef?: number;
  status: Status;
  source?: string;
  note?: string;
}

export type PricingByMode = {
  t2v: PricingCell | null;
  i2v: PricingCell | null;
  v2v: PricingCell | null;
};

export type PricingByRes = {
  '720p': PricingByMode;
  '1080p': PricingByMode;
};

export type PricingByPlatform = Record<PlatformId, PricingByRes>;

export interface Model {
  label: string;
  alias: string;
  family: ModelFamily;
  audioApplies: boolean;
  audioIncluded?: boolean;
  maxDur: number;
  cappedAt?: number;
  eloT2V?: number;
  eloI2V?: number;
  isNew?: boolean;
  note?: string;
  pricing: PricingByPlatform;
}

export interface PriceResult {
  eur?: number;
  credits?: number | null;
  isUnlimited?: boolean;
  status?: Status;
  source?: string | null;
  note?: string | null;
  unavailable?: boolean;
  reason?: string;
}

export interface RankingRow {
  type: 'row';
  modelKey: string;
  planId: string;
  result: PriceResult;
}

export interface RankingGroupHeader {
  type: 'group_header';
  groupKey: string;
  label: string;
  subtitle: string;
  color: string;
  cheapest: PriceResult | null;
  platformBest?: Platform | null;
  modelBest?: Model | null;
}

export type RankingItem = RankingRow | RankingGroupHeader;
