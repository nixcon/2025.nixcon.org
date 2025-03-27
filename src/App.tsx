import { startLavaAnimation } from "./lava/app"
import { createEffect } from 'solid-js';
import { useThemeStore, colorSchemes } from './stores/theme';
import { JSX } from "solid-js";

// Content section component
interface ContentSectionProps {
  id: string;
  title: string;
  children: JSX.Element;
}

function ContentSection(props: ContentSectionProps) {
  return (
    <section id={props.id} class="group">
      <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 md:p-8 
                  transition-all duration-300 hover:bg-white/15 hover:shadow-xl hover:scale-[1.02]">
        <div class="flex flex-col items-center gap-5">
          <h2 class="text-4xl font-bold font-serif">{props.title}</h2>
          {props.children}
          <span class="text-4xl opacity-60 font-bold">~</span>
        </div>
      </div>
    </section>
  );
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
        class="fixed top-4 right-4 z-10 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg 
               hover:bg-white/20 transition-colors text-white font-medium"
      >
        Theme: {currentTheme()}
      </button>

      {/* Content */}
      <div class="relative min-h-screen text-white">
        {/* Hero section */}
        <section class="flex flex-col gap-5 items-center py-12 pt-24 md:py-20 md:pt-40 px-4">
          <h1 class="font-bold text-5xl md:text-6xl lg:text-8xl font-serif text-white text-center">NixCon 2025</h1>
          <div class="flex flex-col gap-2 items-center text-lg md:text-2xl font-bold tracking-tight">
            <p class="flex items-center gap-2">
              <span class="text-2xl md:text-3xl">🗺️</span>
              Rapperswil-Jona, Switzerland
            </p>
            <p class="flex items-center gap-2">
              <span class="text-2xl md:text-3xl">🗓️</span>
              September 15-17, 2025
            </p>
          </div>

          <nav class="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 font-bold text-lg md:text-xl px-2">
            <a href="#location" class="hover:text-gray-300 transition-colors">Location</a>
            <a href="#tickets" class="hover:text-gray-300 transition-colors">Tickets</a>
            <a href="#coc" class="hover:text-gray-300 transition-colors">CoC</a>
            <a href="#faq" class="hover:text-gray-300 transition-colors">FAQ</a>
            <a href="#chat" class="hover:text-gray-300 transition-colors">Chat</a>
            <a href="#schedule" class="hover:text-gray-300 transition-colors">Schedule</a>
          </nav>
        </section>

        {/* Content sections */}
        <div class="w-full max-w-md mx-auto space-y-20 md:space-y-32 pb-16 px-4">
          <ContentSection id="location" title="Location">
            <p class="text-center">Join us in Rapperswil-Jona, Switzerland for NixCon 2025!</p>
          </ContentSection>

          <ContentSection id="tickets" title="Tickets">
            <p class="text-center">Ticket information coming soon!</p>
          </ContentSection>

          <ContentSection id="coc" title="Code of Conduct">
            <p class="text-center">Our community guidelines and code of conduct will be available soon.</p>
          </ContentSection>

          <ContentSection id="faq" title="FAQ">
            <p class="text-center">Frequently asked questions will be posted here.</p>
          </ContentSection>

          <ContentSection id="chat" title="Chat">
            <p class="text-center">Join our community chat to connect with other attendees!</p>
          </ContentSection>

          <ContentSection id="schedule" title="Schedule">
            <p class="text-center">Conference schedule will be announced soon.</p>
          </ContentSection>
        </div>


      </div>
    </>
  )
}

export default App
