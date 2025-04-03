import { createSignal } from 'solid-js';

type ThemeName = 'Lambda Nix' | 'Nix Blue' | 'Lava' | 'Ocean' | 'Acid';

export const colorSchemes: Record<ThemeName, { backgroundColor: number[], lavaColor: number[], cssBackgroundColor: string, cssLavaColor: string }> = {
  'Lambda Nix': {
    backgroundColor: [0.15, 0.05, 0.25],  // More purple-dominant dark base
    lavaColor: [0.72, 0.89, 1.22],      // Slightly darker blue tint
    cssBackgroundColor: '#3A1466',  // Richer purple to match rendered appearance
    cssLavaColor: '#7EBBFF'         // Soft blue that represents the rendered lava color
  },
  'Nix Blue': {
    backgroundColor: [0.126, 0.194, 0.314],  // Darker blue-purple tint (80% of #324D7D)
    lavaColor: [0.72, 0.89, 1.22],      // Slightly darker blue tint
    cssBackgroundColor: '#324D7D',  // Actual Nix blue color
    cssLavaColor: '#7EBBFF'         // Soft blue that represents the rendered lava color
  },
  'Lava': {
    backgroundColor: [0.4, 0.1, 0.4],    // Original purple-tinted background
    lavaColor: [2.0, 0.8, -0.6],
    cssBackgroundColor: '#661A66',  // Rich purple
    cssLavaColor: '#FF5500'         // Bright orange-red to represent the intense lava effect
  },
  'Ocean': {
    backgroundColor: [0.05, 0.08, 0.25],  // Added cyan-blue tint
    lavaColor: [0.0, 1.2, 2.0],
    cssBackgroundColor: '#0D1440',  // Deep blue
    cssLavaColor: '#00DDFF'         // Bright cyan to represent the intense blue-cyan effect
  },
  'Acid': {
    backgroundColor: [0.08, 0.15, 0.05],  // Added yellowish-green tint
    lavaColor: [0.8, 1.5, 0.0],
    cssBackgroundColor: '#14260D',  // Dark green
    cssLavaColor: '#AAFF00'         // Bright lime green to represent the acid effect
  }
};

const themes: ThemeName[] = ['Lambda Nix', 'Nix Blue', 'Lava', 'Ocean', 'Acid'];

// Default theme (localStorage persistence disabled)
const initialTheme: ThemeName = 'Lava';

const [currentTheme, setCurrentTheme] = createSignal<ThemeName>(initialTheme);

export const useThemeStore = () => {
  const cycleTheme = () => {
    const current = currentTheme();
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];

    // localStorage persistence disabled
    setCurrentTheme(newTheme);
  };

  return {
    currentTheme,
    setTheme: (theme: ThemeName) => {
      // localStorage persistence disabled
      setCurrentTheme(theme);
    },
    cycleTheme
  };
};
