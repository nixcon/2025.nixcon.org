import { onMount, onCleanup, createEffect } from "solid-js";
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

  onMount(() => {
    const colors = colorSchemes[currentTheme()];
    animation = startLavaAnimation(colors);

    if (isAnimationOn()) {
      animation.start();
    } else {
      // Render a single static frame if animation is initially off
      animation.renderSingleFrame();
    }
  });

  onCleanup(() => {
    if (animation) animation.stop();
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
      <canvas id="background" class="fixed inset-0 w-screen h-svh" />

    </>
  );
}
