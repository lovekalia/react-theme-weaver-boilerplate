
/**
 * This file serves as the public API for the theming "library".
 * It exports all the necessary components, hooks, types, and constants
 * so that consuming applications can import them from a single location.
 */

export { ThemeProvider, useTheme } from './context';
export { default as ThemePicker } from './components/ThemePicker';
export { default as ThemeBox } from './components/ThemeBox';
export { THEMES, type Theme } from './types';
