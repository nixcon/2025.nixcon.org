import { BsFullscreen } from "@aminya/solid-icons/bs/BsFullscreen"
import { BsFullscreenExit } from "@aminya/solid-icons/bs/BsFullscreenExit"
import { A, Router } from "@solidjs/router"
import { clientOnly } from "@solidjs/start"
import { FileRoutes } from "@solidjs/start/router"
import { Show, Suspense } from "solid-js"
import MobileMenu from "~/components/MobileMenu"
import SponsorsDisplay from "~/components/SponsorsDisplay" // Added import
import TopMenu from "~/components/TopMenu"
import { useFullscreenStore } from "~/stores/fullscreen"
import { useAnimationStore } from "~/stores/animation"
import { colorSchemes, useThemeStore } from "~/stores/theme"
import "./app.css"

// Create client-only versions of components that need browser APIs
const ClientLavaBackground = clientOnly(() => import("~/components/LavaBackground"))

const ClientAnimationModeToggle = clientOnly(() => import("~/components/AnimationModeToggle"))

export default function App() {
  const { isFullscreen, toggleFullscreen } = useFullscreenStore()
  const { currentTheme } = useThemeStore()
  const { webglNotAvailable } = useAnimationStore()

  return (
    <>
      <style>{`
        :root {
          --theme-background: ${colorSchemes[currentTheme()]?.cssBackgroundColor};
          --theme-background-translucent: ${colorSchemes[currentTheme()]?.cssBackgroundColor}80;
          --theme-lava-color: ${colorSchemes[currentTheme()]?.cssLavaColor};
        }
      `}</style>
      {/* Background. Mounting point for lava animation - only rendered on client */}
      {/* <ClientLavaBackground /> */}

      {/* Fullscreen button - desktop only */}
      {/* <button
        onClick={() => toggleFullscreen("background-container")}
        class="fixed top-4 right-4 z-[9999] p-2 text-white/0 hover:text-white/80 transition-opacity hidden md:block cursor-pointer"
        aria-label={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
        title={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
      >
        {isFullscreen() ? <BsFullscreenExit size={20} /> : <BsFullscreen size={20} />}
      </button> */}

      <Router
        root={(props) => {
          if (props.location.pathname.startsWith("/background")) {
            return <Suspense>{props.children}</Suspense>
          }


          return (
            <>
              <ClientLavaBackground />

              {/* Menus */}
              <TopMenu />
              <MobileMenu />

              {/* Routes */}
              <Suspense>{props.children}</Suspense>

              {/* Sponsors Display */}
              <SponsorsDisplay />

              {/* Footer */}
              <footer class="w-full py-6 my-6 relative">
                <div class="max-w-3xl mx-auto px-6 py-4 rounded-lg flex flex-col md:flex-row items-start justify-between gap-4">
                  {/* Animation Controls */}
                  <Show when={!webglNotAvailable()}>
                    <div class="flex flex-col items-start gap-4">
                      <ClientAnimationModeToggle />
                      <A
                        href="/background"
                        class="text-white/80 hover:text-white transition-colors text-base font-medium"
                        aria-label="Background"
                        target="_blank"
                      >
                        Background
                      </A>
                    </div>
                    <div class="h-4 w-px bg-white/20 hidden md:block"></div>
                  </Show>

                  {/* Legal Links */}
                  <div class="flex flex-col items-start gap-4">
                    <A
                      href="/legal"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="Legal disclosure"
                    >
                      Legal disclosure
                    </A>
                    <A
                      href="/privacy"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="Privacy policy"
                    >
                      Privacy Policy
                    </A>
                    <A
                      href="/coc"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="Code of Conduct"
                    >
                      Code of Conduct
                    </A>
                  </div>

                  {/* Sponsorship & Accommodation */}
                  <div class="h-4 w-px bg-white/20 hidden md:block"></div>
                  <div class="flex flex-col items-start gap-4">
                    <A
                      href="/sponsorship"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="Sponsorship"
                    >
                      Sponsorship
                    </A>
                    <A
                      href="/hotels"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="Accommodation"
                    >
                      Accommodation
                    </A>
                  </div>

                  {/* External Links */}
                  <div class="h-4 w-px bg-white/20 hidden md:block"></div>
                  <div class="flex flex-col items-start">
                    <a
                      href="https://github.com/nixcon/2025.nixcon.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white/80 hover:text-white transition-colors text-base font-medium"
                      aria-label="GitHub Repository"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </footer>
            </>
          )
        }}
      >
        <FileRoutes />
      </Router>
    </>
  )
}
