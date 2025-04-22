import { Router, A } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { clientOnly } from "@solidjs/start";
import { useThemeStore } from "~/stores/theme";
import TopMenu from "~/components/TopMenu";
import MobileMenu from "~/components/MobileMenu";
import LavaBackground from "~/components/LavaBackground";
import "./app.css";

// Create a client-only version of LavaBackground
const ClientLavaBackground = clientOnly(() =>
  import("~/components/LavaBackground")
);

export default function App() {
  return (
    <>
      {/* Background. Mounting point for lava animation - only rendered on client */}
      <ClientLavaBackground />

      <Router
        base="/2025.nixcon.org"
        root={(props) => (
          <>
            {/* Menus */}
            <TopMenu />
            <MobileMenu />

            {/* Routes */}
            <Suspense>{props.children}</Suspense>

            {/* Footer */}
            <footer class="w-full py-6 my-6 text-center relative">
              <div class="max-w-3xl mx-auto px-6 py-4 rounded-lg">
                <A
                  href="/legal"
                  class="text-white/80 hover:text-white transition-colors text-base font-medium"
                  aria-label="Legal disclosure"
                >
                  Legal disclosure
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
