
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { THEME_COLORS } from './constants';
import { THEMES, type Theme } from './types';

/**
 * Defines the shape of the context that will be provided to consumers.
 */
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  cycleTheme: () => void;
}

/**
 * The React Context object for the theme.
 * It's initialized with `undefined` and will be provided a value by `ThemeProvider`.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Provides the theme state and updater functions to its children.
 * This component encapsulates all the logic for theme management,
 * including state, localStorage persistence, and applying CSS variables.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode, defaultTheme?: Theme }> = ({ children, defaultTheme = 'dark' }) => {
  const [theme, setThemeInternal] = useState<Theme>(() => {
    // Initialize state from localStorage, or fall back to the default theme.
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme && (THEMES as readonly string[]).includes(savedTheme)) {
        return savedTheme as Theme;
      }
    } catch (error) {
      console.error('Failed to read theme from localStorage', error);
    }
    return defaultTheme;
  });

  // Effect to apply CSS variables and save to localStorage whenever the theme changes.
  useEffect(() => {
    const colors = THEME_COLORS[theme];
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--${key}`, value);
    });

    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Failed to save theme to localStorage', error);
    }
  }, [theme]);

  // Memoized function to set the theme.
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeInternal(newTheme);
  }, []);

  // Memoized function to cycle to the next theme in the THEMES array.
  const cycleTheme = useCallback(() => {
    const currentIndex = THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEMES.length;
    setThemeInternal(THEMES[nextIndex]);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook for consuming the theme context.
 * It provides a convenient way for components to access the current theme
 * and the functions to update it, while also ensuring it's used within a ThemeProvider.
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
