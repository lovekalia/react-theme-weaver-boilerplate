import type { Theme, ThemeColors } from './types';

/**
 * A record mapping each `Theme` name to its corresponding `ThemeColors` palette.
 * This constant serves as the single source of truth for all theme color definitions.
 */
export const THEME_COLORS: Record<Theme, ThemeColors> = {
  dark: {
    bg: '#101214',
    border: '#22272B',
    surface: '#161A1D',
    'text-primary': '#DEE4EA',
    'text-secondary': '#738496',
    primary: '#1D7AFC',
    'text-inverse': '#FFFFFF',
  },
  sunset: {
    bg: '#151c19',
    border: '#424f4a',
    surface: '#2f3834',
    'text-primary': '#ecd2c5',
    'text-secondary': '#C0AB92',
    primary: '#C0AB92',
    'text-inverse': '#151c19',
  },
  sunrise: {
    bg: '#ecd2c5',
    border: '#d7c9c6',
    surface: '#f3e8e5',
    'text-primary': '#4f2733',
    'text-secondary': '#685844',
    primary: '#a04d66',
    'text-inverse': '#f3e8e5',
  },
  light: {
    bg: '#F7F8F9',
    border: '#F1F2F4',
    surface: '#FFFFFF',
    'text-primary': '#091E42',
    'text-secondary': '#626F86',
    primary: '#1D7AFC',
    'text-inverse': '#FFFFFF',
  },
  ocean: {
    bg: '#0D1B2A',
    border: '#1B263B',
    surface: '#415A77',
    'text-primary': '#E0E1DD',
    'text-secondary': '#778DA9',
    primary: '#00A6FB',
    'text-inverse': '#FFFFFF',
  },
  forest: {
    bg: '#1A2421',
    border: '#2C3D37',
    surface: '#3F584C',
    'text-primary': '#F4F1DE',
    'text-secondary': '#A29985',
    primary: '#588157',
    'text-inverse': '#F4F1DE',
  },
  neon: {
    bg: '#0A0A0A',
    border: '#2E0A4D',
    surface: '#1A052E',
    'text-primary': '#F0F0F0',
    'text-secondary': '#A0A0A0',
    primary: '#FF00FF',
    'text-inverse': '#0A0A0A',
  },
};