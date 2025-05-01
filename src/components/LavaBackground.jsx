import { onMount, onCleanup, createEffect, createSignal } from "solid-js";
import { startLavaAnimation } from "~/lava/app";
import { useThemeStore, colorSchemes } from "~/stores/theme";
import { useAnimationStore } from "~/stores/animation";

/**
 * A component that renders the lava animation background.
 * This component should only be rendered on the client side.
 */
export default function LavaBackground() {
  const { currentTheme } = useThemeStore();
  const { isAnimationOn } = useAnimationStore();
  let animation = null;

  // Handle window resize
  const handleResize = () => {
    // If animation is stopped, render a single frame to update with new dimensions
    if (animation && !isAnimationOn()) {
      animation.renderSingleFrame();
    }
  };

  onMount(() => {
    const colors = colorSchemes[currentTheme()];
    animation = startLavaAnimation(colors);

    if (isAnimationOn()) {
      animation.start();
    } else {
      // Render a single static frame if animation is initially off
      animation.renderSingleFrame();
    }

    // Add resize event listener
    window.addEventListener('resize', handleResize);
  });

  onCleanup(() => {
    if (animation) animation.stop();
    // Remove resize event listener
    window.removeEventListener('resize', handleResize);
  });

  // Effect to start/stop animation when isAnimationOn changes
  createEffect(() => {
    if (!animation) return;

    if (isAnimationOn()) {
      animation.start();
    } else {
      // Render a single static frame instead of stopping completely
      animation.renderSingleFrame();
    }
  });

  return (
    <>
      <canvas id="background" class="fixed inset-0 w-screen h-screen" />
    </>
  );
}
