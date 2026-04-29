import type { Plan, PlatformId, Platform } from '@/types';

export const USD_TO_EUR = 0.8512;
export const COMFY_USD_PER_CREDIT = 1 / 211;
export const DATA_VERSION = '2026.04.28';
export const APP_VERSION = 'v5.5';

export const PLATFORMS: Record<PlatformId, Platform> = {
  freepik: {
    label: 'MAGNIFIC',
    color: '#4d8dff',
    verifiedSource: 'support.freepik.com/AI-Video-Generator-Credits · ahora magnific.com',
    note: 'antes Freepik (rebrand abr 2026)',
  },
  fal: {
    label: 'FAL',
    color: '#c084fc',
    verifiedSource: 'fal.ai/models (per-model pages)',
  },
  comfy: {
    label: 'COMFYCLOUD',
    color: '#00d97a',
    verifiedSource: 'docs.comfy.org/tutorials/partner-nodes/pricing',
  },
  higgsfield: {
    label: 'HIGGSFIELD',
    color: '#ff8a3d',
    verifiedSource: 'higgsfield + 3 fuentes coincidentes abr 2026',
  },
  weavy: {
    label: 'WEAVY',
    color: '#ff4d4d',
    verifiedSource: 'weave.figma.com · derivado tabla oficial',
  },
};

export const BASE_PLANS: Record<string, Plan> = {
  // ━━━ MAGNIFIC (ex-Freepik) ━━━
  freepik_essential: {
    platform: 'freepik',
    label: 'Essential',
    currency: 'EUR',
    monthly: { price: 8, credits: 8000 },
    annual: { price: 6, credits: 8000 },
  },
  freepik_premium: {
    platform: 'freepik',
    label: 'Premium',
    currency: 'EUR',
    monthly: { price: 16, credits: 20000 },
    annual: { price: 12, credits: 20000 },
  },
  freepik_premiumplus: {
    platform: 'freepik',
    label: 'Premium+',
    currency: 'EUR',
    monthly: { price: 36, credits: 45000 },
    annual: { price: 27, credits: 50000 },
  },
  freepik_pro: {
    platform: 'freepik',
    label: 'Pro',
    currency: 'EUR',
    monthly: { price: 230, credits: 300000 },
    annual: { price: 172.5, credits: 333333 },
  },

  // ━━━ FAL ━━━
  fal_payg: {
    platform: 'fal',
    label: 'Pay-as-you-go',
    currency: 'USD',
    monthly: { price: null, credits: null },
    annual: { price: null, credits: null },
  },

  // ━━━ COMFYCLOUD ━━━
  comfy_standard: {
    platform: 'comfy',
    label: 'Standard',
    currency: 'USD',
    monthly: { price: 20, credits: 4200 },
    annual: null,
  },
  comfy_creator: {
    platform: 'comfy',
    label: 'Creator',
    currency: 'USD',
    monthly: { price: 35, credits: 7400 },
    annual: null,
  },
  comfy_pro: {
    platform: 'comfy',
    label: 'Pro',
    currency: 'USD',
    monthly: { price: 100, credits: 21100 },
    annual: null,
  },

  // ━━━ HIGGSFIELD ━━━ Verified abr 2026
  hf_basic: {
    platform: 'higgsfield',
    label: 'Basic',
    currency: 'USD',
    monthly: { price: 5, credits: 70 },
    annual: { price: 5, credits: 70 },
  },
  hf_plus: {
    platform: 'higgsfield',
    label: 'Plus',
    currency: 'USD',
    monthly: { price: 49, credits: 1000 },
    annual: { price: 39, credits: 1000 },
  },
  hf_ultra: {
    platform: 'higgsfield',
    label: 'Ultra',
    currency: 'USD',
    monthly: { price: 129, credits: 3000 },
    annual: { price: 99, credits: 3000 },
  },
  hf_ultra6: {
    platform: 'higgsfield',
    label: 'Ultra 6K',
    currency: 'USD',
    monthly: { price: 220, credits: 6000 },
    annual: { price: 194, credits: 6000 },
  },

  // ━━━ WEAVY ━━━
  weavy_free: {
    platform: 'weavy',
    label: 'Free',
    currency: 'USD',
    monthly: { price: 0, credits: 150 },
    annual: { price: 0, credits: 150 },
  },
  weavy_starter: {
    platform: 'weavy',
    label: 'Starter',
    currency: 'USD',
    monthly: { price: 24, credits: 1500 },
    annual: { price: 19, credits: 1500 },
  },
  weavy_pro: {
    platform: 'weavy',
    label: 'Professional',
    currency: 'USD',
    monthly: { price: 45, credits: 4000 },
    annual: { price: 36, credits: 4000 },
  },
  weavy_team: {
    platform: 'weavy',
    label: 'Team (1 seat)',
    currency: 'USD',
    monthly: { price: 60, credits: 4500 },
    annual: { price: 48, credits: 4500 },
  },
};

// Defaults que carga el dashboard al iniciar
export const DEFAULT_ACTIVE_MODELS = ['seedance-1-pro', 'happyhorse-1', 'kling-3-0-pro'];
export const DEFAULT_ACTIVE_PLANS = ['freepik_premiumplus', 'fal_payg', 'comfy_creator'];
