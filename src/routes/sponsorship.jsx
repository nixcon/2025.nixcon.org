import { BiSolidHeartCircle } from 'solid-icons/bi';

function sponsorLink(tier, amount) {
  let body = `Please provide at least the following information:
  - Company Name and Website:
  - Desired Tier: ${tier}
  - Desired Amount: ${amount} EUR
  `

  let title = "NixCon 2025 Sponsorship: <Your Company Name>"

  return "mailto:sponsor@nixos.org?subject=" + encodeURIComponent(title) + "&body=" + encodeURIComponent(body)
}

export default function Sponsorship() {
  return (
    <div class="relative min-h-svh text-white p-5 pt-20">
      {/* Content */}
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <BiSolidHeartCircle class="text-3xl" />
              Sponsorship Tiers
            </h1>

            <p class="text-center text-lg mb-6">
              Support NixCon 2025 and gain visibility in the Nix community.
              Choose from our sponsorship packages below.
            </p>

            {/* Sponsorship Tiers */}
            <div class="w-full space-y-6">
              {/* Non-sponsorship donation */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Non-sponsorship donation</h3>
                <p class="text-xl mb-4">0+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Supporting the conference and official Nix projects</li>
                  <li>Confirmation of donation via OpenCollective</li>
                </ul>
                <a href="https://opencollective.com/nixos" target="_blank" rel="noopener noreferrer" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Donate
                </a>
              </div>

              {/* Bronze Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Bronze</h3>
                <p class="text-xl mb-4">1024+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Linked logo on the website</li>
                  <li>Linked shout-out or repost from official social media accounts</li>
                  <li>Possibility to distribute your own stickers/swag/merch at the venue</li>
                  <li>Tickets: 1+ corporate tickets<a href="#corporate-tickets"><sup>[1]</sup></a></li>
                </ul>
                <a href={sponsorLink("Bronze", 1024)} class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </a>
              </div>

              {/* Silver Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Silver</h3>
                <p class="text-xl mb-4">2048+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Everything from Bronze</li>
                  <li>Shout-out in the opening</li>
                  <li>Slot on break slideshow (provide a slide in advance)</li>
                  <li>Possibility to distribute flyers (provide them in advance) to all attendees in bag</li>
                  <li>Tickets: 2+ corporate tickets<a href="#corporate-tickets"><sup>[1]</sup></a></li>
                </ul>
                <a href={sponsorLink("Silver", 2048)} class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </a>
              </div>

              {/* Gold Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Gold</h3>
                <p class="text-xl mb-4">4096+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Everything from Silver</li>
                  <li>5 minute lightning talk slot</li>
                  <li>Dedicated space for a booth<a href="#limited"><sup>[2]</sup></a></li>
                  <li>Tickets: 4+ corporate tickets<a href="#corporate-tickets"><sup>[1]</sup></a></li>
                </ul>
                <a href={sponsorLink("Gold", 4096)} class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </a>
              </div>

              {/* Diamond Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Diamond</h3>
                <p class="text-xl mb-4">8192+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Everything from Gold</li>
                  <li>Logo on some official conference swag<a href="#limited"><sup>[2]</sup></a><a href="#production"><sup>[3]</sup></a></li>
                  <li>1 minute presentation slot (provide the slides in advance) in the conference opening</li>
                  <li>Intro of all recordings show your name/logo</li>
                  <li>Possibility to distribute items (provide them in advance) to all attendees in bag</li>
                  <li>Tickets: 8+ corporate tickets<a href="#corporate-tickets"><sup>[1]</sup></a></li>
                </ul>
                <a href={sponsorLink("Diamond", 8192)} class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </a>
              </div>

              {/* Custom Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Custom</h3>
                <p class="text-xl mb-4">Sponsor in a more custom way, such as</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Food, drinks, services, equipment</li>
                  <li>Only specific perks</li>
                </ul>
                <a href={sponsorLink("Custom", 1)} class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </a>
              </div>
            </div>

            {/* General Info */}
            <div class="mt-12 w-full">
              <ol class="list-decimal text-xs list-inside space-y-2 mb-4">
                <li id="corporate-tickets">One corporate ticket per 1024 EUR. Only corporate tickets come with company name/logo recognition on the badge. Corporate tickets can also be bought individually when ticket sales open.</li>
                <li id="limited">These perks may be limited in availability.</li>
                <li id="production">These perks require production and cannot be guaranteed if too late.</li>
                <li>Sponsors can be tier-limited or rejected by the Nix Steering Committee for any reason.</li>
                <li>The outline of all sponsor content must be disclosed in advance. We reserve the right to reject content.</li>
                <li>Visibility priority is given according to tiers and donation amount.</li>
                <li>The sponsor can selectively abstain from perks.</li>
                <li>Surplus funds will be used to support official Nix projects.</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
