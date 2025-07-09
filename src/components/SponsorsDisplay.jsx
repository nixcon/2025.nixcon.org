import { FaSolidHeart } from "@aminya/solid-icons/fa/FaSolidHeart"
import { A } from "@solidjs/router"
import { For, Show } from "solid-js"
import { sponsors as allSponsors } from "~/data/sponsors"
import PageLayout from "./PageLayout"
import { Title } from "./Ui"

const tierOrder = ["Diamond", "Gold", "Silver", "Bronze", "Custom"]

export default function SponsorsDisplay() {
  const tierEmojis = {
    Diamond: "💎",
    Gold: "🥇",
    Silver: "🥈",
    Bronze: "🥉",
    Custom: "✨",
  }

  // Filter custom sponsors without a logo URL upfront
  const processedSponsors = allSponsors.filter((sponsor) => {
    if (sponsor.tier === "Custom") {
      return !!sponsor.logoUrl
    }
    return true
  })

  const sponsorsByTier = tierOrder.reduce((acc, tier) => {
    const tierSponsors = processedSponsors.filter((s) => s.tier === tier)
    // Always include the tier in the acc, even if empty, to handle CTA later
    acc[tier] = tierSponsors
    return acc
  }, {})

  // Determine if there are any sponsors at all to display the main heading
  const hasAnySponsors = Object.values(sponsorsByTier).some((sponsors) => sponsors.length > 0)

  return (
    <div class="w-full min-h-screen py-8 my-20 text-center relative">
      <div class="max-w-5xl mx-auto px-4 text-white">
        <Show when={hasAnySponsors}>
          <Title>Our Sponsors</Title>
        </Show>
        <For each={tierOrder}>
          {(tier) => {
            const currentTierSponsors = sponsorsByTier[tier]

            // Logic for showing section:
            // Show if it's a non-Custom tier (CTA will be shown if empty)
            // OR if it's Custom AND has sponsors
            const shouldShowSection = tier !== "Custom" || (currentTierSponsors && currentTierSponsors.length > 0)

            return (
              <Show when={shouldShowSection}>
                <section
                  classList={{
                    "my-20": true,
                    // "bg-blue-500/50": tier === "Diamond",
                    // "bg-yellow-500/50": tier === "Gold",
                    // "bg-gray-500/50": tier === "Silver",
                    // "bg-amber-500/50": tier === "Bronze",
                  }}
                >
                  <h3 class="text-3xl font-semibold mb-6 text-white/90 uppercase">
                    {tierEmojis[tier] || ""} {tier} Sponsors
                  </h3>
                  <Show
                    when={currentTierSponsors && currentTierSponsors.length > 0}
                    fallback={
                      // Fallback is CTA, only for non-Custom tiers
                      <Show when={tier !== "Custom"}>
                        <p class="text-white/70 mt-10">
                          No {tier} sponsors yet. Want your logo here?{" "}
                          <A href="/sponsorship" class="text-white hover:text-gray-200 underline">
                            Become a sponsor!
                          </A>
                        </p>
                      </Show>
                    }
                  >
                    <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                      <For each={currentTierSponsors}>
                        {(sponsor) => (
                          <a
                            href={sponsor.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={sponsor.name}
                            class="group block transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                          >
                            <div class="relative p-6 bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                              <div
                                class="flex items-center justify-center"
                                classList={{
                                  "w-24 h-16 md:w-32 md:h-20": tier === "Bronze",
                                  "w-28 h-20 md:w-36 md:h-24": tier === "Silver" || tier === "Custom",
                                  "w-32 h-20 md:w-40 md:h-24": tier === "Gold",
                                  "w-36 h-24 md:w-44 md:h-28": tier === "Diamond"
                                }}
                              >
                                <img
                                  src={sponsor.logoUrl}
                                  alt={`${sponsor.name} logo`}
                                  class="max-w-full max-h-full object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300 brightness-105 contrast-110 saturate-95 group-hover:brightness-110 group-hover:contrast-125 group-hover:saturate-100"
                                />
                              </div>
                              {/* Subtle gradient overlay for better logo visibility */}
                              <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl pointer-events-none"></div>
                            </div>
                          </a>
                        )}
                      </For>
                    </div>
                  </Show>
                </section>
              </Show>
            )
          }}
        </For>
      </div>
    </div>
  )
}
