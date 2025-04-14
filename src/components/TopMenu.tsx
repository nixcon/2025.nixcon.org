import { JSX, createSignal, onMount, onCleanup } from "solid-js";
import { A, useLocation } from "@solidjs/router";

export default function TopMenu(): JSX.Element {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === `/2025.nixcon.org${path}`;
  const [scrolled, setScrolled] = createSignal(false);

  const handleScroll = () => {
    const threshold = 120
    setScrolled(window.scrollY > threshold);
  };


  onMount(() => {
    window.addEventListener('scroll', handleScroll);
    // Check initial scroll position
    handleScroll();
  });

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div class="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <div class="max-w-3xl mx-auto p-2.5">
        <div class={`flex items-center justify-center h-16 ${scrolled() ? 'glass' : ''}`}>
          {/* Navigation Links */}
          <nav class="flex items-center space-x-10">
            {/* Home */}
            <A
              href="/"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${isActive('/') ? 'underline' : ''}`}
              aria-label="Home"
            >
              NixCon 2025
            </A>

            <div class="text-white">|</div>


            {/* Sponsorship */}
            <A
              href="/sponsorship"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${isActive('/sponsorship') ? 'underline' : ''}`}
              aria-label="Sponsorship"
            >
              Sponsorship
            </A>

            {/* Hotels */}
            <A
              href="/hotels"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${isActive('/hotels') ? 'underline' : ''}`}
              aria-label="Hotels"
            >
              Hotels
            </A>

            {/* Organizers */}
            <A
              href="/organizers"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${isActive('/organizers') ? 'underline' : ''}`}
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
