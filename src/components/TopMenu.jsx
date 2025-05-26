import { createSignal, onMount, onCleanup } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import { LogoMenu } from "./Logo";

/**
 * Custom hook to track scroll position
 * Only runs on the client side due to onMount
 *
 * @param {number} threshold Scroll position threshold in pixels
 * @returns {() => boolean} Signal that returns true when scrolled past threshold
 */
function useScrollPosition(threshold = 0) {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return scrolled;
}

export default function TopMenu() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const scrolled = useScrollPosition(120);

  return (
    <div class="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <div class="max-w-3xl mx-auto p-2.5">
        <div
          class={`flex items-center justify-center h-16 ${
            scrolled() ? "glass" : ""
          }`}
        >
          {/* Navigation Links */}
          <nav class="flex items-center space-x-10">
            {/* Home with Logo */}
            <A
              href="/"
              class={`text-white hover:text-white/80 transition-all duration-75 ${
                isActive("/") ? "underline" : ""
              }`}
              aria-label="Home"
            >
              <div class="h-6">
                <LogoMenu />
              </div>
            </A>

            {/* Sponsorship */}
            <A
              href="/sponsorship"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${
                isActive("/sponsorship") ? "underline" : ""
              }`}
              aria-label="Sponsorship"
            >
              Sponsorship
            </A>

            {/* Accommodation */}
            <A
              href="/hotels"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${
                isActive("/hotels") ? "underline" : ""
              }`}
              aria-label="Accommodation"
            >
              Accommodation
            </A>

            {/* Organizers */}
            <A
              href="/organizers"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${
                isActive("/organizers") ? "underline" : ""
              }`}
              aria-label="Organizers"
            >
              Organizers
            </A>
          </nav>
        </div>
      </div>
    </div>
  );
}
