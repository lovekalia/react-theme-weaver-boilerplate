import React from 'react';

interface DocumentationPageProps {
  onGoBack: () => void;
}

const DocumentationPage: React.FC<DocumentationPageProps> = ({ onGoBack }) => {
  return (
    <div
      className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-[var(--surface)] text-[var(--text-secondary)] rounded-2xl shadow-2xl border border-[var(--border)] transition-colors duration-300"
    >
      <header className="flex items-center justify-between p-4 border-b border-[var(--border)] sticky top-0 bg-[var(--surface)] z-10">
        <h1 id="docs-title" className="text-xl font-bold text-[var(--text-primary)]">
          Project Documentation
        </h1>
        <button
          onClick={onGoBack}
          className="text-sm text-[var(--primary)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-[var(--surface)] rounded-md"
        >
          &larr; Back to App
        </button>
      </header>
      
      <div className="p-6 overflow-y-auto prose prose-sm md:prose-base max-w-none text-[var(--text-secondary)] prose-headings:text-[var(--text-primary)] prose-strong:text-[var(--text-primary)] prose-code:text-[var(--text-primary)] prose-code:bg-[color:var(--primary)/0.15] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-li:marker:text-[var(--primary)]">
          <p>This is a web application built with React and TypeScript that demonstrates a dynamic and persistent theming system. Users can switch between multiple pre-defined themes, and their selection is saved locally for future visits. The application is designed with a strong focus on user experience, accessibility, and modern UI/UX principles.</p>
          
          <h2>Features</h2>
          <ul>
              <li><strong>Multiple Themes</strong>: Choose from six distinct themes: Dark, Sunset, Sunrise, Light, Ocean, and Forest.</li>
              <li><strong>Dynamic Theme Switching</strong>: Click to select a theme or cycle through them with a dedicated button.</li>
              <li><strong>Component Preview</strong>: A dedicated section showcases how common UI elements (buttons, panels, text) look with the currently selected theme.</li>
              <li><strong>Theme Persistence</strong>: The selected theme is automatically saved to <code>localStorage</code> and reloaded on the next visit.</li>
              <li><strong>Keyboard Shortcuts</strong>: Cycle through themes using the <strong>Left and Right Arrow keys</strong> or select a specific theme directly with <strong>number keys (1-6)</strong>.</li>
              <li><strong>Accessibility</strong>: Proper use of ARIA attributes, clear focus management, and live announcements for screen readers.</li>
              <li><strong>Animations & Transitions</strong>: Subtle fade transitions and interactive animations on UI elements.</li>
              <li><strong>Responsive Design</strong>: The layout adapts smoothly to different screen sizes.</li>
          </ul>

          <h2>Reusing the Theming System</h2>
          <p>A common requirement is to share a theming system across multiple applications to maintain a consistent brand and user experience. <strong>You should not copy and paste the theme files</strong> into each new project, as this creates a maintenance nightmare.</p>
          <p>The professional approach is to extract the theming logic and components into a dedicated, version-controlled package that can be installed as a dependency in any project.</p>
          <h3>Step 1: Create a Reusable Package</h3>
          <p>Create a new project intended to be a library (e.g., a private NPM package). Move the core theming files into it:</p>
          <ul>
            <li><code>types.ts</code>: Contains the <code>Theme</code> and <code>ThemeColors</code> definitions.</li>
            <li><code>constants.ts</code>: Contains the <code>THEME_COLORS</code> constant with all palettes.</li>
            <li><code>components/Icons.tsx</code>: Contains all the theme-specific SVG icons.</li>
          </ul>
          <h3>Step 2: Create a <code>ThemeProvider</code></h3>
          <p>The most crucial piece is a <code>ThemeProvider</code> component. This component will wrap your application and provide all the necessary logic and context. It should manage:</p>
          <ol>
            <li>The current theme state (<code>useState</code>).</li>
            <li>Persistence to and from <code>localStorage</code>.</li>
            <li>An effect (<code>useEffect</code>) to apply the theme's CSS variables to the root element (<code>document.documentElement</code>).</li>
          </ol>
          <p>Here is a more complete example of what the <code>ThemeProvider</code> might look like:</p>
          <pre><code>{`// In your new package: theming/context.tsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { THEME_COLORS, THEMES, Theme } from '..'; // Assuming barrel exports

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to get the initial theme from localStorage
const getInitialTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (THEMES as readonly string[]).includes(savedTheme)) {
      return savedTheme as Theme;
    }
  } catch (e) {
    // Ignore localStorage errors
  }
  return 'dark'; // Default theme
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    // Apply theme colors as CSS variables
    const colors = THEME_COLORS[theme];
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(\`--\${key}\`, value);
    });
    
    // Save theme to localStorage
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      // Ignore localStorage errors
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};`}</code></pre>

          <h3>Step 3: Export Components</h3>
          <p>From your new package, you should export the <code>ThemeProvider</code>, the <code>useTheme</code> hook, and any UI components you want to reuse, such as <code>ThemePicker</code> and <code>ThemeBox</code>.</p>
          
          <h3>Step 4: Usage in Other Applications</h3>
          <p>Once your package is published (e.g., to NPM or GitHub Packages as <code>@your-org/themes</code>), using it in another application becomes trivial:</p>
          <ol>
              <li><strong>Install the dependency:</strong><br/><pre><code>npm install @your-org/themes</code></pre></li>
              <li><strong>Wrap your application with the <code>ThemeProvider</code>:</strong><br/><pre><code>{`// In your app's main file (e.g., App.tsx)
import React from 'react';
import { ThemeProvider, ThemePicker, useTheme } from '@your-org/themes';

const MyThemedComponent = () => {
  const { theme } = useTheme(); // Access the current theme
  return <p>The current theme is: {theme}</p>;
};

function App() {
  return (
    <ThemeProvider>
      <header>
        <h1>My Awesome App</h1>
        <ThemePicker />
      </header>
      <main>
        <MyThemedComponent />
      </main>
    </ThemeProvider>
  );
}`}</code></pre></li>
          </ol>
          <p>This approach ensures your theming system is <strong>centralized, maintainable, and easily consumable</strong>, promoting consistency and saving development time across your projects.</p>

          <h2>Theme Guide</h2>
            <ul>
                <li><strong>Dark</strong>: A classic, modern dark theme with a neutral palette and a vibrant blue primary color. Ideal for low-light environments and focused work.</li>
                <li><strong>Sunset</strong>: Inspired by the warm, fading light of dusk. It features a deep, muted green background with warm, earthy tones for text and primary actions.</li>
                <li><strong>Sunrise</strong>: A bright and gentle theme reminiscent of early morning. It uses a soft, rosy base with rich, warm text colors for a comfortable reading experience.</li>
                <li><strong>Light</strong>: A clean, minimalist light theme with high contrast. Perfect for readability in bright conditions, providing a crisp and professional look.</li>
                <li><strong>Ocean</strong>: A cool, deep theme inspired by the sea. It combines dark blues and grays with a bright, electric blue primary color, creating a calm yet energetic feel.</li>
                <li><strong>Forest</strong>: An earthy theme that evokes a sense of nature. It uses deep greens and browns, creating a grounded and serene environment.</li>
            </ul>
      </div>
    </div>
  );
};

export default DocumentationPage;
