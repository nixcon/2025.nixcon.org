import { JSX, createSignal } from "solid-js";
import { A, useLocation } from "@solidjs/router";
import {
  BsHouseFill,
  BsPeopleFill,
  BsList,
  BsX,
} from 'solid-icons/bs';
import { FaSolidHotel } from 'solid-icons/fa'
import { BiSolidHeartCircle } from 'solid-icons/bi'

export default function MobileMenu(): JSX.Element {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === `/2025.nixcon.org${path}`;
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen());
  };

  return (
    <div class="fixed top-2 right-4 z-50 md:hidden">
      {/* Burger Button */}
      <button
        onClick={toggleMenu}
        class="p-2 rounded-full transition-colors text-white"
        aria-label="Toggle menu"
      >
        {isOpen() ? <BsX size={35} /> : <BsList size={35} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen() && (
        <div class="absolute top-12 right-0 w-56 burger-menu">
          <div class="glass p-4 rounded-lg">
            <nav class="flex flex-col space-y-4">
              {/* Home */}
              <A
                href="/"
                class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center gap-2 ${isActive('/') ? 'underline' : ''}`}
                aria-label="Home"
                onClick={() => setIsOpen(false)}
              >
                <BsHouseFill />
                NixCon 2025
              </A>

              <div class="h-px w-full bg-white/20"></div>

              {/* Sponsorship */}
              <A
                href="/sponsorship"
                class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center gap-2 ${isActive('/sponsorship') ? 'underline' : ''}`}
                aria-label="Sponsorship"
                onClick={() => setIsOpen(false)}
              >
                <BiSolidHeartCircle />
                Sponsorship
              </A>

              {/* Hotels */}
              <A
                href="/hotels"
                class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center gap-2 ${isActive('/hotels') ? 'underline' : ''}`}
                aria-label="Hotels"
                onClick={() => setIsOpen(false)}
              >
                <FaSolidHotel />
                Hotels
              </A>

              {/* Organizers */}
              <A
                href="/organizers"
                class={`text-white hover:text-white/80 transition-all duration-75 font-bold text-lg flex items-center gap-2 ${isActive('/organizers') ? 'underline' : ''}`}
                aria-label="Organizers"
                onClick={() => setIsOpen(false)}
              >
                <BsPeopleFill />
                Organizers
              </A>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
