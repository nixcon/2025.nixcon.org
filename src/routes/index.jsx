import { A } from "@solidjs/router";
import { createEffect, onMount } from "solid-js";
import { useAnimationStore } from "~/stores/animation";
import {
  BsTicket,
  BsFileText,
  BsQuestionCircle,
  BsChatDots,
  BsCalendar3Event,
  BsSnow,
  BsGeoFill,
  BsTicketFill,
  BsFileTextFill,
  BsQuestionCircleFill,
  BsChatDotsFill,
  BsCalendarEventFill,
  BsGeo,
  BsChevronDown,
  BsPlayFill,
  BsPauseFill
} from 'solid-icons/bs';
import { Logo } from "~/components/Logo";
import PageLayout from "~/components/PageLayout";

// Content section component
function ContentSection(props) {
  return (
    <section id={props.id} class="group">
      <div class="flex flex-col items-center gap-5">
        <h2 class="text-2xl md:text-4xl font-bold flex items-center gap-2">
          {getIconForSection(props.id)}
          {props.title}
        </h2>
        {props.children}
      </div>
    </section>
  );
}

// Helper function to get the appropriate icon for each section
function getIconForSection(id) {
  switch (id) {
    case 'location':
      return <BsGeoFill class="text-xl md:text-3xl" />; // Using filled pin icon for consistency with hero section
    case 'tickets':
      return <BsTicketFill class="text-xl md:text-3xl" />; // Using filled version
    case 'coc':
      return <BsFileTextFill class="text-xl md:text-3xl" />; // Using filled version
    case 'faq':
      return <BsQuestionCircleFill class="text-xl md:text-3xl" />; // Using filled version
    case 'chat':
      return <BsChatDotsFill class="text-xl md:text-3xl" />; // Using filled version
    case 'schedule':
      return <BsCalendarEventFill class="text-xl md:text-3xl" />; // Using filled version
    default:
      return null;
  }
}

export default function Home() {
  const { isAnimationOn, toggleAnimationMode } = useAnimationStore();

  // Handle toggle button click
  const handleToggleClick = () => {
    toggleAnimationMode();
  };

  return (
    <div class="relative min-h-svh text-white">
      {/* Hero section */}
      <section class="flex flex-col gap-5 items-center px-10 h-svh justify-center relative pt-10 pb-2">
        <div class="flex h-full flex-col items-center justify-center pt-10">
          <div class="h-[240px] sm:h-[360px] md:h-[400px] flex">
            <Logo />
          </div>
          <button
            onClick={handleToggleClick}
            class="my-8 p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white flex items-center justify-center"
            aria-label="Toggle animation"
          >
            {!isAnimationOn() ? <BsPlayFill size={24} /> : <BsPauseFill size={24} />}
          </button>
        </div>

        <div class="flex flex-row flex-wrap justify-center gap-4 md:gap-10 text-lg md:text-2xl font-medium">
          <p class="flex items-center gap-2 md:gap-3">
            <span class="text-base md:text-xl bg-white/10 p-1.5 md:p-2 rounded-full"><BsSnow /></span>
            <span>NixCon 2025</span>
          </p>
          <p class="flex items-center gap-2 md:gap-3">
            <span class="text-base md:text-xl bg-white/10 p-1.5 md:p-2 rounded-full"><BsGeoFill /></span>
            <span>Switzerland</span>
          </p>
          <p class="flex items-center gap-2 md:gap-3">
            <span class="text-base md:text-xl bg-white/10 p-1.5 md:p-2 rounded-full"><BsCalendarEventFill /></span>
            <span>September 5-7, 2025</span>
          </p>
        </div>

        {/* Arrow indicator */}
        <div class="">
          <a href="#tickets" class="flex flex-col items-center text-white hover:text-white">
            <div class="bg-white/10 p-1.5 md:p-2 rounded-full">
              <BsChevronDown size={24} class="md:hidden translate-y-[1px]" />
              <BsChevronDown size={28} class="hidden md:block translate-y-[1px]" />
            </div>
          </a>
        </div>
      </section>

      {/* Nav - Reordered by user interest frequency */}
      <nav class="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 md:mt-8 font-medium text-lg md:text-xl px-2 pb-4">
        <a href="#tickets" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsTicket /></span>
          <span class="hidden group-hover:block"><BsTicketFill /></span>
          Tickets
        </a>
        <a href="#schedule" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsCalendar3Event /></span>
          <span class="hidden group-hover:block"><BsCalendarEventFill /></span>
          Schedule
        </a>
        <a href="#location" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsGeo /></span>
          <span class="hidden group-hover:block"><BsGeoFill /></span>
          Location
        </a>
        <a href="#chat" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsChatDots /></span>
          <span class="hidden group-hover:block"><BsChatDotsFill /></span>
          Chat
        </a>
        <a href="#faq" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsQuestionCircle /></span>
          <span class="hidden group-hover:block"><BsQuestionCircleFill /></span>
          FAQ
        </a>
        <a href="#coc" class="group flex items-center gap-2 uppercase hover:underline">
          <span class="block group-hover:hidden"><BsFileText /></span>
          <span class="hidden group-hover:block"><BsFileTextFill /></span>
          CoC
        </a>
      </nav>

      {/* Apply PageLayout to the main content with reduced spacing */}
      <PageLayout reducedSpacing={true}>
        {/* Content sections - Reordered by user interest frequency */}
        <div class="w-full mx-auto space-y-12 px-4">
          {/* Tickets - Most important section */}
          <ContentSection id="tickets" title="Tickets">
            <div class="">
              <p class="text-center text-lg mb-4">Ticket information coming soon!</p>
              <div class="flex justify-center">
                <button disabled class="px-6 py-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-bold opacity-70 cursor-not-allowed">
                  Get Your Tickets
                </button>
              </div>
            </div>
          </ContentSection>

          <hr class="h-[1px] w-full border-white/10" />

          {/* Schedule */}
          <ContentSection id="schedule" title="Schedule">
            <div class="w-full max-w-md">
              <p class="text-center text-lg">Conference schedule will be announced soon.</p>
            </div>
          </ContentSection>

          <hr class="h-[1px] w-full border-white/10" />

          {/* Location */}
          <ContentSection id="location" title="Location">
            <div class="flex flex-col items-center gap-3 w-full max-w-md">
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

          {/* Chat */}
          <ContentSection id="chat" title="Chat">
            <div class="flex flex-col items-center gap-3 w-full max-w-md">
              <p class="text-center">Join our community chat to connect with other attendees! The Matrix room is the place to go for announcements and everything NixCon-related.</p>
              <a
                href="https://matrix.to/#/#nixcon:matrix.org"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
              >
                Join Matrix room
              </a>
              <p class="text-center mt-4">If you want to support the event as a helping hand on site, we are happy to hear from you in the dedicated Matrix orga room. Thanks!</p>
              <a
                href="https://matrix.to/#/#nixcon2025-orga:lassul.us"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
              >
                Join Matrix orga room
              </a>
            </div>
          </ContentSection>

          <hr class="h-[1px] w-full border-white/10" />

          {/* FAQ */}
          <ContentSection id="faq" title="FAQ">
            <div class="w-full max-w-md">
              <p class="text-center">Frequently asked questions will be posted here.</p>
            </div>
          </ContentSection>

          <hr class="h-[1px] w-full border-white/10" />

          {/* Code of Conduct */}
          <ContentSection id="coc" title="Code of Conduct">
            <div class="flex flex-col items-center gap-3 w-full max-w-md">
              <p class="text-center">Our community guidelines and code of conduct ensure a respectful and inclusive environment for all attendees.</p>
              <a
                href="/coc.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="px-4 py-2 bg-white/10 hover:bg-white/20 transition-colors rounded-lg text-white"
              >
                Download Code of Conduct
              </a>
            </div>
          </ContentSection>
        </div>
      </PageLayout>

      <div class="h-20"></div>
    </div>
  );
}
