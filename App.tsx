import React, { useState, useEffect } from 'react';
import { ThemeProvider, useTheme, ThemePicker, ThemeBox, THEMES } from './theming';
import DocumentationPage from './components/DocumentationPage';

/**
 * This component contains the core application UI.
 * It is rendered inside the ThemeProvider, so it can use the `useTheme` hook
 * to access and manipulate the current theme.
 */
const AppContent: React.FC = () => {
  const { theme, setTheme, cycleTheme } = useTheme();
  const [announcement, setAnnouncement] = useState('');
  const [view, setView] = useState<'app' | 'docs'>('app');

  // Effect to create an accessibility announcement when the theme changes.
  useEffect(() => {
    if (theme) {
      setAnnouncement(`Theme set to ${theme}`);
    }
  }, [theme]);

  // Effect to handle keyboard shortcuts for changing themes.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Disable shortcuts if the documentation page is visible
      if (view === 'docs') return;

      const target = event.target as HTMLElement;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
          cycleTheme();
          break;
        case 'ArrowLeft':
          const currentIndex = THEMES.indexOf(theme);
          const prevIndex = (currentIndex - 1 + THEMES.length) % THEMES.length;
          setTheme(THEMES[prevIndex]);
          break;
        case '1': setTheme(THEMES[0]); break;
        case '2': setTheme(THEMES[1]); break;
        case '3': setTheme(THEMES[2]); break;
        case '4': setTheme(THEMES[3]); break;
        case '5': setTheme(THEMES[4]); break;
        case '6': setTheme(THEMES[5]); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [theme, cycleTheme, setTheme, view]);

  return (
    <div className="flex items-center justify-center min-h-screen p-3 bg-[var(--bg)] text-[var(--text-secondary)] transition-colors duration-500">
      {view === 'app' ? (
        <main className="w-full max-w-4xl border border-[var(--border)] rounded-2xl p-8 bg-[var(--surface)] relative shadow-2xl transition-colors duration-500">
          <div className="sr-only" aria-live="polite" aria-atomic="true">
            {announcement}
          </div>
          <ThemePicker />

          <h1 className="m-0 mb-2 p-0 leading-tight text-[4rem] text-[var(--text-primary)] transition-colors duration-500">
            Variable Themes
          </h1>
          <p className="m-0 p-0 leading-normal text-xl text-[var(--text-secondary)] transition-colors duration-500">
            Cycle through 6 themes, from darkest to lightest.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-8">
            {THEMES.map((themeName) => (
              <ThemeBox
                key={themeName}
                theme={themeName}
              />
            ))}
          </div>
          
          <div className="my-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2 transition-colors duration-500">
                  Theme Preview
              </h2>
              <p className="mb-6 text-[var(--text-secondary)] transition-colors duration-500">
                  See how common UI elements look with the selected theme.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                  <button className="inline-flex py-2 px-5 bg-[var(--primary)] rounded-lg text-[var(--text-inverse)] font-bold transition-transform duration-100 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary)]">
                    Primary
                  </button>
                  <button className="inline-flex py-2 px-5 bg-transparent border-2 border-[var(--primary)] rounded-lg text-[var(--primary)] font-bold transition-transform duration-100 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--primary)]">
                    Secondary
                  </button>
                  <button className="inline-flex py-2 px-5 bg-[var(--border)] rounded-lg text-[var(--text-secondary)] font-bold opacity-60 cursor-not-allowed" disabled>
                    Disabled
                  </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Enter some text..."
                  className="w-full p-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--primary)] focus:border-transparent"
                />
                <select className="w-full p-2 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text-primary)] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--primary)] focus:border-transparent appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='${encodeURIComponent(getComputedStyle(document.documentElement).getPropertyValue('--text-secondary'))}' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`}}>
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>

              <div className="mb-6">
                  <label htmlFor="progress-bar" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Loading progress</label>
                  <progress id="progress-bar" value="75" max="100" className="w-full h-2 rounded-lg overflow-hidden accent-[var(--primary)] [&::-webkit-progress-bar]:bg-[var(--border)] [&::-webkit-progress-value]:bg-[var(--primary)] [&::-moz-progress-bar]:bg-[var(--primary)]"></progress>
              </div>
              
              <div className="p-6 rounded-xl border border-[var(--border)] bg-[var(--bg)] transition-colors duration-300">
                  <h3 className="font-bold text-lg text-[var(--text-primary)] mb-2 transition-colors duration-300">
                  Nested Panel
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] transition-colors duration-300">
                  This panel uses the main background color to contrast with the card's surface color, demonstrating layering.
                  </p>
              </div>
          </div>

          <button
            onClick={cycleTheme}
            className="inline-flex py-3 px-5 bg-[var(--primary)] rounded-lg leading-none cursor-pointer text-[var(--text-inverse)] font-bold select-none relative transition-transform duration-100 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)]"
          >
            Cycle Theme
          </button>
          
          <footer className="mt-8 pt-4 border-t border-[var(--border)] text-center transition-colors duration-300">
            <button 
              onClick={() => setView('docs')}
              className="text-sm text-[var(--primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)] rounded-md"
            >
              View Documentation
            </button>
          </footer>
        </main>
      ) : (
        <DocumentationPage onGoBack={() => setView('app')} />
      )}
    </div>
  );
};

/**
 * The root component of the application.
 * Its only responsibility is to set up the ThemeProvider, which makes the
 * theme context available to all descendant components.
 */
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
