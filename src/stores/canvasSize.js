import { createSignal } from "solid-js"

// Common recording/streaming resolutions
export const PRESET_RESOLUTIONS = {
  "Auto (Window Size)": { width: null, height: null },
  "3840x2160 (4K UHD)": { width: 3840, height: 2160 },
  "2560x1440 (2K QHD)": { width: 2560, height: 1440 },
  "1920x1080 (Full HD)": { width: 1920, height: 1080 },
  "1280x720 (HD)": { width: 1280, height: 720 },
  "1366x768 (WXGA)": { width: 1366, height: 768 },
  "1600x900 (HD+)": { width: 1600, height: 900 },
  "1024x768 (4:3)": { width: 1024, height: 768 },
  "800x600 (4:3)": { width: 800, height: 600 },
  "Custom": { width: 1920, height: 1080 }
}

function createCanvasSizeStore() {
  const [selectedPreset, setSelectedPreset] = createSignal("Auto (Window Size)")
  const [customWidth, setCustomWidth] = createSignal(1920)
  const [customHeight, setCustomHeight] = createSignal(1080)

  const getCurrentDimensions = () => {
    const preset = selectedPreset()

    if (preset === "Auto (Window Size)") {
      // Handle SSR case where window is not available
      if (typeof window === "undefined") {
        return { width: 1920, height: 1080 } // Default fallback
      }
      return {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    if (preset === "Custom") {
      return {
        width: customWidth(),
        height: customHeight()
      }
    }

    return PRESET_RESOLUTIONS[preset]
  }

  const setPreset = (presetName) => {
    if (PRESET_RESOLUTIONS[presetName]) {
      setSelectedPreset(presetName)
    }
  }

  const setCustomDimensions = (width, height) => {
    setCustomWidth(Math.max(100, Math.min(7680, width))) // Clamp between 100 and 7680
    setCustomHeight(Math.max(100, Math.min(4320, height))) // Clamp between 100 and 4320
  }

  return {
    selectedPreset,
    customWidth,
    customHeight,
    getCurrentDimensions,
    setPreset,
    setCustomDimensions
  }
}

export const useCanvasSizeStore = createCanvasSizeStore()