import { clientOnly } from "@solidjs/start"
import { Show, For, createSignal, onMount } from "solid-js"
import { BsCamera } from "@aminya/solid-icons/bs/BsCamera"
import { BsRecordCircle } from "@aminya/solid-icons/bs/BsRecordCircle"
import { BsStopCircle } from "@aminya/solid-icons/bs/BsStopCircle"
import { BsAspectRatio } from "@aminya/solid-icons/bs/BsAspectRatio"
import { BsPinAngle } from "@aminya/solid-icons/bs/BsPinAngle"
import { BsPinAngleFill } from "@aminya/solid-icons/bs/BsPinAngleFill"
import { BsEye } from "@aminya/solid-icons/bs/BsEye"
import { BsEyeSlash } from "@aminya/solid-icons/bs/BsEyeSlash"
import { BsFullscreen } from "@aminya/solid-icons/bs/BsFullscreen"
import { BsFullscreenExit } from "@aminya/solid-icons/bs/BsFullscreenExit"
import { BsPlay } from "@aminya/solid-icons/bs/BsPlay"
import { BsPause } from "@aminya/solid-icons/bs/BsPause"
import { useAnimationStore } from "~/stores/animation"
import { colorSchemes, useThemeStore } from "~/stores/theme"
import { useCanvasSizeStore, PRESET_RESOLUTIONS } from "~/stores/canvasSize"
import { useFullscreenStore } from "~/stores/fullscreen"

const Randomize = clientOnly(() => import("~/components/Restart"))

// Create client-only version of the background component
const ClientLavaBackground = clientOnly(() => import("~/components/LavaBackground"))

export default function BackgroundPage() {
  const { currentTheme } = useThemeStore()
  const { webglNotAvailable, isAnimationOn, toggleAnimationMode } = useAnimationStore()
  const {
    selectedPreset,
    customWidth,
    customHeight,
    getCurrentDimensions,
    setPreset,
    setCustomDimensions
  } = useCanvasSizeStore
  const { isFullscreen, toggleFullscreen } = useFullscreenStore()

  // Recording state
  const [isRecording, setIsRecording] = createSignal(false)
  const [mediaRecorder, setMediaRecorder] = createSignal(null)
  const [recordingFps, setRecordingFps] = createSignal(30)

  // Sidebar visibility and pin state
  const [isSidebarVisible, setIsSidebarVisible] = createSignal(false)
  const [isPinned, setIsPinned] = createSignal(false)

  // Logo visibility state
  const [isLogoVisible, setIsLogoVisible] = createSignal(true)

  // Information dialogue state
  const [showInfoDialogue, setShowInfoDialogue] = createSignal(false)

  // Show info dialogue on mount and hide after 5 seconds
  onMount(() => {
    setShowInfoDialogue(true)
    setTimeout(() => {
      setShowInfoDialogue(false)
    }, 5000)
  })

  const captureScreenshot = () => {
    const canvas = document.getElementById("background")
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      console.error("Canvas not found or is not a canvas element")
      return
    }

    // Get current dimensions for filename
    const dimensions = getCurrentDimensions()
    const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')

    // Create a link element to download the screenshot
    const link = document.createElement("a")
    link.download = `nixcon-lava-${dimensions.width}x${dimensions.height}-${timestamp}.png`
    link.href = canvas.toDataURL("image/png")

    // Trigger the download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const startRecording = async () => {
    const canvas = document.getElementById("background")
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      console.error("Canvas not found or is not a canvas element")
      return
    }

    try {
      console.log("Starting recording...")

      // Create a stream from the canvas
      const stream = canvas.captureStream(recordingFps())

      // Check if MediaRecorder is supported
      if (!MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
        console.error("WebM video recording is not supported in this browser")
        return
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: 'video/webm;codecs=vp9',
      })

      const chunks = []

      recorder.ondataavailable = (event) => {
        console.log("Data available:", event.data.size)
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }

      recorder.onstop = () => {
        console.log("Recording stopped, creating download...")
        const blob = new Blob(chunks, { type: 'video/webm' })
        const dimensions = getCurrentDimensions()
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')

        // Create download link
        const link = document.createElement("a")
        link.download = `nixcon-lava-${dimensions.width}x${dimensions.height}-${timestamp}.webm`
        link.href = URL.createObjectURL(blob)

        // Trigger download
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)

        // Clean up
        URL.revokeObjectURL(link.href)
        setIsRecording(false)
        setMediaRecorder(null)
        console.log("Recording completed and downloaded")
      }

      recorder.onerror = (event) => {
        console.error("Recording error:", event.error)
        setIsRecording(false)
        setMediaRecorder(null)
      }

      recorder.onstart = () => {
        console.log("Recording started successfully")
      }

      // Start recording
      recorder.start(1000) // Request data every second
      setMediaRecorder(recorder)
      setIsRecording(true)
      console.log("MediaRecorder created and started, state:", recorder.state)

    } catch (error) {
      console.error("Failed to start recording:", error)
    }
  }

  const stopRecording = () => {
    console.log("Stop recording clicked")
    const recorder = mediaRecorder()
    console.log("Current recorder:", recorder)
    console.log("Current recorder state:", recorder?.state)
    console.log("Is recording signal:", isRecording())

    if (recorder && (recorder.state === 'recording' || recorder.state === 'paused')) {
      console.log("Stopping recorder...")
      recorder.stop()
    } else {
      console.log("No active recording to stop, current state:", recorder?.state)
      // Reset state in case it got out of sync
      setIsRecording(false)
      setMediaRecorder(null)
    }
  }

  const handlePresetChange = (event) => {
    setPreset(event.target.value)
  }

  const handleCustomWidthChange = (event) => {
    const width = parseInt(event.target.value) || 1920
    setCustomDimensions(width, customHeight())
  }

  const handleCustomHeightChange = (event) => {
    const height = parseInt(event.target.value) || 1080
    setCustomDimensions(customWidth(), height)
  }

  const handleFpsChange = (event) => {
    const fps = parseInt(event.target.value) || 30
    setRecordingFps(fps)
  }

  return (
    <>
      <style>{`
        :root {
          --theme-background: ${colorSchemes[currentTheme()]?.cssBackgroundColor};
          --theme-background-translucent: ${colorSchemes[currentTheme()]?.cssBackgroundColor}80;
          --theme-lava-color: ${colorSchemes[currentTheme()]?.cssLavaColor};
        }
      `}</style>

      <div id="background-widget" class="fixed inset-0 w-screen h-screen overflow-hidden">
        <Show
          when={!webglNotAvailable()}
          fallback={
            <div class="flex items-center justify-center h-full text-white text-xl">
              WebGL is not available in your browser
            </div>
          }
        >
          <ClientLavaBackground />
        </Show>

        {/* Logo overlay */}
        <Show when={isLogoVisible()}>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none w-[50vw] h-[50vh] flex items-center justify-center">
            <img src="/Logo.svg" alt="NixCon Logo" class="max-w-full max-h-full object-contain" />
          </div>
        </Show>

        {/* Information dialogue */}
        <Show when={showInfoDialogue()}>
          <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 glass !w-fit text-white px-6 py-3 rounded-lg shadow-lg border border-white/20 backdrop-blur-sm">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
              </svg>
              <span class="text-sm font-medium">Menu bar is located on the left side</span>
            </div>
          </div>
        </Show>

        {/* Sidebar trigger area - only visible when sidebar is hidden and not pinned */}
        <Show when={!isSidebarVisible() && !isPinned()}>
          <div
            class="absolute top-0 left-0 w-50 h-full bg-transparent hover:bg-white/10 transition-colors duration-200 cursor-pointer z-10"
            onMouseEnter={() => setIsSidebarVisible(true)}
            title="Hover to show toolbar"
          />
        </Show>

        {/* Main sidebar */}
        <div
          class={`text-white absolute top-0 h-full bg-white/50 transition-transform duration-300 ease-in-out ${(isSidebarVisible() || isPinned()) ? 'left-0' : '-left-full'
            }`}
          onMouseEnter={() => !isPinned() && setIsSidebarVisible(true)}
          onMouseLeave={() => !isPinned() && setIsSidebarVisible(false)}
        >
          <div class="glass p-4 h-full min-w-52">
            <div class="flex flex-col gap-4">
              {/* Pin/Unpin Button */}
              <div class="flex justify-end">
                <button
                  onClick={() => {
                    setIsPinned(!isPinned())
                    if (!isPinned()) {
                      setIsSidebarVisible(true)
                    }
                  }}
                  class={`p-2 rounded-lg transition-colors cursor-pointer ${isPinned()
                    ? "bg-purple-500/30 hover:bg-purple-500/40 text-purple-100"
                    : "bg-white/20 hover:bg-white/30"
                    }`}
                  aria-label={isPinned() ? "Unpin sidebar" : "Pin sidebar"}
                  title={isPinned() ? "Unpin sidebar (auto-hide)" : "Pin sidebar (always visible)"}
                >
                  {isPinned() ? <BsPinAngleFill size={16} /> : <BsPinAngle size={16} />}
                </button>
              </div>
              {/* Action Buttons */}
              <div class="flex gap-4 flex-col">
                <button
                  onClick={captureScreenshot}
                  class="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors cursor-pointer"
                  aria-label="Capture screenshot of canvas"
                  title="Download screenshot of the lava animation"
                >
                  <BsCamera size={16} />
                  <span class="text-sm">Screenshot</span>
                </button>

                <div class="flex flex-col gap-1">
                  <button
                    onClick={() => {
                      console.log("Button clicked, isRecording:", isRecording())
                      if (isRecording()) {
                        stopRecording()
                      } else {
                        startRecording()
                      }
                    }}
                    class={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer ${isRecording()
                      ? "bg-red-500/30 hover:bg-red-500/40 text-red-100"
                      : "bg-white/20 hover:bg-white/30"
                      }`}
                    aria-label={isRecording() ? "Stop recording canvas" : "Start recording canvas"}
                    title={isRecording() ? "Stop recording and download video" : "Start recording the lava animation"}
                  >
                    {isRecording() ? <BsStopCircle size={16} /> : <BsRecordCircle size={16} />}
                    <span class="text-sm">{isRecording() ? "Stop Recording" : "Record"}</span>
                  </button>
                  <div class="text-xs text-white/60 px-3">
                    Chromium only
                  </div>
                </div>


                {/* Fullscrene Toggle */}
                <button
                  onClick={() => toggleFullscreen("background-widget")}
                  class={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer ${isFullscreen()
                    ? "bg-purple-500/30 hover:bg-purple-500/40 text-purple-100"
                    : "bg-white/20 hover:bg-white/30"
                    }`}
                  aria-label={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen"}
                  title={isFullscreen() ? "Exit fullscreen mode" : "Enter fullscreen mode"}
                >
                  {isFullscreen() ? <BsFullscreenExit size={16} /> : <BsFullscreen size={16} />}
                  <span class="text-sm">{isFullscreen() ? "Exit Fullscreen" : "Fullscreen"}</span>
                </button>

                <Randomize />

                {/* Animation Toggle */}
                <button
                  onClick={toggleAnimationMode}
                  class={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer ${isAnimationOn()
                    ? "bg-green-500/30 hover:bg-green-500/40 text-green-100"
                    : "bg-white/20 hover:bg-white/30"
                    }`}
                  aria-label={isAnimationOn() ? "Pause animation" : "Play animation"}
                  title={isAnimationOn() ? "Pause the lava animation" : "Play the lava animation"}
                >
                  {isAnimationOn() ? <BsPause size={16} /> : <BsPlay size={16} />}
                  <span class="text-sm">{isAnimationOn() ? "Pause Animation" : "Play Animation"}</span>
                </button>
              </div>

              {/* Logo Toggle */}
              <button
                onClick={() => setIsLogoVisible(!isLogoVisible())}
                class={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors cursor-pointer ${isLogoVisible()
                  ? "bg-purple-500/30 hover:bg-purple-500/40 text-purple-100"
                  : "bg-white/20 hover:bg-white/30"
                  }`}
                aria-label={isLogoVisible() ? "Hide logo" : "Show logo"}
                title={isLogoVisible() ? "Hide the NixCon logo" : "Show the NixCon logo"}
              >
                {isLogoVisible() ? <BsEyeSlash size={16} /> : <BsEye size={16} />}
                <span class="text-sm">{isLogoVisible() ? "Hide Logo" : "Show Logo"}</span>
              </button>

              {/* Settings */}
              <div class="flex flex-col gap-4">
                {/* Canvas Size Controls */}
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <BsAspectRatio size={16} />
                    <span class="text-sm font-medium">Canvas Size:</span>
                    <span class="text-xs text-white/70">
                      {(() => {
                        const dims = getCurrentDimensions()
                        return `${dims.width} × ${dims.height}`
                      })()}
                    </span>
                  </div>

                  <div class="flex flex-wrap items-center gap-2">
                    <select
                      value={selectedPreset()}
                      onChange={handlePresetChange}
                      class="px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-sm border-none outline-none cursor-pointer"
                    >
                      <For each={Object.keys(PRESET_RESOLUTIONS)}>
                        {(preset) => (
                          <option value={preset} class="bg-gray-800 text-white">
                            {preset}
                          </option>
                        )}
                      </For>
                    </select>

                    <Show when={selectedPreset() === "Custom"}>
                      <div class="flex items-center gap-1">
                        <input
                          type="number"
                          value={customWidth()}
                          onChange={handleCustomWidthChange}
                          min="100"
                          max="7680"
                          class="w-16 px-1 py-1 bg-white/20 hover:bg-white/30 rounded text-sm text-center border-none outline-none"
                          placeholder="Width"
                        />
                        <span class="text-xs">×</span>
                        <input
                          type="number"
                          value={customHeight()}
                          onChange={handleCustomHeightChange}
                          min="100"
                          max="4320"
                          class="w-16 px-1 py-1 bg-white/20 hover:bg-white/30 rounded text-sm text-center border-none outline-none"
                          placeholder="Height"
                        />
                      </div>
                    </Show>
                  </div>
                </div>

                {/* Recording FPS Control */}
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <BsRecordCircle size={16} />
                    <span class="text-sm font-medium">Recording FPS:</span>
                  </div>

                  <input
                    type="number"
                    value={recordingFps()}
                    onChange={handleFpsChange}
                    min="15"
                    max="60"
                    class="w-16 px-2 py-1 bg-white/20 hover:bg-white/30 rounded text-sm text-center border-none outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}