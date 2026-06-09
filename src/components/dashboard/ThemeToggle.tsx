import { useEffect, useState } from 'react';
import { Moon, Sparkles } from 'lucide-react';

type Theme = 'dark' | 'crystal';

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem('turbo2-theme');
    if (saved === 'crystal' || saved === 'dark') return saved;
  } catch {
    /* ignore */
  }
  return 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('theme-crystal', theme === 'crystal');
    root.style.colorScheme = theme === 'crystal' ? 'light' : 'dark';
    try {
      localStorage.setItem('turbo2-theme', theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const next: Theme = theme === 'dark' ? 'crystal' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Cambiar a modo ${next === 'crystal' ? 'Crystal' : 'oscuro'}`}
      title={`Modo ${next === 'crystal' ? 'Crystal' : 'oscuro'}`}
      className="inline-flex items-center gap-1 border border-border-strong text-fg-muted hover:text-fg-primary hover:border-fg-primary px-1.5 py-0.5 text-3xs font-mono font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      {theme === 'dark' ? (
        <Sparkles className="w-2.5 h-2.5" />
      ) : (
        <Moon className="w-2.5 h-2.5" />
      )}
      {theme === 'dark' ? 'CRYSTAL' : 'DARK'}
    </button>
  );
}
