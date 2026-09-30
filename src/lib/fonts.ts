import localFont from 'next/font/local';

export const apfelGrotezk = localFont({
  src: [
    { path: '../../public/fonts/ApfelGrotezk-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/ApfelGrotezk-Mittel.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/ApfelGrotezk-Fett.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'swap',
  preload: true,
  fallback: ['Avenir Next', 'Avenir', 'Futura', 'Candara', 'Trebuchet MS', 'sans-serif'],
});

export const commitMono = localFont({
  src: [
    { path: '../../public/fonts/CommitMono-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/CommitMono-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono-local',
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'SF Mono', 'Menlo', 'Consolas', 'monospace'],
});
