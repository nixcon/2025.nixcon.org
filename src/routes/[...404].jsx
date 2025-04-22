import { A } from "@solidjs/router";
import { BsExclamationTriangleFill } from 'solid-icons/bs';

export default function NotFound() {
  return (
    <div class="relative min-h-svh text-white p-5 pt-20">
      <div class="max-w-3xl mx-auto p-8 glass mt-20">
        <div class="w-full mx-auto space-y-8 px-4">
          <div class="flex flex-col items-center gap-5">
            <h1 class="text-4xl font-bold flex items-center gap-3">
              <BsExclamationTriangleFill class="text-3xl" />
              Page Not Found
            </h1>

            <p class="text-center text-lg mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>

            <A
              href="/"
              class="px-6 py-3 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-bold"
            >
              Return to Home
            </A>
          </div>
        </div>
      </div>
    </div>
  );
}
