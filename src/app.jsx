import { Router, A } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { useThemeStore } from "~/stores/theme";
import { useAnimationStore } from "~/stores/animation";
import { useFullscreenStore } from "~/stores/fullscreen";
import { BsFullscreen } from '@aminya/solid-icons/bs/BsFullscreen';
import { BsFullscreenExit } from '@aminya/solid-icons/bs/BsFullscreenExit';
import TopMenu from "~/components/TopMenu";
import MobileMenu from "~/components/MobileMenu";
import LavaBackground from "~/components/LavaBackground";
import SponsorsDisplay from "~/components/SponsorsDisplay"; // Added import
import "./app.css";

// Create client-only versions of components that need browser APIs
const ClientLavaBackground = clientOnly(() =>
  import("~/components/LavaBackground")
);

const ClientAnimationModeToggle = clientOnly(() =>
  import("~/components/AnimationModeToggle")
);

export default function App() {
  const { isFullscreen, toggleFullscreen } = useFullscreenStore();
  return (
    <>
      {/* Background. Mounting point for lava animation - only rendered on client */}
      <ClientLavaBackground />

      {/* Fullscreen button - desktop only */}
      <button
        onClick={() => toggleFullscreen('background-container')}
        class="fixed top-4 right-4 z-[9999] p-2 text-white/0 hover:text-white/80 transition-opacity hidden md:block cursor-pointer"
        aria-label={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
        title={isFullscreen() ? "Exit fullscreen" : "Enter fullscreen and start animation"}
      >
        {isFullscreen() ? <BsFullscreenExit size={20} /> : <BsFullscreen size={20} />}
      </button>

      <Router
        root={(props) => (
          <>
            {/* Menus */}
            <TopMenu />
            <MobileMenu />

            {/* Routes */}
            <Suspense>{props.children}</Suspense>

            {/* Sponsors Display */}
            <SponsorsDisplay />

            {/* Footer */}
            <footer class="w-full py-6 my-6 text-center relative">
              <div class="max-w-3xl mx-auto px-6 py-4 rounded-lg flex flex-col md:flex-row items-center justify-center gap-4">
                <ClientAnimationModeToggle />
                <div class="h-4 w-px bg-white/20 hidden md:block"></div>
                <A
                  href="/legal"
                  class="text-white/80 hover:text-white transition-colors text-base font-medium"
                  aria-label="Legal disclosure"
                >
                  Legal disclosure
                </A>
                <div class="h-4 w-px bg-white/20 hidden md:block"></div>
                <A
                  href="/privacy"
                  class="text-white/80 hover:text-white transition-colors text-base font-medium"
                  aria-label="Privacy policy"
                >
                  Privacy Policy
                </A>
              </div>
            </footer>
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </>
  );
}
