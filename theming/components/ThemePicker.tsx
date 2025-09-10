import React from 'react';
import type { Theme } from '../types';
import { useTheme } from '../context';
import { DarkIcon, LightIcon, SunsetIcon, SunriseIcon, OceanIcon, ForestIcon, NeonIcon } from './Icons';

/**
 * A helper function to capitalize the first letter of a string.
 * @param {string} word - The word to capitalize.
 * @returns {string} The capitalized word.
 */
const capitalized = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Determines the CSS `top` position for the icon strip based on the current theme,
 * creating the "scrolling" effect.
 * @param {Theme} theme - The current active theme.
 * @returns {string} The Tailwind CSS class for the top position.
 */
const getTopPositionClass = (theme: Theme): string => {
  switch (theme) {
    case 'dark': return 'top-0';
    case 'sunset': return 'top-[-3.6rem]';
    case 'sunrise': return 'top-[-7.2rem]';
    case 'light': return 'top-[-10.8rem]';
    case 'ocean': return 'top-[-14.4rem]';
    case 'forest': return 'top-[-18rem]';
    case 'neon': return 'top-[-21.6rem]';
    default: return 'top-0';
  }
};

/**
 * A UI component that displays an icon for the current theme and allows the user
 * to cycle to the next theme upon clicking. It consumes the `useTheme` hook to
 * manage its state and behavior.
 */
const ThemePicker: React.FC = () => {
  const { theme, cycleTheme } = useTheme();

  return (
    <div className="group absolute top-6 right-6">
      <button
        onClick={cycleTheme}
        aria-label={`Cycle to next theme. Current theme: ${capitalized(theme)}`}
        className="w-10 h-10 cursor-pointer overflow-hidden p-1 m-0 bg-transparent text-[var(--text-primary)] border border-transparent rounded-lg transition-all duration-100 ease-out hover:border-[var(--border)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)]"
      >
        <div
          className={`relative w-8 transition-all duration-200 ease-out ${getTopPositionClass(theme)}`}
        >
          <DarkIcon className="w-8 h-8 mb-[0.4rem]" />
          <SunsetIcon className="w-8 h-8 mb-[0.4rem]" />
          <SunriseIcon className="w-8 h-8 mb-[0.4rem]" />
          <LightIcon className="w-8 h-8 mb-[0.4rem]" />
          <OceanIcon className="w-8 h-8 mb-[0.4rem]" />
          <ForestIcon className="w-8 h-8 mb-[0.4rem]" />
          <NeonIcon className="w-8 h-8 mb-[0.4rem]" />
        </div>
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-[var(--surface)] to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[var(--surface)] to-transparent z-10"></div>
      </button>
       <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-bold text-[var(--text-inverse)] bg-[var(--primary)] rounded-md opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        Cycle Theme
      </div>
    </div>
  );
};

export default ThemePicker;