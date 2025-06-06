import { useLocation } from "@solidjs/router";
import { A } from "@solidjs/router";
import { BsHouseFill } from "@aminya/solid-icons/bs/BsHouseFill";
import { BsPeopleFill } from "@aminya/solid-icons/bs/BsPeopleFill";
import { BsFileTextFill } from "@aminya/solid-icons/bs/BsFileTextFill";
import { BsList } from "@aminya/solid-icons/bs/BsList";
import { BsX } from "@aminya/solid-icons/bs/BsX";
import { FaSolidHotel } from "@aminya/solid-icons/fa/FaSolidHotel";
import { BiSolidHeartCircle } from "@aminya/solid-icons/bi/BiSolidHeartCircle";
import { LogoMenu } from "./Logo";

export default function MobileMenu() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div class="fixed top-0 left-0 right-0 z-50 md:hidden">
      {/* Checkbox for the toggle - placed at the top level */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        class="hidden peer"
        aria-label="Toggle menu"
      />

      {/* Header with background */}
      <div class="glass !rounded-none !px-4 !py-2 flex justify-between items-center">
        {/* Logo on the left */}
        <A href="/" aria-label="Home">
          <div class="h-6">
            <LogoMenu />
          </div>
        </A>

        {/* Burger Button on the right - using checkbox hack */}
        <label
          for="mobile-menu-toggle"
          class="text-white p-2 cursor-pointer block"
          aria-label="Toggle menu"
        >
          <BsList size={30} class="peer-checked:hidden" />
          <BsX size={30} class="hidden peer-checked:block" />
        </label>
      </div>

      {/* Mobile Menu Dropdown - visible when checkbox is checked */}
      <div class="absolute top-full left-0 right-0 burger-menu hidden peer-checked:block">
        <div class="glass !p-4 !rounded-none">
          <nav class="flex flex-col space-y-4">
            {/* Home */}
            <A
              href="/"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center justify-end gap-2 ${isActive("/") ? "underline" : ""
                }`}
              aria-label="Home"
              onClick={() => {
                document.getElementById("mobile-menu-toggle").checked = false;
              }}
            >
              <BsHouseFill />
              Home
            </A>

            {/* Sponsorship */}
            <A
              href="/sponsorship"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center justify-end gap-2 ${isActive("/sponsorship") ? "underline" : ""
                }`}
              aria-label="Sponsorship"
              onClick={() => {
                document.getElementById("mobile-menu-toggle").checked = false;
              }}
            >
              <BiSolidHeartCircle />
              Sponsorship
            </A>

            {/* Accommodation */}
            <A
              href="/hotels"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center justify-end gap-2 ${isActive("/hotels") ? "underline" : ""
                }`}
              aria-label="Accommodation"
              onClick={() => {
                document.getElementById("mobile-menu-toggle").checked = false;
              }}
            >
              <FaSolidHotel />
              Accommodation
            </A>

            {/* Organizers */}
            <A
              href="/organizers"
              class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center justify-end gap-2 ${isActive("/organizers") ? "underline" : ""
                }`}
              aria-label="Organizers"
              onClick={() => {
                document.getElementById("mobile-menu-toggle").checked = false;
              }}
            >
              <BsPeopleFill />
              Organizers
            </A>

          </nav>
        </div>
      </div>
    </div>
  );
}
