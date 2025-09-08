


export default function GroupPhoto() {
  return (<div class="p-10 glass bg-amber-500/40!">
    <div class="flex flex-col gap-8 max-w-3xl mx-auto my-20">
      <h2 class="text-3xl sm:text-6xl uppercase font-bold">That's a Wrap! 🎉</h2>

      {/* Event Statistics */}
      <div class="w-full mb-8 border border-white text-white rounded-2xl p-6 shadow-md flex flex-col font-mono">
        <h3 class="text-2xl font-bold leading-tight tracking-tight mb-4 uppercase ">Stats</h3>
        <div class="flex flex-col items-center text-center mb-8">
          <div class="text-7xl font-bold mb-1">442</div>
          <div class="text-sm font-semibold">Attendees</div>
        </div>
        <div class="grid grid-cols-3 gap-4 font-mono">
          <div class="flex flex-col items-center text-center">
            <div class="text-6xl font-bold mb-1">78</div>
            <div class="text-sm font-semibold">Speakers</div>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="text-6xl font-bold mb-1">24</div>
            <div class="text-sm font-semibold">Sponsors</div>
          </div>
          <div class="flex flex-col items-center text-center">
            <div class="text-6xl font-bold mb-1">16</div>
            <div class="text-sm font-semibold">Organisers</div>
          </div>
        </div>
      </div>


      <p class="max-w-sm sm:text-lg">
        Thank you to everyone who made NixCon 2025 an incredible experience!
      </p>
      <p class="max-w-sm sm:text-lg">
        From speakers and sponsors to attendees and organizers — this community is what makes it all possible.
      </p>

    </div>


    <div class="rounded-xl overflow-clip">

      <picture class="">
        <source
          type="image/webp"
          srcset="
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-480w.webp 480w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-800w.webp 800w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-1200w.webp 1200w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-1600w.webp 1600w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-2000w.webp 2000w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-2400w.webp 2400w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-3200w.webp 3200w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-4000w.webp 4000w,
        NixCon2025_arik-grahl.de_CC-BY-SA-4.0-6000w.webp 6000w
      "
          sizes="(max-width: 600px) 100vw,
             (max-width: 1200px) 90vw,
             (max-width: 2000px) 80vw,
             2000px"
        />

        <img
          src="NixCon2025_arik-grahl.de_CC-BY-SA-4.0.jpg"
          alt="NixCon 2025 — conference scene (photographer: Arik Grahl)"
          loading="lazy"
          decoding="async"
          style="width:100%; height:auto; display:block;"
        />
      </picture>
    </div>

    <div class="mt-4 flex justify-between items-start">
      <a
        href="NixCon2025_arik-grahl.de_CC-BY-SA-4.0.jpg"
        download="NixCon2025_arik-grahl.de_CC-BY-SA-4.0.jpg"
        class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
        title="Download full resolution image"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7,10 12,15 17,10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download Full Image
      </a>

      <div class="text-sm text-white opacity-80">
        NixCon 2025 by{' '}
        <a class="text-white" href="https://www.arik-grahl.de/" target="_blank" rel="noopener noreferrer">
          Arik Grahl
        </a>
        . Licensed under{' '}
        <a class="text-white" href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
          CC BY-SA 4.0
        </a>.
      </div>
    </div>

  </div>)
}
