import { Router, A } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, createSignal, onMount, onCleanup } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { useThemeStore } from "~/stores/theme";
import { useAnimationStore } from "~/stores/animation";
import { BsFullscreen, BsFullscreenExit } from 'solid-icons/bs';
import TopMenu from "~/components/TopMenu";
import MobileMenu from "~/components/MobileMenu";
import LavaBackground from "~/components/LavaBackground";
import "./app.css";

// Create client-only versions of components that need browser APIs
const ClientLavaBackground = clientOnly(() =>
  import("~/components/LavaBackground")
);

const ClientAnimationModeToggle = clientOnly(() =>
  import("~/components/AnimationModeToggle")
);

export default function App() {
  const [isFullscreen, setIsFullscreen] = createSignal(false);
  const { isAnimationOn, setIsAnimationOn } = useAnimationStore();

  const toggleFullscreen = () => {
    const canvas = document.getElementById('background');
    if (!canvas) return;

    if (!document.fullscreenElement) {
      canvas.requestFullscreen().then(() => {
        setIsFullscreen(true);
        // Ensure animation is on when entering fullscreen
        if (!isAnimationOn()) {
          setIsAnimationOn(true);
        }
      }).catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(err => {
        console.error(`Error attempting to exit fullscreen: ${err.message}`);
      });
    }
  };

  // Listen for fullscreen change events
  onMount(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);

    onCleanup(() => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    });
  });
  return (
    <>
      {/* Background. Mounting point for lava animation - only rendered on client */}
      <ClientLavaBackground />

      {/* Fullscreen button - desktop only */}
      <button
        onClick={toggleFullscreen}
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
