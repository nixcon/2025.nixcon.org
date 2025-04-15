import { JSX } from "solid-js";
import { BsBuildingFill } from 'solid-icons/bs';
import { FaRegularComments } from 'solid-icons/fa';

export default function Hotels(): JSX.Element {
  return (
    <div class="relative min-h-screen text-white p-5 pt-20">
      {/* Content */}
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <BsBuildingFill class="text-3xl" />
              Hotel Recommendations
            </h1>

            <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 w-full">
              <p class="text-center text-lg mb-4">
                We're in the process of reaching out to hotels and will publish a list of accommodations with potential discounts or NixCon reserved rooms soon.
              </p>

              <div class="flex justify-center mt-6">
                <a
                  href="https://matrix.to/#/#nixcon-accommodation:nixos.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
                >
                  <FaRegularComments />
                  Join our Matrix room to coordinate accommodation
                </a>
              </div>
            </div>

            {/* Hotel Listings - Empty for now, ready to be populated */}
            <div class="w-full space-y-6 hidden">
              {/* Template for hotel entries */}
              {/* 
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">[Hotel Name]</h3>
                <p class="text-lg mb-2">[Star Rating]</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <p><span class="font-semibold">Distance to venue:</span> [Distance]</p>
                  <p><span class="font-semibold">Price range:</span> [Price]</p>
                  <p><span class="font-semibold">Availability:</span> [Rooms left]</p>
                </div>
                <p class="mb-4">
                  [Hotel description and special offers for NixCon attendees]
                </p>
                <div class="flex flex-wrap gap-4">
                  <a
                    href="[Website URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium"
                  >
                    Visit Website
                  </a>
                  <a
                    href="[Map URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium"
                  >
                    View on Map
                  </a>
                </div>
              </div>
              */}
            </div>

            <p class="text-center mt-6">
              For assistance with accommodation, please contact <a href="mailto:nixcon@nixos.org" class="underline hover:text-white/80">nixcon@nixos.org</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
