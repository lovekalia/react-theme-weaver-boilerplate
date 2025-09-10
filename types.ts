
export const THEMES = ['dark', 'sunset', 'sunrise', 'light', 'ocean', 'forest'] as const;
export type Theme = typeof THEMES[number];

export interface ThemeColors {
  bg: string;
  border: string;
  surface: string;
  'text-primary': string;
  'text-secondary': string;
  primary: string;
  'text-inverse': string;
}