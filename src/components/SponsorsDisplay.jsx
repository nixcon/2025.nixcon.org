import { For, Show } from 'solid-js';
import { A } from "@solidjs/router";
import { sponsors as allSponsors } from '~/data/sponsors';

export default function SponsorsDisplay() {
  const tierOrder = ["Diamond", "Gold", "Silver", "Bronze", "Custom"];
  const tierEmojis = {
    Diamond: "💎",
    Gold: "🥇",
    Silver: "🥈",
    Bronze: "🥉",
    Custom: "✨",
  };

  // Filter custom sponsors without a logo URL upfront
  const processedSponsors = allSponsors.filter(sponsor => {
    if (sponsor.tier === "Custom") {
      return !!sponsor.logoUrl;
    }
    return true;
  });

  const sponsorsByTier = tierOrder.reduce((acc, tier) => {
    const tierSponsors = processedSponsors.filter(s => s.tier === tier);
    // Always include the tier in the acc, even if empty, to handle CTA later
    acc[tier] = tierSponsors;
    return acc;
  }, {});

  // Determine if there are any sponsors at all to display the main heading
  const hasAnySponsors = Object.values(sponsorsByTier).some(sponsors => sponsors.length > 0);

  return (
    <div class="w-full py-8 my-8 text-center relative">
      <div class="max-w-5xl mx-auto px-4">
        <Show when={hasAnySponsors}>
          <h2 class="text-3xl font-bold mb-10 text-white">Our Valued Sponsors</h2>
        </Show>
        <For each={tierOrder}>
          {(tier) => {
            const currentTierSponsors = sponsorsByTier[tier];

            // Logic for showing section:
            // Show if it's a non-Custom tier (CTA will be shown if empty)
            // OR if it's Custom AND has sponsors
            const shouldShowSection = tier !== "Custom" || (currentTierSponsors && currentTierSponsors.length > 0);

            return (
              <Show when={shouldShowSection}>
                <section class="mb-12">
                  <h3 class="text-2xl font-semibold mb-6 text-white/90">
                    {tierEmojis[tier] || ""} {tier} Sponsors
                  </h3>
                  <Show
                    when={currentTierSponsors && currentTierSponsors.length > 0}
                    fallback={
                      // Fallback is CTA, only for non-Custom tiers
                      <Show when={tier !== "Custom"}>
                        <p class="text-white/70">
                          No {tier} sponsors yet. Want your logo here?{' '}
                          <A href="/sponsorship" class="text-white hover:text-gray-200 underline">
                            Become a sponsor!
                          </A>
                        </p>
                      </Show>
                    }
                  >
                    <div class="flex flex-wrap justify-center items-center gap-8">
                      <For each={currentTierSponsors}>
                        {(sponsor) => (
                          <a
                            href={sponsor.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={sponsor.name}
                            class="block p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                          >
                            <img
                              src={sponsor.logoUrl}
                              alt={`${sponsor.name} logo`}
                              class="max-h-16 md:max-h-20 object-contain"
                            />
                          </a>
                        )}
                      </For>
                    </div>
                  </Show>
                </section>
              </Show>
            );
          }}
        </For>
      </div>
    </div>
  );
}