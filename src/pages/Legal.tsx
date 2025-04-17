import { JSX } from "solid-js";
import { BsFileTextFill } from 'solid-icons/bs';

export default function Legal(): JSX.Element {
  return (
    <div class="relative min-h-screen text-white p-5 pt-20">
      {/* Content */}
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <BsFileTextFill class="text-3xl" />
              Legal Disclosure
            </h1>

            <div class="w-full max-w-2xl">
              <div class="prose prose-invert mx-auto">
                <p class="text-lg mb-6">This event is hosted by:</p>

                <div class="mb-6">
                  <p>Stichting NixOS Foundation</p>
                  <p>3500 Utrecht</p>
                  <p>The Netherlands</p>
                </div>

                <div class="mb-6">
                  <p>KvK 63520583</p>
                  <p>VAT: NL855271851B01</p>
                </div>

                <div class="mb-6">
                  <p>E-Mail: <a href="mailto:foundation@nixos.org" class="text-white underline hover:text-white/80">foundation@nixos.org</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
