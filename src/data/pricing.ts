import { BASE_PLANS, USD_TO_EUR } from './plans';
import type {
  Plan,
  Cycle,
  Model,
  Mode,
  Resolution,
  Audio,
  PriceResult,
  PlanVariant,
} from '@/types';

function getVariant(plan: Plan, cycle: Cycle): { variant: PlanVariant | null; fallback: boolean } {
  const variant = plan[cycle];
  if (variant) return { variant, fallback: false };
  return { variant: plan.monthly, fallback: cycle === 'annual' };
}

function creditsToEUR(credits: number, plan: Plan, cycle: Cycle): number | null {
  const { variant } = getVariant(plan, cycle);
  if (!variant || variant.price === null || variant.credits === null || variant.credits === 0)
    return null;
  const ppc = variant.price / variant.credits;
  return credits * (plan.currency === 'USD' ? ppc * USD_TO_EUR : ppc);
}

// Comfy Seedance token formula
// tokens = duration × width × height × 24 / 1024
function computeSeedanceTokens(dur: number, res: Resolution, vt: Mode): number {
  const w = res === '1080p' ? 1920 : 1280;
  const h = res === '1080p' ? 1080 : 720;
  let tokens = (dur * w * h * 24) / 1024;
  if (vt === 'v2v') tokens *= 2;
  return tokens;
}

export function priceForPlan(
  planId: string,
  cycle: Cycle,
  modelKey: string,
  modelData: Model | undefined,
  mode: Mode,
  res: Resolution,
  dur: number,
  audio: Audio
): PriceResult {
  void modelKey;
  const plan = BASE_PLANS[planId];
  if (!plan || !modelData) return { unavailable: true, reason: 'no-plan-or-model' };

  const { fallback: cycleFallback } = getVariant(plan, cycle);

  let effectiveDur = dur;
  let cappedNote: string | null = null;
  if (modelData.cappedAt && dur > modelData.cappedAt) {
    effectiveDur = modelData.cappedAt;
    cappedNote = `capped a ${modelData.cappedAt}s`;
  }
  if (modelData.maxDur && dur > modelData.maxDur) {
    return { unavailable: true, reason: 'maxDur', note: `max ${modelData.maxDur}s` };
  }

  const platformData = modelData.pricing[plan.platform];
  if (!platformData || !platformData[res] || !platformData[res][mode]) {
    return { unavailable: true, reason: 'no-pricing' };
  }
  const cell = platformData[res][mode];
  if (cell === null) return { unavailable: true, reason: 'no-pricing' };

  let eur: number | null = 0;
  let credits: number | null = 0;
  let isUnlimited = false;
  let note = cell.note ?? null;
  const status = cell.status;
  const source = cell.source ?? null;

  switch (cell.type) {
    case 'cr_per_sec': {
      let rate = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) rate = cell.audioOn;
      else if (audio === 'on' && modelData.audioApplies && !modelData.audioIncluded) rate *= 1.5;
      credits = rate * effectiveDur;
      eur = creditsToEUR(credits, plan, cycle);
      break;
    }
    case 'cr_per_clip_5s': {
      let baseValue = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) baseValue = cell.audioOn;
      else if (audio === 'on' && modelData.audioApplies && !modelData.audioIncluded) baseValue *= 1.5;
      const crPerS = baseValue / 5;
      credits = crPerS * effectiveDur;
      eur = creditsToEUR(credits, plan, cycle);
      break;
    }
    case 'cr_per_clip_6s': {
      let baseValue = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) baseValue = cell.audioOn;
      const crPerS = baseValue / 6;
      credits = crPerS * effectiveDur;
      eur = creditsToEUR(credits, plan, cycle);
      break;
    }
    case 'cr_per_clip_10s': {
      let baseValue = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) baseValue = cell.audioOn;
      const crPerS = baseValue / 10;
      credits = crPerS * effectiveDur;
      eur = creditsToEUR(credits, plan, cycle);
      break;
    }
    case 'cr_per_run': {
      let val = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) val = cell.audioOn;
      credits = val;
      eur = creditsToEUR(val, plan, cycle);
      if (cell.durRef) {
        const extra = `coste fijo hasta ${cell.durRef}s`;
        note = note ? `${note} · ${extra}` : extra;
      }
      break;
    }
    case 'usd_per_sec': {
      let rate = cell.value ?? 0;
      if (audio === 'on' && cell.audioOn !== undefined) rate = cell.audioOn;
      eur = rate * effectiveDur * USD_TO_EUR;
      credits = null;
      break;
    }
    case 'usd_per_clip_6s': {
      eur = (cell.value ?? 0) * USD_TO_EUR;
      credits = null;
      note = note ?? 'precio fijo por clip 6s';
      break;
    }
    case 'kling_2_5_fal': {
      const usd = effectiveDur <= 5 ? 0.35 : 0.35 + (effectiveDur - 5) * 0.07;
      eur = usd * USD_TO_EUR;
      credits = null;
      note = '$0.35 base 5s + $0.07/extra s';
      break;
    }
    case 'comfy_seedance_token': {
      const tokens = computeSeedanceTokens(
        effectiveDur,
        cell.res ?? res,
        cell.vt ?? mode
      );
      credits = (tokens / 1000) * (cell.rate ?? 0);
      eur = creditsToEUR(credits, plan, cycle);
      break;
    }
    case 'unlimited': {
      eur = 0;
      credits = 0;
      isUnlimited = true;
      note = note ?? 'INCLUIDO';
      break;
    }
    default:
      return { unavailable: true, reason: 'unknown-type' };
  }

  if (cappedNote) note = note ? `${cappedNote} · ${note}` : cappedNote;
  if (cycleFallback) note = note ? `solo mensual · ${note}` : 'solo mensual';
  if (eur === null) return { unavailable: true, reason: 'plan-incompatible' };

  return { eur, credits, isUnlimited, status, source, note };
}

export function planBudgetEUR(planId: string, cycle: Cycle): number | null {
  const plan = BASE_PLANS[planId];
  if (!plan) return null;
  const { variant } = getVariant(plan, cycle);
  if (!variant || variant.price === null) return null;
  return plan.currency === 'USD' ? variant.price * USD_TO_EUR : variant.price;
}

export function planCreditsAllowance(planId: string, cycle: Cycle): number | null {
  const plan = BASE_PLANS[planId];
  if (!plan) return null;
  const { variant } = getVariant(plan, cycle);
  return variant?.credits ?? null;
}
