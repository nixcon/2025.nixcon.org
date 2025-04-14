import { JSX } from "solid-js";
import { A } from "@solidjs/router";
import { BsGiftFill } from 'solid-icons/bs';

export default function Sponsorship(): JSX.Element {
  return (
    <div class="relative min-h-screen text-white p-5 pt-20">
      {/* Content */}
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <BsGiftFill class="text-3xl" />
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
                <A href="#how-to-sponsor" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </A>
              </div>

              {/* Bronze Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Bronze</h3>
                <p class="text-xl mb-4">1024+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Linked logo on the website</li>
                  <li>Linked shout-out or repost from official social media accounts</li>
                  <li>Possibility to distribute your own stickers/swag/merch at the venue</li>
                  <li>Tickets: 1+ corporate tickets</li>
                </ul>
                <A href="#how-to-sponsor" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </A>
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
                  <li>Tickets: 2+ corporate tickets</li>
                </ul>
                <A href="#how-to-sponsor" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </A>
              </div>

              {/* Gold Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Gold</h3>
                <p class="text-xl mb-4">4096+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Everything from Silver</li>
                  <li>5 minute lightning talk slot</li>
                  <li>Dedicated space for a booth</li>
                  <li>Tickets: 4+ corporate tickets</li>
                </ul>
                <A href="#how-to-sponsor" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </A>
              </div>

              {/* Diamond Tier */}
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">Diamond</h3>
                <p class="text-xl mb-4">8192+ EUR</p>
                <ul class="list-disc list-inside space-y-2 mb-4">
                  <li>Everything from Gold</li>
                  <li>Logo on some official conference swag</li>
                  <li>1 minute presentation slot (provide the slides in advance) in the conference opening</li>
                  <li>Intro of all recordings show your name/logo</li>
                  <li>Possibility to distribute items (provide them in advance) to all attendees in bag</li>
                  <li>Tickets: 8+ corporate tickets</li>
                </ul>
                <A href="#how-to-sponsor" class="inline-block px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium">
                  Contact Us
                </A>
              </div>
            </div>

            {/* General Info */}
            <div class="mt-12 w-full">
              <h2 class="text-3xl font-bold mb-4">General Info</h2>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Sponsors can be tier-limited or rejected by the Nix Steering Committee for any reason.</li>
                <li>The outline of all sponsor content must be disclosed in advance. We reserve the right to reject content.</li>
                <li>Visibility priority is given according to tiers and donation amount.</li>
                <li>The sponsor can selectively abstain from perks.</li>
                <li>Surplus funds will be used to support official Nix projects.</li>
                <li>Reach out if you'd like to sponsor in a more custom way, such as food, drinks, services, equipment, or only specific perks.</li>
              </ul>
            </div>

            {/* How to Sponsor */}
            <div id="how-to-sponsor" class="mt-8 w-full">
              <h2 class="text-3xl font-bold mb-4">How to Sponsor</h2>
              <p class="mb-4">
                Send an email to <a href="mailto:sponsor@nixos.org" class="underline hover:text-white/80">sponsor@nixos.org</a> (which will forward to both the Nix Steering Committee and the NixOS Foundation board) with:
              </p>
              <ul class="list-disc list-inside space-y-2 mb-4">
                <li>Company name and website</li>
                <li>Desired tier, amount and perks</li>
                <li>Any other details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
