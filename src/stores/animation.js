import { createSignal, createEffect, onCleanup, onMount } from 'solid-js';

// Animation modes
export const AnimationModes = {
  AUTO: 'auto',         // Off after 5 seconds
  ALWAYS_ON: 'always_on',
  ALWAYS_OFF: 'always_off'
};

// Storage key for localStorage
const STORAGE_KEY = 'nixcon2025-animation-mode';

// Get initial mode from localStorage or default to AUTO
const getInitialMode = () => {
  if (typeof window === 'undefined') return AnimationModes.AUTO;

  try {
    const savedMode = localStorage.getItem(STORAGE_KEY);
    return savedMode && Object.values(AnimationModes).includes(savedMode)
      ? savedMode
      : AnimationModes.AUTO;
  } catch (e) {
    console.warn('Failed to read animation mode from localStorage:', e);
    return AnimationModes.AUTO;
  }
};

// Initialize signals with default values
const initialMode = getInitialMode();
const [animationMode, setAnimationMode] = createSignal(initialMode);

// Set initial animation state based on the mode
const initialAnimationState = initialMode !== AnimationModes.ALWAYS_OFF;
const [isAnimationOn, setIsAnimationOn] = createSignal(initialAnimationState);
let autoOffTimer = null;

export const useAnimationStore = () => {
  // Save mode to localStorage when it changes
  createEffect(() => {
    const mode = animationMode();
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch (e) {
        console.warn('Failed to save animation mode to localStorage:', e);
      }
    }
  });
  // Setup effect to handle AUTO mode
  createEffect(() => {
    // Clear any existing timer
    if (autoOffTimer) {
      clearTimeout(autoOffTimer);
      autoOffTimer = null;
    }

    // If in AUTO mode, set a timer to turn off animation after 5 seconds
    if (animationMode() === AnimationModes.AUTO && isAnimationOn()) {
      autoOffTimer = setTimeout(() => {
        setIsAnimationOn(false);
      }, 5000); // 5 seconds
    }
  });

  // Clean up timer when component unmounts
  onCleanup(() => {
    if (autoOffTimer) {
      clearTimeout(autoOffTimer);
      autoOffTimer = null;
    }
  });

  // Cycle through animation modes
  const cycleAnimationMode = () => {
    const currentMode = animationMode();
    let newMode;

    switch (currentMode) {
      case AnimationModes.AUTO:
        newMode = AnimationModes.ALWAYS_ON;
        setIsAnimationOn(true);
        break;
      case AnimationModes.ALWAYS_ON:
        newMode = AnimationModes.ALWAYS_OFF;
        setIsAnimationOn(false);
        break;
      case AnimationModes.ALWAYS_OFF:
      default:
        newMode = AnimationModes.AUTO;
        setIsAnimationOn(true);
        break;
    }

    setAnimationMode(newMode);

    // Update animation state based on new mode
    if (newMode === AnimationModes.ALWAYS_OFF) {
      setIsAnimationOn(false);
    } else {
      setIsAnimationOn(true);
    }

    return newMode;
  };

  // Legacy toggle function for backward compatibility
  const toggleAnimation = () => {
    const newState = !isAnimationOn();
    setIsAnimationOn(newState);
    return newState;
  };

  return {
    animationMode,
    isAnimationOn,
    setIsAnimationOn,
    toggleAnimation,
    cycleAnimationMode,

    // Helper function to get a display name for the current mode
    getAnimationModeDisplayName: () => {
      switch (animationMode()) {
        case AnimationModes.AUTO:
          return 'Auto (5 Seconds)';
        case AnimationModes.ALWAYS_ON:
          return 'Always On';
        case AnimationModes.ALWAYS_OFF:
          return 'Always Off';
        default:
          return 'Unknown';
      }
    }
  };
};
