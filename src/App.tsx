import { startLavaAnimation } from "./lava/app"
import { createEffect } from 'solid-js';

function App() {
  createEffect(() => startLavaAnimation())

  return (
    <>
      {/* Background. Mounting point for lava animation */}
      <canvas id="background" class="fixed inset-0 w-screen h-screen" />

      {/* Content */}
      <div class="relative min-h-screen text-white">
        {/* Hero section */}
        <section class="flex flex-col gap-5 items-center py-20 pt-40">
          <h1 class="font-bold text-6xl lg:text-8xl font-serif text-white">NixCon 2025</h1>
          <p class="text-3xl">📍 Rapperswil-Jona, 🇨🇭</p>

          <nav class="flex flex-wrap gap-6 mt-8 font-bold text-xl">
            <a href="#location" class="hover:text-gray-300 transition-colors">Location</a>
            <a href="#tickets" class="hover:text-gray-300 transition-colors">Tickets</a>
            <a href="#coc" class="hover:text-gray-300 transition-colors">CoC</a>
            <a href="#faq" class="hover:text-gray-300 transition-colors">FAQ</a>
            <a href="#chat" class="hover:text-gray-300 transition-colors">Chat</a>
            <a href="#schedule" class="hover:text-gray-300 transition-colors">Schedule</a>
          </nav>
        </section>

        {/* Content sections */}
        <div class="w-full max-w-md mx-auto space-y-32 pb-16">
          <section id="location" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">Location</h2>
            <p class="text-center">Join us in Rapperswil-Jona, Switzerland for NixCon 2025!</p>
          </section>

          <section id="tickets" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">Tickets</h2>
            <p class="text-center">Ticket information coming soon!</p>
          </section>

          <section id="coc" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">Code of Conduct</h2>
            <p class="text-center">Our community guidelines and code of conduct will be available soon.</p>
          </section>

          <section id="faq" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">FAQ</h2>
            <p class="text-center">Frequently asked questions will be posted here.</p>
          </section>

          <section id="chat" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">Chat</h2>
            <p class="text-center">Join our community chat to connect with other attendees!</p>
          </section>

          <section id="schedule" class="flex flex-col items-center">
            <h2 class="text-4xl font-bold font-serif mb-8">Schedule</h2>
            <p class="text-center">Conference schedule will be announced soon.</p>
          </section>
        </div>


      </div>
    </>
  )
}

export default App
