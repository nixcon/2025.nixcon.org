import { createSignal, createEffect, onMount, onCleanup } from 'solid-js';
import { useAnimationStore } from './animation';

// Initialize signals with default values
const [isFullscreen, setIsFullscreen] = createSignal(false);

export const useFullscreenStore = () => {
  const { isAnimationOn, setIsAnimationOn } = useAnimationStore();
  // Listen for fullscreen change events
  onMount(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    onCleanup(() => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    });
  });

  // Toggle fullscreen function
  const toggleFullscreen = (elementId) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    if (!document.fullscreenElement) {
      element.requestFullscreen().then(() => {
        setIsFullscreen(true);
        // Ensure animation is on when entering fullscreen
        if (!isAnimationOn()) {
          setIsAnimationOn(true);
        }
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  return {
    isFullscreen,
    toggleFullscreen
  };
};