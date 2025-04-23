import { useAnimationStore, AnimationModes } from "~/stores/animation";
import { useThemeStore, colorSchemes } from "~/stores/theme";

/**
 * A component that displays the current animation mode and allows toggling between on/off.
 */
export default function AnimationModeToggle() {
  const { animationMode, isAnimationOn, toggleAnimationMode, getAnimationModeDisplayName } = useAnimationStore();
  const { currentTheme } = useThemeStore();

  const handleClick = () => {
    toggleAnimationMode();
  };

  // Get the appropriate color based on the current theme and animation state
  const getIndicatorColor = () => {
    if (!isAnimationOn()) {
      return "rgba(75, 85, 99, 0.5)"; // Gray when off
    }

    const themeColors = colorSchemes[currentTheme()];
    return `${themeColors.cssLavaColor}50`; // Theme color with 50% opacity when on
  };


  return (
    <button
      onClick={handleClick}
      class="flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors hover:bg-white/10 text-white/80 hover:text-white"
      aria-label={`Animation mode: ${getAnimationModeDisplayName()}`}
    >
      <span class="text-sm font-medium">Animation: {getAnimationModeDisplayName()}</span>
      <span
        class="w-2 h-2 rounded-full transition-colors"
        style={{ "background-color": getIndicatorColor() }}
      />
    </button>
  );
}
