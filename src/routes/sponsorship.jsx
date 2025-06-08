import { SponsorshipCard } from "~/components/Cards"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SecondaryButtonLink, SubTitle, Title } from "~/components/Ui"

// Expandable footnote component
function ExpandableFootnote({ number, content }) {
  return (
    <span class="inline-block">
      <details class="inline relative">
        {/* Added relative for better positioning of absolute child */}
        <summary class="inline-block cursor-pointer">
          <sup class="text-white hover:text-gray-100 transition-colors">[{number}]</sup>
        </summary>
        {/* Corrected bg-/90 to bg-black/90, assuming a dark theme context */}
        <div class="absolute mt-1 max-w-xs sm:max-w-sm rounded-lg border border-white/20 bg-black/90 backdrop-blur-md p-3 text-sm shadow-lg z-50 left-0">
          {content}
        </div>
      </details>
    </span>
  )
}

function sponsorLink(tier, amount) {
  let body = `Please provide at least the following information:
  - Company Name and Website:
  - Desired Tier: ${tier}
  - Desired Amount: ${amount} EUR
  `
  let title = `NixCon 2025 Sponsorship: <Your Company Name>`
  return `mailto:sponsor@nixos.org?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`
}

export default function Sponsorship() {
  const commonFootnote1 =
    "One corporate ticket per 1024 EUR. Only corporate tickets come with company name/logo recognition on the badge. Corporate tickets can also be bought individually for 256 EUR in the ticket shop."
  const commonFootnote2 = "These perks may be limited in availability."
  const commonFootnote3 = "These perks require production and cannot be guaranteed if too late."

  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Section>
          <Title>Sponsorship Opportunities</Title>
          <Paragraph>
            Support NixCon 2025 and gain visibility in the Nix community. Choose from our sponsorship packages below or
            contact us for custom arrangements.
          </Paragraph>
        </Section>

        <Section>
          <SponsorshipCard
            title="💎 Diamond Tier"
            price="8192+ EUR"
            features={[
              "Everything from Gold",
              <>
                Logo on some official conference swag <ExpandableFootnote number="2" content={commonFootnote2} />{" "}
                <ExpandableFootnote number="3" content={commonFootnote3} />
              </>,
              "1 minute presentation slot (provide the slides in advance) in the conference opening",
              "Intro of all recordings show your name/logo",
              "Possibility to distribute items (provide them in advance) to all attendees in bag",
              <>
                Tickets: 8+ corporate tickets <ExpandableFootnote number="1" content={commonFootnote1} />
              </>,
            ]}
            buttonText="Sponsor Diamond Tier"
            buttonLink={sponsorLink("Diamond", 8192)}
          />

          <SponsorshipCard
            title="🥇 Gold Tier"
            price="4096+ EUR"
            features={[
              "Everything from Silver",
              "5 minute lightning talk slot",
              <>
                Dedicated space for a booth <ExpandableFootnote number="2" content={commonFootnote2} />
              </>,
              <>
                Tickets: 4+ corporate tickets <ExpandableFootnote number="1" content={commonFootnote1} />
              </>,
            ]}
            buttonText="Sponsor Gold Tier"
            buttonLink={sponsorLink("Gold", 4096)}
          />

          <SponsorshipCard
            title="🥈 Silver Tier"
            price="2048+ EUR"
            features={[
              "Everything from Bronze",
              "Shout-out in the opening",
              "Slot on break slideshow (provide a slide in advance)",
              "Possibility to distribute flyers (provide them in advance) to all attendees in bag",
              <>
                Tickets: 2+ corporate tickets <ExpandableFootnote number="1" content={commonFootnote1} />
              </>,
            ]}
            buttonText="Sponsor Silver Tier"
            buttonLink={sponsorLink("Silver", 2048)}
          />

          <SponsorshipCard
            title="🥉 Bronze Tier"
            price="1024+ EUR"
            features={[
              "Linked logo on the website",
              "Linked shout-out or repost from official social media accounts",
              "Possibility to distribute your own stickers/swag/merch at the venue",
              <>
                Tickets: 1+ corporate tickets <ExpandableFootnote number="1" content={commonFootnote1} />
              </>,
            ]}
            buttonText="Sponsor Bronze Tier"
            buttonLink={sponsorLink("Bronze", 1024)}
          />
        </Section>

        <Section>
          <SubTitle>💖 Non-sponsorship donation</SubTitle>
          <Paragraph>
            Supporting the conference and official Nix projects. Confirmation of donation via OpenCollective.
          </Paragraph>
          <div class="mt-6">
            <SecondaryButtonLink href="https://opencollective.com/nixos/projects/nixcon-2025/donate" target="_blank">
              Donate via OpenCollective
            </SecondaryButtonLink>
          </div>
        </Section>

        <Section>
          <SubTitle>✨ Custom Tier</SubTitle>
          <Paragraph>
            Sponsor in a more custom way, such as: Food, drinks, services, equipment. Or discuss only specific perks
            from the tiers above.
          </Paragraph>
          <div class="mt-6">
            <SecondaryButtonLink href={sponsorLink("Custom", 1)}>Discuss Custom Sponsorship</SecondaryButtonLink>
          </div>
        </Section>

        <Section title="General Information & Footnotes">
          <ol class="list-decimal list-inside space-y-2 text-sm mt-4">
            <li id="fn1">
              <strong>[1]</strong> {commonFootnote1}
            </li>
            <li id="fn2">
              <strong>[2]</strong> {commonFootnote2}
            </li>
            <li id="fn3">
              <strong>[3]</strong> {commonFootnote3}
            </li>
            <li>Sponsors can be tier-limited or rejected by the Nix Steering Committee for any reason.</li>
            <li>
              The outline of all sponsor content must be disclosed in advance. We reserve the right to reject content.
            </li>
            <li>Visibility priority is given according to tiers and donation amount.</li>
            <li>The sponsor can selectively abstain from perks.</li>
            <li>Surplus funds will be used to support official Nix projects.</li>
          </ol>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
