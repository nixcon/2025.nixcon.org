import { A, useLocation } from "@solidjs/router"
import { createSignal, onCleanup, onMount } from "solid-js"
import { LogoMenu } from "./Logo"
import { ButtonLink } from "./Ui"

/**
 * Custom hook to track scroll position
 * Only runs on the client side due to onMount
 *
 * @param {number} threshold Scroll position threshold in pixels
 * @returns {() => boolean} Signal that returns true when scrolled past threshold
 */
export function useScrollPosition(threshold = 0) {
  const [scrolled, setScrolled] = createSignal(false)

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold)
    }

    window.addEventListener("scroll", handleScroll)
    // Check initial scroll position
    handleScroll()

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll)
    })
  })

  return scrolled
}

export default function TopMenu() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  const scrolled = useScrollPosition(120)

  return (
    <div class="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <div class="w-full">
        <div
          class={`w-full flex justify-between items-center gap-10 pl-6 pr-5 h-[72px] ${scrolled() ? "glass" : "border border-transparent"
            }`}
        >
          {/* Navigation Links */}
          {/* Home with Logo */}
          <A
            href="/"
            class={`text-white hover:underline transition-all duration-75 ${isActive("/") ? "underline" : ""}`}
            aria-label="Home"
          >
            <div class="h-6">
              <LogoMenu />
            </div>
          </A>

          <nav class="flex gap-10 ml-auto">
            {/* Schedule */}
            <A
              href="/schedule"
              class={`text-white hover:underline transition-all duration-75 font-bold text-lg ${isActive("/schedule") ? "underline" : ""
                }`}
              aria-label="Schedule"
            >
              Schedule
            </A>

            {/* Live */}
            <A
              href="/live"
              class={`text-white hover:underline transition-all duration-75 font-bold text-lg ${isActive("/live") ? "underline" : ""
                }`}
              aria-label="Live"
            >
              Live
            </A>

            {/* FAQ */}
            <A
              href="/faq"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg ${isActive("/faq") ? "underline" : ""
                }`}
              aria-label="FAQ"
            >
              FAQ
            </A>

            {/* Organizers */}
            <A
              href="/organizers"
              class={`text-white hover:underline transition-all duration-75 font-bold text-lg ${isActive("/organizers") ? "underline" : ""
                }`}
              aria-label="Organizers"
            >
              Organizers
            </A>
          </nav>

          <ButtonLink href="https://tickets.nixcon.org/2025/" aria-label="Tickets" target="_blank">
            GET TICKETS
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
