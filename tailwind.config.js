/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090A',
          deep: '#040506',
          surface: '#0E1113',
          card: '#121518',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 255, 255, 0.16)',
        },
        charcoal: {
          DEFAULT: '#161A1D',
          muted: '#21262B',
          light: '#2D3339',
        },
        lime: {
          DEFAULT: '#D4FF00',
          hover: '#E2FF33',
          dark: '#A6C800',
          muted: 'rgba(212, 255, 0, 0.12)',
          glow: 'rgba(212, 255, 0, 0.28)',
        },
        silver: {
          DEFAULT: '#E2E4E8',
          bright: '#F5F6F8',
          muted: '#9CA3AF',
          dark: '#606770',
        },
        spartan: {
          crimson: '#8B1E22',
          subtle: 'rgba(139, 30, 34, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      boxShadow: {
        'glow-lime-sm': '0 0 15px rgba(212, 255, 0, 0.18)',
        'glow-lime': '0 0 30px rgba(212, 255, 0, 0.25)',
        'glow-lime-lg': '0 0 60px rgba(212, 255, 0, 0.35)',
        'glow-silver': '0 0 30px rgba(226, 228, 232, 0.12)',
        'card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '6px',
        'md': '8px',
        'lg': '12px',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'monumental': '0.35em',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
        'radial-vignette': "radial-gradient(circle at center, transparent 0%, rgba(8, 9, 10, 0.85) 100%)",
        'linear-overlay': "linear-gradient(180deg, rgba(8, 9, 10, 0) 0%, rgba(8, 9, 10, 0.95) 100%)",
      },
    },
  },
  plugins: [],
};
