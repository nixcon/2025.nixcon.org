import { onMount, onCleanup } from "solid-js";
import { startLavaAnimation } from "~/lava/app";
import { useThemeStore, colorSchemes } from "~/stores/theme";

/**
 * A component that renders the lava animation background.
 * This component should only be rendered on the client side.
 */
export default function LavaBackground() {
  const { currentTheme } = useThemeStore();
  let cleanup = null;

  onMount(() => {
    const colors = colorSchemes[currentTheme()];
    cleanup = startLavaAnimation(colors);
  });

  onCleanup(() => {
    if (cleanup) cleanup();
  });

  return <canvas id="background" class="fixed inset-0 w-screen h-svh" />;
}
