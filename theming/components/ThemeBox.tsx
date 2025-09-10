import React from 'react';
import type { Theme } from '../types';
import { THEME_COLORS } from '../constants';
import { useTheme } from '../context';
import { DarkIcon, LightIcon, SunsetIcon, SunriseIcon, OceanIcon, ForestIcon, NeonIcon } from './Icons';

/**
 * The props for the ThemeBox component.
 * @property {Theme} theme - The specific theme this box represents.
 */
interface ThemeBoxProps {
  theme: Theme;
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} word - The word to capitalize.
 * @returns {string} The capitalized word.
 */
const capitalized = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Returns the appropriate icon component for a given theme.
 * @param {Theme} theme - The theme for which to get the icon.
 * @returns {JSX.Element} The corresponding icon component.
 */
const getIcon = (theme: Theme) => {
  switch (theme) {
    case 'dark': return <DarkIcon />;
    case 'sunset': return <SunsetIcon />;
    case 'sunrise': return <SunriseIcon />;
    case 'light': return <LightIcon />;
    case 'ocean': return <OceanIcon />;
    case 'forest': return <ForestIcon />;
    case 'neon': return <NeonIcon />;
  }
};

/**
 * A small, circular swatch component to display a single color from a theme's palette.
 * @param {object} props - The component props.
 * @param {string} props.colorVar - The CSS custom property name for the color.
 * @param {string} props.title - The name of the color property for the tooltip.
 * @returns {JSX.Element} The Swatch component.
 */
const Swatch: React.FC<{ colorVar: string, title: string }> = ({ colorVar, title }) => (
    <span
        className="w-5 h-5 inline-block rounded-full border border-[var(--border)] -mr-2 shadow-[0px_1px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
        style={{ background: `var(${colorVar})` }}
        title={title}
    ></span>
);

/**
 * An interactive box that displays a preview of a single theme.
 * It shows the theme's name, icon, and color palette. Clicking the box
 * sets it as the active theme for the application. It consumes the `useTheme`
 * hook to determine if it is the active theme and to set the new theme on click.
 */
const ThemeBox: React.FC<ThemeBoxProps> = ({ theme }) => {
  const { theme: currentTheme, setTheme } = useTheme();
  const isActive = theme === currentTheme;
  const themeColors = THEME_COLORS[theme];

  const style = Object.entries(themeColors).reduce((acc, [key, value]) => {
    acc[`--${key}` as any] = value;
    return acc;
  }, {} as React.CSSProperties);

  return (
    <button
      style={style}
      onClick={() => setTheme(theme)}
      aria-pressed={isActive}
      className="relative flex w-full flex-col p-4 rounded-xl border border-[var(--border)] select-none cursor-pointer shadow-md hover:shadow-xl transition-all duration-200 ease-out hover:scale-105 bg-[var(--bg)] text-[var(--text-primary)] ring-0 aria-[pressed=true]:ring-4 aria-[pressed=true]:ring-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)]"
    >
      <div
        className={`absolute -top-3 -right-3 h-6 w-6 bg-[var(--primary)] rounded-full text-[var(--text-inverse)] flex items-center justify-center font-bold text-sm transform transition-all duration-200 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-hidden="true"
      >
        ✓
      </div>
      <div className="flex items-center w-full">
        <span className="w-4 h-4 mr-1">{getIcon(theme)}</span>
        <label className="cursor-pointer font-bold">{capitalized(theme)}</label>
      </div>
      <div className="flex flex-wrap mt-2">
        <Swatch colorVar="--bg" title="bg" />
        <Swatch colorVar="--border" title="border" />
        <Swatch colorVar="--surface" title="surface" />
        <Swatch colorVar="--text-primary" title="text-primary" />
        <Swatch colorVar="--text-secondary" title="text-secondary" />
        <Swatch colorVar="--primary" title="primary" />
        <Swatch colorVar="--text-inverse" title="text-inverse" />
      </div>
    </button>
  );
};

export default ThemeBox;