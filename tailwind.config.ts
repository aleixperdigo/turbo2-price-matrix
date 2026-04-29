import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brutalist Turbo2 palette
        bg: {
          primary: '#050505',
          secondary: '#0d0d0d',
          elevated: '#141414',
          panel: '#0a0a0a',
        },
        border: {
          DEFAULT: '#1f1f1f',
          subtle: '#141414',
          strong: '#2a2a2a',
        },
        fg: {
          primary: '#e8e8e8',
          muted: '#888888',
          dim: '#444444',
          dark: '#666666',
        },
        accent: {
          DEFAULT: '#ffd400',
          muted: '#ffd40033',
        },
        status: {
          verified: '#00d97a',
          approx: '#ff8a3d',
          unknown: '#666666',
          danger: '#ff4d4d',
        },
        platform: {
          freepik: '#4d8dff',
          fal: '#c084fc',
          comfy: '#00d97a',
          higgsfield: '#ff8a3d',
          weavy: '#ff4d4d',
        },
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        mega: ['"Bowlby One SC"', '"Archivo Black"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': '9px',
        '3xs': '8.5px',
      },
      borderRadius: {
        // Brutalist: no rounded corners
        none: '0',
        DEFAULT: '0',
      },
      letterSpacing: {
        widest: '1.5px',
      },
      keyframes: {
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-down': 'slide-down 0.15s ease-out',
      },
    },
  },
  plugins: [animate],
} satisfies Config;
