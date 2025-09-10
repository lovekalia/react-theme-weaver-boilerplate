import React from 'react';
import type { Theme } from '../types';
import { DarkIcon, LightIcon, SunsetIcon, SunriseIcon, OceanIcon, ForestIcon } from './Icons';

interface ThemePickerProps {
  currentTheme: Theme;
  onCycleTheme: () => void;
}

const capitalized = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const getTopPositionClass = (theme: Theme): string => {
  switch (theme) {
    case 'dark':
      return 'top-0';
    case 'sunset':
      return 'top-[-3.6rem]';
    case 'sunrise':
      return 'top-[-7.2rem]';
    case 'light':
      return 'top-[-10.8rem]';
    case 'ocean':
      return 'top-[-14.4rem]';
    case 'forest':
      return 'top-[-18rem]';
    default:
      return 'top-0';
  }
};

const ThemePicker: React.FC<ThemePickerProps> = ({ currentTheme, onCycleTheme }) => {
  return (
    <button
      onClick={onCycleTheme}
      aria-label={`Cycle to next theme. Current theme: ${capitalized(currentTheme)}`}
      className="absolute top-6 right-6 w-10 h-10 cursor-pointer overflow-hidden p-1 m-0 bg-transparent text-[var(--text-primary)] border border-transparent rounded-lg transition-all duration-100 ease-out hover:border-[var(--border)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)]"
    >
      <div
        className={`relative w-8 transition-all duration-200 ease-out ${getTopPositionClass(currentTheme)}`}
      >
        <DarkIcon className="w-8 h-8 mb-[0.4rem]" />
        <SunsetIcon className="w-8 h-8 mb-[0.4rem]" />
        <SunriseIcon className="w-8 h-8 mb-[0.4rem]" />
        <LightIcon className="w-8 h-8 mb-[0.4rem]" />
        <OceanIcon className="w-8 h-8 mb-[0.4rem]" />
        <ForestIcon className="w-8 h-8 mb-[0.4rem]" />
      </div>
       <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-b from-[var(--surface)] to-transparent z-10"></div>
       <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-[var(--surface)] to-transparent z-10"></div>
    </button>
  );
};

export default ThemePicker;