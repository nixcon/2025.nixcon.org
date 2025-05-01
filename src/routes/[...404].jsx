import { A } from "@solidjs/router";
import { BsExclamationTriangleFill } from 'solid-icons/bs';
import PageLayout from '~/components/PageLayout';

export default function NotFound() {
  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-5">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3">
          <BsExclamationTriangleFill class="text-xl md:text-3xl" />
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
    </PageLayout>
  );
}
