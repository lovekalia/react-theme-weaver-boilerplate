
/**
 * Defines the available theme names as a constant tuple.
 * Using `as const` creates a readonly type, preventing accidental modification.
 */
export const THEMES = ['dark', 'sunset', 'sunrise', 'light', 'ocean', 'forest'] as const;

/**
 * Creates a union type `Theme` from the `THEMES` array.
 * This ensures that any variable with this type can only be one of the specified theme names.
 * `typeof THEMES[number]` is a TypeScript trick to get the union of array values.
 */
export type Theme = typeof THEMES[number];

/**
 * Defines the structure for a theme's color palette.
 * Each theme must provide values for these specific CSS custom property names.
 */
export interface ThemeColors {
  bg: string;
  border: string;
  surface: string;
  'text-primary': string;
  'text-secondary': string;
  primary: string;
  'text-inverse': string;
}
