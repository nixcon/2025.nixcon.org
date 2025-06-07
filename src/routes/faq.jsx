import { FaSolidCircleQuestion } from '@aminya/solid-icons/fa/FaSolidCircleQuestion';
import { For } from 'solid-js';
import PageLayout from '~/components/PageLayout';
import { faqItems } from '~/data/faq.js';

export default function FAQ() {
  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-16">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3 -mb-10">
          <FaSolidCircleQuestion class="text-xl md:text-3xl" />
          Frequently Asked Questions
        </h1>

        {/* FAQ Listings */}
        <div class="w-full space-y-6">
          <For each={faqItems}>
            {(faq) => (
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                <details class="group">
                  <summary class="text-xl font-bold mb-2 cursor-pointer group-open:mb-4 transition-all duration-300 ease-in-out">
                    {faq.question}
                  </summary>
                  <p class="text-white/80">
                    {faq.answer}
                  </p>
                </details>
              </div>
            )}
          </For>
        </div>

        <hr class="h-[1px] w-full border-white/10" />

        {/* Additional Information Section (Optional - can be adapted or removed) */}
        <div class="w-full space-y-8">
          <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
            <h3 class="text-xl font-bold mb-4 text-center flex items-center justify-center gap-2">
              <FaSolidCircleQuestion class="text-lg" />
              Still have questions?
            </h3>
            <div class="flex flex-col justify-center items-center gap-4">
              <p class="text-center max-w-2xl">
                If you can't find the answer to your question here, please don't hesitate to reach out to us.
              </p>
              <a
                href="mailto:nixcon@nixos.org"
                class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
              >
                Contact us at nixcon@nixos.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}