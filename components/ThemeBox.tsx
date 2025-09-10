
import React from 'react';
import type { Theme } from '../types';
import { THEME_COLORS } from '../constants';
import { DarkIcon, LightIcon, SunsetIcon, SunriseIcon, OceanIcon, ForestIcon } from './Icons';

interface ThemeBoxProps {
  theme: Theme;
  isActive: boolean;
  onSelectTheme: (theme: Theme) => void;
}

const capitalized = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const getIcon = (theme: Theme) => {
  switch (theme) {
    case 'dark':
      return <DarkIcon />;
    case 'sunset':
      return <SunsetIcon />;
    case 'sunrise':
      return <SunriseIcon />;
    case 'light':
      return <LightIcon />;
    case 'ocean':
      return <OceanIcon />;
    case 'forest':
      return <ForestIcon />;
  }
};

const Swatch: React.FC<{ colorVar: string, title: string }> = ({ colorVar, title }) => (
    <span
        className="w-5 h-5 inline-block rounded-full border border-[var(--border)] -mr-2 shadow-[0px_1px_1px_rgba(0,0,0,0.12),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
        style={{ background: `var(${colorVar})` }}
        title={title}
    ></span>
);


const ThemeBox: React.FC<ThemeBoxProps> = ({ theme, isActive, onSelectTheme }) => {
  const themeColors = THEME_COLORS[theme];

  const style = Object.entries(themeColors).reduce((acc, [key, value]) => {
    acc[`--${key}` as any] = value;
    return acc;
  }, {} as React.CSSProperties);

  return (
    <button
      style={style}
      onClick={() => onSelectTheme(theme)}
      aria-pressed={isActive}
      className="relative flex w-full flex-col p-4 rounded-xl border border-[var(--border)] select-none cursor-pointer transition-all duration-200 ease-out hover:scale-105 bg-[var(--bg)] text-[var(--text-primary)] aria-[pressed=true]:ring-4 aria-[pressed=true]:ring-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)]"
    >
      <div
        className={`absolute -top-3 -right-3 h-6 w-6 bg-[var(--primary)] rounded-full text-[var(--text-inverse)] flex items-center justify-center font-bold text-sm transform transition-all duration-200 ease-in-out ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
        aria-hidden="true"
      >
        ✓
      </div>
      <div className="flex items-center w-full">
        <span className="w-4 h-4 mr-1">{getIcon(theme)}</span>
        <label className="cursor-pointer">{capitalized(theme)}</label>
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