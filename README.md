# Turbo2 — Video Models Price Matrix

Dashboard interactivo de comparación de precios de modelos AI video.
**Versión:** v5.5 · **Stack:** Vite + React 18 + TypeScript + Tailwind + ShadCN/UI + Radix.

---

## Quick start

Prerrequisitos: **Node 18+** y npm.

```bash
# Una vez:
npm install

# Desarrollo (hot reload en localhost:5173):
npm run dev

# Build de producción (genera carpeta dist/):
npm run build

# Preview del build:
npm run preview
```

---

## Estructura

```
src/
├── main.tsx                        Entry React
├── App.tsx                         Estado global + composición
├── index.css                       Tailwind base + scrollbar
├── types.ts                        Tipos TypeScript del dominio
├── lib/utils.ts                    cn() helper de ShadCN
├── data/
│   ├── plans.ts                    Plataformas, planes, USD_TO_EUR, defaults
│   ├── models.ts                   Dataset 21 modelos verified+approx
│   └── pricing.ts                  Lógica priceForPlan (10 tipos)
└── components/
    ├── ui/                         Primitivos ShadCN/Radix
    │   ├── button.tsx
    │   ├── badge.tsx
    │   ├── card.tsx
    │   ├── tabs.tsx
    │   ├── tooltip.tsx
    │   ├── toggle-group.tsx
    │   └── collapsible.tsx
    └── dashboard/                  Componentes de dominio
        ├── Header.tsx              TURBO2 brand + stats globales
        ├── Footer.tsx
        ├── Sidebar.tsx             Wrapper de los 3 bloques izquierda
        ├── BillingToggle.tsx       Mensual/Anual con savings
        ├── StatusFilter.tsx        Todo / V+A / Solo V
        ├── PlatformBlock.tsx       Plataforma colapsable con planes
        ├── ModelSelector.tsx       Chips multi-selección por familia
        ├── ParamsBar.tsx           Mode/Audio/Res/Dur
        ├── SortToggle.tsx          Tabs Precio/Cluster modelo/Cluster plataforma
        ├── Ranking.tsx             Container del ranking
        ├── RankingRow.tsx          Fila individual con barra de precio
        ├── GroupHeader.tsx         Header de grupo (modos cluster)
        ├── StatusBadge.tsx         Badge V/≈/? con tooltip Radix
        └── Label.tsx               Etiqueta brutalist
```

---

## Deploy a GitHub Pages

El `vite.config.ts` ya tiene `base: '/turbo2-price-matrix/'`. Si tu repo se llama distinto, cámbialo ahí.

### Opción A: deploy manual

```bash
npm run build
# Sube el contenido de dist/ a la rama gh-pages, o:

git checkout -b gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy v5.5"
git push -f origin gh-pages
git checkout main
```

Luego en GitHub: Settings → Pages → Branch: `gh-pages` → Save.

### Opción B: GitHub Actions (recomendado)

Crear `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

En GitHub: Settings → Pages → Source: GitHub Actions. Cada push a `main` redeploya automáticamente.

---

## Cómo añadir un modelo nuevo

1. Edita `src/data/models.ts`
2. Añade entrada con la estructura del tipo `Model` (TypeScript te guiará)
3. Ejemplo mínimo:

```ts
'mi-modelo-1': {
  label: 'MI MODELO 1',
  alias: 'Mi Modelo nombre largo',
  family: 'SEEDANCE',  // o nueva familia, añadirla a types.ts también
  audioApplies: false,
  maxDur: 10,
  pricing: {
    freepik: { '720p': { t2v: null, i2v: null, v2v: null }, '1080p': { t2v: null, i2v: null, v2v: null } },
    fal: { '720p': { t2v: null, i2v: null, v2v: null }, '1080p': { t2v: null, i2v: null, v2v: null } },
    comfy: { '720p': { t2v: null, i2v: null, v2v: null }, '1080p': { t2v: null, i2v: null, v2v: null } },
    higgsfield: { '720p': { t2v: null, i2v: null, v2v: null }, '1080p': { t2v: null, i2v: null, v2v: null } },
    weavy: { '720p': { t2v: null, i2v: null, v2v: null }, '1080p': { t2v: null, i2v: null, v2v: null } },
  },
}
```

4. Si la familia es nueva, añádela al type `ModelFamily` en `src/types.ts` y al objeto `FAMILY_LABELS` en `ModelSelector.tsx`.

---

## Cómo añadir un tipo de pricing nuevo

1. Añadir el tipo a `PricingType` en `src/types.ts`
2. Añadir caso al switch en `priceForPlan()` dentro de `src/data/pricing.ts`
3. TypeScript te avisará si rompes algo

---

## Sistema de design tokens

Toda la paleta brutalist está en `tailwind.config.ts`. Cambia un color y se actualiza en todo el dashboard:

```ts
colors: {
  bg: { primary: '#050505', ... },
  accent: { DEFAULT: '#ffd400' },
  status: { verified: '#00d97a', approx: '#ff8a3d', unknown: '#666666' },
  platform: { freepik: '#4d8dff', fal: '#c084fc', comfy: '#00d97a', higgsfield: '#ff8a3d', weavy: '#ff4d4d' },
}
```

Tipografía:
- Display: Archivo Black (Google Fonts)
- Mono: JetBrains Mono (Google Fonts)

---

## Mejoras vs v5.4 single-file HTML

| Aspecto | v5.4 inline styles | **v5.5 Tailwind+ShadCN** |
|---|---|---|
| Bundle size | 247 KB | ~80-120 KB |
| Responsive mobile | ❌ | ✅ |
| Accesibilidad teclado | ❌ | ✅ Radix primitives |
| Tooltips reales | ❌ (HTML title) | ✅ Radix portals con animación |
| Tipos | 0 | ✅ TypeScript estricto |
| Cambio de paleta | Find-replace 50 sitios | 1 línea en config |
| Hover states | onMouseEnter manual | hover: clases Tailwind |
| Build step | No | Vite (rápido) |

---

## Stats del dataset

- **210 celdas verified** contra docs oficiales
- **14 celdas approx** (Seedance 2.0 v2v Magnific + Seedance 2.0 Fast Magnific)
- **0 celdas unknown**
- **21 modelos** en 8 familias
- **5 plataformas**: Magnific, fal, ComfyCloud, Higgsfield, Weavy

---

## Próximas iteraciones posibles

- Botón "calcular total con N clips" para presupuestos
- Comparativa side-by-side mensual vs anual
- Export a CSV de la comparativa actual
- URL state (compartir comparativas con link directo)
- Modo light (cambiar `dark` class en `index.html`)
- Command palette (Cmd+K) para buscar modelos rápido

---

*Generado por Aleix Perdigó / Turbo2 Lab · 2026.04.28*
