import { ExternalLink } from 'lucide-react';
import { APP_VERSION, DATA_VERSION, USD_TO_EUR } from '@/data/plans';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  globalStats: { v: number; a: number; u: number };
}

export function Header({ globalStats }: HeaderProps) {
  return (
    <header className="border-b border-border pb-4 mb-5">
      {/* Top row: branding link + version + meta */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
        <div className="flex flex-wrap items-center gap-2 text-2xs tracking-widest">
          <a
            href="https://www.linkedin.com/in/aleixperdigo/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Aleix Perdigó en LinkedIn (abre en nueva pestaña)"
          >
            <span className="bg-accent text-bg-primary px-2 py-0.5 font-display text-3xs tracking-widest">
              TURBO2
            </span>
            <span className="text-fg-dark">LAB</span>
            <span className="text-fg-dim">BY</span>
            <span className="text-fg-primary font-bold group-hover:text-accent transition-colors">
              ALEIXP
            </span>
            <ExternalLink className="w-2.5 h-2.5 text-fg-dim group-hover:text-accent transition-colors" />
          </a>
          <span className="text-fg-dim hidden sm:inline">//</span>
          <span className="border border-accent text-accent px-1.5 py-0.5 font-mono text-3xs font-bold tracking-widest">
            {APP_VERSION}
          </span>
          <ThemeToggle />
        </div>

        <div className="text-left sm:text-right text-fg-muted text-2xs space-y-0.5">
          <div className="text-accent flex items-center sm:justify-end gap-1.5">
            <span className="text-status-verified animate-pulse-dot">●</span>
            DATA {DATA_VERSION}
          </div>
          <div>
            <span className="text-status-verified font-bold">✓ {globalStats.v}</span>
            <span className="text-fg-dim"> · </span>
            <span className="text-status-approx font-bold">≈ {globalStats.a}</span>
            <span className="text-fg-dim"> · </span>
            <span className="text-fg-dark font-bold">? {globalStats.u}</span>
          </div>
          <div className="text-fg-dark">EUR · 1 USD = {USD_TO_EUR.toFixed(4)}€</div>
        </div>
      </div>

      {/* Mega title — fullwidth */}
      <h1 className="font-mega text-fg-primary leading-[0.85] -tracking-[0.04em] uppercase">
        <span className="block text-[clamp(1.75rem,5vw,4rem)]">VIDEO MODELS</span>
        <span className="block text-accent text-[clamp(1.75rem,5vw,4rem)]">
          PRICE MATRIX
        </span>
      </h1>
    </header>
  );
}
