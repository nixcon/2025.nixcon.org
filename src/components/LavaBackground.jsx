import { onMount, onCleanup } from "solid-js";
import { startLavaAnimation } from "~/lava/app";
import { useThemeStore, colorSchemes } from "~/stores/theme";
import { useAnimationStore } from "~/stores/animation";

/**
 * A component that renders the lava animation background.
 * This component should only be rendered on the client side.
 */
export default function LavaBackground() {
  const { currentTheme } = useThemeStore();
  const { isAnimationOn, toggleAnimation } = useAnimationStore();
  let animation = null;

  onMount(() => {
    const colors = colorSchemes[currentTheme()];
    animation = startLavaAnimation(colors);

    if (isAnimationOn()) {
      animation.start();
    }
  });

  onCleanup(() => {
    if (animation) animation.stop();
  });

  const handleToggleAnimation = () => {
    const newState = toggleAnimation();

    if (newState) {
      animation.start();
    } else {
      animation.stop();
    }
  };

  return (
    <>
      <canvas id="background" class="fixed inset-0 w-screen h-svh" />

      {/* Toggle Switch */}
      {/* <div class="absolute top-4 left-4 z-[9999]">
        <label class="relative inline-flex flex-col items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isAnimationOn()}
            onChange={handleToggleAnimation}
            class="sr-only peer"
          />
          <div
            class="w-6 h-11 bg-gray-700/50 peer-focus:outline-none rounded-sm peer 
                   peer-checked:after:translate-y-full peer-checked:after:border-white 
                   after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                   after:bg-white after:border-gray-300 after:border after:rounded-sm 
                   after:h-5 after:w-5 after:transition-all backdrop-blur-sm
                   rotate-180
                   "
            style={{
              "background-color": isAnimationOn() ? `${colorSchemes[currentTheme()].cssLavaColor}50` : "rgba(75, 85, 99, 0.5)"
            }}
          >
          </div>
        </label>
      </div> */}
    </>
  );
}
