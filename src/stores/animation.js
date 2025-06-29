import { createSignal, createEffect } from 'solid-js';

// Animation modes
export const AnimationModes = {
  OFF: 'off',
  ON: 'on'
};

// Storage key for localStorage
const STORAGE_KEY = 'nixcon2025-animation-mode';

// Get initial mode from localStorage or default to OFF
const getInitialMode = () => {
  if (typeof window === 'undefined') return AnimationModes.OFF;

  try {
    const savedMode = localStorage.getItem(STORAGE_KEY);
    return savedMode && Object.values(AnimationModes).includes(savedMode)
      ? savedMode
      : AnimationModes.OFF;
  } catch (e) {
    console.warn('Failed to read animation mode from localStorage:', e);
    return AnimationModes.OFF;
  }
};

// Initialize signals with default values
const initialMode = getInitialMode();
const [animationMode, setAnimationMode] = createSignal(initialMode);

// Set initial animation state based on the mode
const initialAnimationState = initialMode === AnimationModes.ON;
const [isAnimationOn, setIsAnimationOn] = createSignal(initialAnimationState);

// Signal to track WebGL availability
const [webglNotAvailable, setWebglNotAvailable] = createSignal(false)

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

  // Toggle animation mode between ON and OFF
  const toggleAnimationMode = () => {
    const currentMode = animationMode();
    const newMode = currentMode === AnimationModes.ON ? AnimationModes.OFF : AnimationModes.ON;

    setAnimationMode(newMode);
    setIsAnimationOn(newMode === AnimationModes.ON);

    return newMode;
  };

  return {
    animationMode,
    isAnimationOn,
    setIsAnimationOn,
    toggleAnimationMode,
    webglNotAvailable,
    setWebglNotAvailable,

    // Helper function to get a display name for the current mode
    getAnimationModeDisplayName: () => {
      switch (animationMode()) {
        case AnimationModes.ON:
          return 'On';
        case AnimationModes.OFF:
          return 'Off';
        default:
          return 'Unknown';
      }
    }
  };
};
