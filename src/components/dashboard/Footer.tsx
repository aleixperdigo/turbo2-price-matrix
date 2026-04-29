import { APP_VERSION, DATA_VERSION } from '@/data/plans';

export function Footer() {
  return (
    <div className="mt-4 pt-3 border-t border-border text-2xs text-fg-dark text-center">
      APP {APP_VERSION} · DATA {DATA_VERSION} · TURBO2 LAB · CLASE 7 MAYO 2026
      <br />
      Fuentes: support.freepik.com · fal.ai/models · docs.comfy.org · higgsfield + weavy verified abr 2026
    </div>
  );
}
