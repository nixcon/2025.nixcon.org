import { startLavaAnimation } from "./lava/app"
import { createEffect } from 'solid-js';
import { useThemeStore, colorSchemes } from './stores/theme';
import { JSX } from "solid-js";
import {
  BsGeoAlt,
  BsTicket,
  BsFileText,
  BsQuestionCircle,
  BsChatDots,
  BsCalendar3Event
} from 'solid-icons/bs';

// Content section component
interface ContentSectionProps {
  id: string;
  title: string;
  children: JSX.Element;
}

function ContentSection(props: ContentSectionProps) {
  return (
    <section id={props.id} class="group">
      <div class="flex flex-col items-center gap-5">
        <h2 class="text-4xl font-bold font-serif flex items-center gap-2">
          {getIconForSection(props.id)}
          {props.title}
        </h2>
        {props.children}
      </div>
    </section>
  );
}

// Helper function to get the appropriate icon for each section
function getIconForSection(id: string) {
  switch (id) {
    case 'location':
      return <BsGeoAlt class="text-3xl" />;
    case 'tickets':
      return <BsTicket class="text-3xl" />;
    case 'coc':
      return <BsFileText class="text-3xl" />;
    case 'faq':
      return <BsQuestionCircle class="text-3xl" />;
    case 'chat':
      return <BsChatDots class="text-3xl" />;
    case 'schedule':
      return <BsCalendar3Event class="text-3xl" />;
    default:
      return null;
  }
}

function App() {
  const { currentTheme, cycleTheme } = useThemeStore();

  createEffect(() => {
    const cleanup = startLavaAnimation(colorSchemes[currentTheme()]);
    return cleanup;
  });

  return (
    <>
      {/* Background. Mounting point for lava animation */}
      <canvas id="background" class="fixed inset-0 w-screen h-screen" />

      {/* Theme toggle button */}
      <button
        onClick={cycleTheme}
        class="fixed top-4 right-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-2xl rounded-lg 
               hover:bg-white/20 transition-colors text-white font-medium"
      >
        Theme: {currentTheme()}
      </button>

      {/* Content */}
      <div class="relative min-h-screen text-white">
        {/* Hero section */}
        <section class="flex flex-col gap-5 items-center py-12 pt-24 md:py-20 md:pt-40 px-4">
          <h1 class="font-bold text-5xl md:text-6xl lg:text-8xl font-serif text-white text-center">NixCon 2025</h1>
          <p class="text-sm italic text-white/70">(Logo coming soon)</p>
          <div class="flex flex-col gap-2 items-center text-lg md:text-2xl font-bold tracking-tight">
            <p class="flex items-center gap-2">
              <span class="text-2xl md:text-3xl">🗺️</span>
              Rapperswil-Jona, Switzerland
            </p>
            <p class="flex items-center gap-2">
              <span class="text-2xl md:text-3xl">🗓️</span>
              September 5-7, 2025
            </p>
          </div>

          {/* Nav */}
          <nav class="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 font-bold text-lg md:text-xl px-2">
            <a href="#location" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsGeoAlt /> Location
            </a>
            <a href="#tickets" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsTicket /> Tickets
            </a>
            <a href="#coc" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsFileText /> CoC
            </a>
            <a href="#faq" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsQuestionCircle /> FAQ
            </a>
            <a href="#chat" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsChatDots /> Chat
            </a>
            <a href="#schedule" class="hover:text-gray-300 transition-colors flex items-center gap-1">
              <BsCalendar3Event /> Schedule
            </a>
          </nav>

        </section>

        {/* Glass container for the whole page content */}
        <div class="max-w-3xl mx-auto p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl glass-container-with-texture">

          {/* Content sections */}
          <div class="w-full mx-auto space-y-12 px-4">
            <ContentSection id="location" title="Location">
              <div class="flex flex-col items-center gap-3">
                <p class="text-center">Join us at OST in Rapperswil-Jona, Switzerland for NixCon 2025!</p>
                <a
                  href="https://www.openstreetmap.org/way/34754484?mlat=47.22318649291992&mlon=8.81653368473053#map=19/47.223186/8.816534"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
                >
                  View on OpenStreetMap
                </a>
              </div>
            </ContentSection>

            <hr class="h-[1px] w-full border-white/10" />

            <ContentSection id="tickets" title="Tickets">
              <p class="text-center">Ticket information coming soon!</p>
            </ContentSection>

            <hr class="h-[1px] w-full border-white/10" />

            <ContentSection id="coc" title="Code of Conduct">
              <div class="flex flex-col items-center gap-3">
                <p class="text-center">Our community guidelines and code of conduct ensure a respectful and inclusive environment for all attendees.</p>
                <a
                  href="/nix-con-2025/coc.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
                >
                  Download Code of Conduct
                </a>
              </div>
            </ContentSection>

            <hr class="h-[1px] w-full border-white/10" />

            <ContentSection id="faq" title="FAQ">
              <p class="text-center">Frequently asked questions will be posted here.</p>
            </ContentSection>

            <hr class="h-[1px] w-full border-white/10" />

            <ContentSection id="chat" title="Chat">
              <div class="flex flex-col items-center gap-3">
                <p class="text-center">Join our community chat to connect with other attendees!</p>
                <p class="text-center">For everything NixCon-related and announcements there is a Matrix room you can join at #nixcon:matrix.org</p>
                <a
                  href="https://matrix.to/#/#nixcon:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
                >
                  Join Matrix Room
                </a>
              </div>
            </ContentSection>

            <hr class="h-[1px] w-full border-white/10" />

            <ContentSection id="schedule" title="Schedule">
              <p class="text-center">Conference schedule will be announced soon.</p>
            </ContentSection>
          </div>

        </div>

        <div class="h-20"></div>
      </div>
    </>
  )
}

export default App
