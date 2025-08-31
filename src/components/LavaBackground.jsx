import { BsFullscreen } from "@aminya/solid-icons/bs/BsFullscreen"
import { BsFullscreenExit } from "@aminya/solid-icons/bs/BsFullscreenExit"
import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js"
import { Logo } from "~/components/Logo"
import { startLavaAnimation } from "~/lava/app"
import { useAnimationStore } from "~/stores/animation"
import { useFullscreenStore } from "~/stores/fullscreen"
import { colorSchemes, useThemeStore } from "~/stores/theme"
import { useCanvasSizeStore } from "~/stores/canvasSize"

/**
 * A component that renders the lava animation background.
 * This component should only be rendered on the client side.
 */
export default function LavaBackground() {
  const { currentTheme } = useThemeStore()
  const { isAnimationOn, webglNotAvailable, setWebglNotAvailable } = useAnimationStore()
  const { isFullscreen, toggleFullscreen } = useFullscreenStore()
  const { selectedPreset, customWidth, customHeight } = useCanvasSizeStore

  let animation = null

  // Handle window resize and canvas size changes
  const handleResize = () => {
    // If animation is stopped, render a single frame to update with new dimensions
    if (animation && !isAnimationOn()) {
      animation.renderSingleFrame()
    }
  }

  // Handle canvas size changes from the store
  const handleCanvasSizeChange = () => {
    if (animation && !animation.webglNotAvailable) {
      // Force a resize and re-render
      const canvas = document.getElementById("background")
      if (canvas) {
        // Trigger resize logic in the animation
        window.dispatchEvent(new Event('resize'))
      }
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

  // Effect to handle canvas size changes
  createEffect(() => {
    // Track changes to canvas size settings
    selectedPreset()
    customWidth()
    customHeight()

    // Trigger resize when canvas size settings change
    handleCanvasSizeChange()
  })

  return (
    <Show when={!webglNotAvailable()}>
      <>
        <div id="background-container" class="fixed inset-0 w-screen h-screen flex items-center justify-center">
          <canvas
            id="background"
            class={selectedPreset() === "Auto (Window Size)" ? "w-full h-full" : ""}
            style={selectedPreset() !== "Auto (Window Size)" ? {
              width: `${useCanvasSizeStore.getCurrentDimensions().width}px`,
              height: `${useCanvasSizeStore.getCurrentDimensions().height}px`,
              "max-width": "100vw",
              "max-height": "100vh"
            } : {}}
          />
        </div>
      </>
    </Show>
  )
}
