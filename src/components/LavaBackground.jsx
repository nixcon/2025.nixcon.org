import { BsFullscreen } from "@aminya/solid-icons/bs/BsFullscreen"
import { BsFullscreenExit } from "@aminya/solid-icons/bs/BsFullscreenExit"
import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js"
import { Logo } from "~/components/Logo"
import { startLavaAnimation } from "~/lava/app"
import { useAnimationStore } from "~/stores/animation"
import { useFullscreenStore } from "~/stores/fullscreen"
import { colorSchemes, useThemeStore } from "~/stores/theme"

/**
 * A component that renders the lava animation background.
 * This component should only be rendered on the client side.
 */
export default function LavaBackground() {
  const { currentTheme } = useThemeStore()
  const { isAnimationOn, webglNotAvailable, setWebglNotAvailable } = useAnimationStore()
  const { isFullscreen, toggleFullscreen } = useFullscreenStore()

  let animation = null

  // Handle window resize
  const handleResize = () => {
    // If animation is stopped, render a single frame to update with new dimensions
    if (animation && !isAnimationOn()) {
      animation.renderSingleFrame()
    }
  }

  onMount(() => {
    const colors = colorSchemes[currentTheme()]
    animation = startLavaAnimation(colors)

    if (animation.webglNotAvailable) {
      setWebglNotAvailable(true)
      return
    }

    if (isAnimationOn()) {
      animation.start()
    } else {
      // Render a single static frame if animation is initially off
      animation.renderSingleFrame()
    }

    // Add resize event listener
    window.addEventListener("resize", handleResize)
  })

  onCleanup(() => {
    if (animation && !animation.webglNotAvailable) animation.stop()
    // Remove resize event listener
    window.removeEventListener("resize", handleResize)
  })

  // Effect to start/stop animation when isAnimationOn changes
  createEffect(() => {
    if (!animation || animation.webglNotAvailable) return

    if (isAnimationOn()) {
      animation.start()
    } else {
      // Render a single static frame instead of stopping completely
      animation.renderSingleFrame()
    }
  })

  // Effect to update colors when currentTheme changes
  createEffect(() => {
    if (!animation || animation.webglNotAvailable) return

    const newThemeName = currentTheme()
    const newColors = colorSchemes[newThemeName]

    if (newColors) {
      animation.updateColors(newColors)
    }
  })

  return (
    <Show when={!webglNotAvailable()}>
      <>
        <div id="background-container" class="fixed inset-0 w-screen h-screen">
          <canvas id="background" class="w-full h-full" />
          {isFullscreen() && (
            <div
              id="fullscreen-logo"
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 pointer-events-none"
            >
              <Logo />
            </div>
          )}

          {/* Exit Fullscreen button - desktop only */}
          {isFullscreen() && (
            <button
              onClick={() => toggleFullscreen("background-container")}
              class="fixed top-4 right-4 z-[9999] p-2 text-white/0 hover:text-white/80 transition-opacity hidden md:block cursor-pointer"
              aria-label={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
              title={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
            >
              {isFullscreen() ? <BsFullscreenExit size={20} /> : <BsFullscreen size={20} />}
            </button>
          )}
        </div>
      </>
    </Show>
  )
}
