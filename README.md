# Theme Weaver: A React Theming System Boilerplate

An advanced boilerplate for creating reusable, accessible, and dynamic theming systems in React, built with TypeScript, Tailwind CSS, and a clean Provider/Hook API.

This project is more than just a theme switcher; it's a complete starter kit that demonstrates professional patterns for managing UI themes in a scalable and maintainable way.

---

## ✨ Key Features

-   🎨 **Reusable Architecture**: The entire theming system is encapsulated in a `theming/` directory, designed to be easily extracted into a standalone NPM package.
-   🌗 **Multiple Themes**: Comes with six pre-built themes (Dark, Light, Sunset, Sunrise, Ocean, Forest) to showcase versatility.
-   💾 **localStorage Persistence**: Remembers the user's last selected theme for a consistent experience across sessions.
-   🔬 **Live Component Preview**: A rich preview section demonstrates how buttons, inputs, panels, and other UI elements look and feel with each theme.
-   ♿ **Full Accessibility (A11y)**:
    -   Correct ARIA attributes (`aria-pressed`, `aria-label`).
    -   Clear, theme-aware focus indicators for keyboard navigation.
    -   Live announcements for screen readers when the theme changes.
-   ⌨️ **Keyboard Shortcuts**: Cycle through themes with arrow keys or select one directly with number keys (1-6).
-   🚀 **Smooth Animations**: Subtle, polished transitions for theme changes and UI interactions.
-   📱 **Responsive Design**: A clean and modern UI that adapts to all screen sizes.
-   📚 **In-App Documentation**: A theme-aware documentation page explaining the project's features and architecture.

## 🛠️ Tech Stack

-   **React**: For building the user interface.
-   **TypeScript**: For robust, static typing and improved developer experience.
-   **Tailwind CSS**: For utility-first styling that works seamlessly with CSS variables for dynamic theming.
-   **React Context API**: For providing theme state throughout the application without prop drilling.

## 📂 Project Structure

The project is structured to separate the core theming logic from the application that consumes it. This makes the system highly portable.

```
/src
├── theming/      # <-- The reusable "library"
│   ├── components/ # <-- ThemePicker, ThemeBox, Icons
│   ├── context.tsx # <-- ThemeProvider & useTheme hook
│   ├── constants.ts
│   ├── index.ts    # <-- Public API of the library
│   └── types.ts
├── components/   # <-- App-specific components (e.g., DocumentationPage)
└── App.tsx       # <-- The consumer application logic
```

## ⚙️ How It Works

The system is built on three core concepts:

1.  **CSS Custom Properties (Variables)**: Each theme in `theming/constants.ts` is a collection of color variables (e.g., `--bg`, `--primary`).
2.  **`ThemeProvider`**: This React component, using the Context API, manages the active theme. When the theme changes, it updates the CSS variables on the `:root` (`document.documentElement`), causing the entire application's UI to update instantly.
3.  **`useTheme` Hook**: This custom hook provides a simple and clean API (`{ theme, setTheme, cycleTheme }`) for any component to access the current theme or change it.

## 🚀 Reusing the Theming System

This boilerplate is designed to be the foundation for your own design system. **Do not copy and paste the `theming` directory** into each new project. Instead, extract it into its own version-controlled package.

### How to Create a Reusable Package

1.  **Initialize a New Project**: Create a new project for your library (e.g., a private NPM package).
2.  **Move the `theming/` Directory**: Copy the entire `theming/` directory into your new library project.
3.  **Configure `package.json`**: Set up the `main` and `types` fields in your `package.json` to point to your library's entry point (e.g., `theming/index.ts`).
4.  **Publish**: Publish the package to a registry like NPM or GitHub Packages.
5.  **Install & Use**: In any of your applications, you can now run `npm install @your-org/themes` and use it like this:

```tsx
// In your app's main file
import React from 'react';
import { ThemeProvider, ThemePicker, useTheme } from '@your-org/themes';

const MyComponent = () => {
  const { theme } = useTheme();
  return <p>The current theme is: {theme}</p>;
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <header>
        <h1>My Awesome App</h1>
        <ThemePicker /> {/* The picker works out-of-the-box */}
      </header>
      <main>
        <MyComponent />
      </main>
    </ThemeProvider>
  );
}
```

This pattern ensures your theming is centralized, maintainable, and consistent across all your projects.

## 🎨 Theme Guide

-   **Dark**: A classic, modern dark theme with a neutral palette and a vibrant blue primary color. Ideal for low-light environments and focused work.
-   **Sunset**: Inspired by the warm, fading light of dusk. It features a deep, muted green background with warm, earthy tones for text and primary actions.
-   **Sunrise**: A bright and gentle theme reminiscent of early morning. It uses a soft, rosy base with rich, warm text colors for a comfortable reading experience.
-   **Light**: A clean, minimalist light theme with high contrast. Perfect for readability in bright conditions, providing a crisp and professional look.
-   **Ocean**: A cool, deep theme inspired by the sea. It combines dark blues and grays with a bright, electric blue primary color, creating a calm yet energetic feel.
-   **Forest**: An earthy theme that evokes a sense of nature. It uses deep greens and browns, creating a grounded and serene environment.
