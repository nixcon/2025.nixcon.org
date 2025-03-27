import { createSignal } from 'solid-js';

type ThemeName = 'Lambda Nix' | 'Nix Blue' | 'Lava' | 'Ocean' | 'Acid';

export const colorSchemes: Record<ThemeName, { backgroundColor: number[], lavaColor: number[] }> = {
  'Lambda Nix': {
    backgroundColor: [0.15, 0.05, 0.25],  // More purple-dominant dark base
    lavaColor: [0.72, 0.89, 1.22]      // Slightly darker blue tint
  },
  'Nix Blue': {
    backgroundColor: [0.126, 0.194, 0.314],  // Darker blue-purple tint (80% of #324D7D)
    lavaColor: [0.72, 0.89, 1.22]      // Slightly darker blue tint
  },
  'Lava': {
    backgroundColor: [0.4, 0.1, 0.4],    // Original purple-tinted background
    lavaColor: [2.0, 0.8, -0.6]
  },
  'Ocean': {
    backgroundColor: [0.05, 0.08, 0.25],  // Added cyan-blue tint
    lavaColor: [0.0, 1.2, 2.0]
  },
  'Acid': {
    backgroundColor: [0.08, 0.15, 0.05],  // Added yellowish-green tint
    lavaColor: [0.8, 1.5, 0.0]
  }
};

const themes: ThemeName[] = ['Lambda Nix', 'Nix Blue', 'Lava', 'Ocean', 'Acid'];

// Get initial theme from localStorage or default to 'Lava'
const savedTheme = localStorage.getItem('theme') as ThemeName;
const initialTheme: ThemeName = themes.includes(savedTheme) ? savedTheme : 'Lava';

const [currentTheme, setCurrentTheme] = createSignal<ThemeName>(initialTheme);

export const useThemeStore = () => {
  const cycleTheme = () => {
    const current = currentTheme();
    const currentIndex = themes.indexOf(current);
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];
    
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme);
  };

  return {
    currentTheme,
    setTheme: (theme: ThemeName) => {
      localStorage.setItem('theme', theme);
      setCurrentTheme(theme);
    },
    cycleTheme
  };
}; 