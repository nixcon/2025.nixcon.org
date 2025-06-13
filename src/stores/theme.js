import { createSignal } from "solid-js"

const [lavaDebug, setLavaDebug] = createSignal(false)

const ThemeNames = ["Lambda Nix", "Nix Blue", "Lava", "Ocean", "Acid"]

export const colorSchemes = {
  "Lambda Nix": {
    backgroundColor: [0.15, 0.05, 0.25], // More purple-dominant dark base
    lavaColor: [0.72, 0.89, 1.22], // Slightly darker blue tint
    cssBackgroundColor: "#3A1466", // Richer purple to match rendered appearance
    cssLavaColor: "#7EBBFF", // Soft blue that represents the rendered lava color
  },
  "Nix Blue": {
    backgroundColor: [0.126, 0.194, 0.314], // Darker blue-purple tint (80% of #324D7D)
    lavaColor: [0.72, 0.89, 1.22], // Slightly darker blue tint
    cssBackgroundColor: "#324D7D", // Actual Nix blue color
    cssLavaColor: "#7EBBFF", // Soft blue that represents the rendered lava color
  },
  Lava: {
    backgroundColor: [0.427, 0.157, 0.851],
    lavaColor: [2.0, 0.8, -0.6],
    cssBackgroundColor: "#6d28d9",
    cssLavaColor: "#F59E0B",
  },
  Ocean: {
    backgroundColor: [0.05, 0.08, 0.25], // Added cyan-blue tint
    lavaColor: [0.0, 1.2, 2.0],
    cssBackgroundColor: "#0D1440", // Deep blue
    cssLavaColor: "#00DDFF", // Bright cyan to represent the intense blue-cyan effect
  },
  Acid: {
    backgroundColor: [0.08, 0.15, 0.05], // Added yellowish-green tint
    lavaColor: [0.8, 1.5, 0.0],
    cssBackgroundColor: "#14260D", // Dark green
    cssLavaColor: "#AAFF00", // Bright lime green to represent the acid effect
  },
}

// Default theme (localStorage persistence disabled)
const initialTheme = "Lava"

const [currentTheme, setCurrentTheme] = createSignal(initialTheme)

export const useThemeStore = () => {
  const cycleTheme = () => {
    const current = currentTheme()
    let themesToCycle = ThemeNames

    if (lavaDebug()) {
      themesToCycle = ThemeNames.filter((name) => name.startsWith("Lava"))
      if (themesToCycle.length === 0) {
        themesToCycle = ThemeNames // Fallback if no "Lava" themes found
      }
    }

    let currentIndex = themesToCycle.indexOf(current)

    // If current theme is not in the (potentially filtered) list,
    // or if (in debug mode and current is not a lava theme but lava themes exist for cycling),
    // then prepare to cycle from the start of themesToCycle.
    if (currentIndex === -1) {
      // This ensures that if the current theme is not in the active list (e.g., switched from non-Lava to Lava-only cycle),
      // it will start from the beginning of that active list.
      currentIndex = -1 // Results in nextIndex being 0 for themesToCycle
    } else if (lavaDebug() && !current.startsWith("Lava") && themesToCycle.some((t) => t.startsWith("Lava"))) {
      // If lavaDebug is on, current theme is not a Lava theme, but there are Lava themes to cycle through,
      // then start from the first Lava theme.
      currentIndex = -1
    }

    if (themesToCycle.length === 0) {
      console.warn("No themes available for cycling.")
      return // Avoid division by zero if themesToCycle is empty
    }

    const nextIndex = (currentIndex + 1) % themesToCycle.length
    const newTheme = themesToCycle[nextIndex]

    setCurrentTheme(newTheme)
  }

  const toggleLavaDebug = () => {
    const newDebugState = !lavaDebug()
    setLavaDebug(newDebugState)

    if (newDebugState) {
      const lavaThemes = ThemeNames.filter((name) => name.startsWith("Lava"))
      // If debug is turned on, and current theme is not a Lava theme, switch to the first Lava theme.
      if (lavaThemes.length > 0 && !currentTheme().startsWith("Lava")) {
        setCurrentTheme(lavaThemes[0])
      }
      // If already on a lava theme, or no lava themes, no immediate change needed, cycleTheme will adapt.
    }
    // When turning debug off, no specific theme change is forced here;
    // cycleTheme will naturally use all themes on its next call.
  }

  return {
    currentTheme,
    setTheme: (theme) => {
      setCurrentTheme(theme)
    },
    cycleTheme,
    lavaDebug, // Export the signal's read accessor
    toggleLavaDebug, // Export the toggle function
  }
}
