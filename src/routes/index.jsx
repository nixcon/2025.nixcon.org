import { A } from "@solidjs/router"
import { TicketCard } from "~/components/Cards.jsx"
import { Hero } from "~/components/Hero"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SecondaryButtonLink, SubTitle } from "~/components/Ui"
import { useThemeStore } from "~/stores/theme"

export default function Home() {
  const { cycleTheme, currentTheme } = useThemeStore()
  return (
    <div class="relative min-h-svh text-white">
      {/* Hero section */}
      <Hero />

      {/* Apply PageLayout to the main content with reduced spacing */}
      <PageLayout reducedSpacing={true}>
        {/* CfP */}
        <Section id="cfp" title="Call for presentations">
          <Paragraph>We don't do papers, but you may now submit your talk applications!</Paragraph>
          <SecondaryButtonLink
            href="https://talks.nixcon.org/nixcon-2025/cfp"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto"
          >
            Submit your application
          </SecondaryButtonLink>
        </Section>

        {/* Location */}
        <Section id="location" title="" align="right">
          {/* <Paragraph>Join us at OST in Rapperswil-Jona, Switzerland for NixCon 2025!</Paragraph> */}
          <div class="flex flex-col  sm:gap-5">
            <div class="">Join us at</div>
            {/* <hr /> */}
            <SubTitle className="">OST - Ostschweizer Fachhochschule</SubTitle>
            <SubTitle className="">Rapperswil-Jona</SubTitle>
            <SubTitle className="">Switzerland</SubTitle>
          </div>
          <SecondaryButtonLink
            href="https://www.openstreetmap.org/way/34754484?mlat=47.22318649291992&mlon=8.81653368473053#map=19/47.223186/8.816534"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto"
          >
            View on OpenStreetMap
          </SecondaryButtonLink>
        </Section>

        {/* Chat */}
        <Section id="chat" title="Chat">
          <Paragraph>
            Join our community chat to connect with other attendees! The Matrix room is the place to go for
            announcements and everything NixCon-related.
          </Paragraph>
          <SecondaryButtonLink
            href="https://matrix.to/#/#nixcon:matrix.org"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto"
          >
            Join Matrix room
          </SecondaryButtonLink>
          <Paragraph>
            If you want to support the event as a helping hand on site, we are happy to hear from you in the dedicated
            Matrix orga room. Thanks!
          </Paragraph>
          <SecondaryButtonLink
            href="https://matrix.to/#/#nixcon2025-orga:lassul.us"
            target="_blank"
            rel="noopener noreferrer"
            class="ml-auto"
          >
            Join Matrix orga room
          </SecondaryButtonLink>
        </Section>

        {/* Code of Conduct */}
        <Section id="coc" title="Code of Conduct">
          <Paragraph>
            Our community guidelines and code of conduct ensure a respectful and inclusive environment for all
            attendees.
          </Paragraph>
          <SecondaryButtonLink href="/coc" class="ml-auto">
            View Code of Conduct
          </SecondaryButtonLink>
        </Section>
        {/* Tickets - Moved to bottom */}
        <Section id="tickets" title="Tickets">
          <div class="flex flex-col md:flex-row gap-6 justify-center">
            <TicketCard
              title="PERSONAL TICKET"
              price="€128.00"
              description="Personal tickets are intended for individual attendees who are not representing an organization. "
              buttonText="GET PERSONAL TICKET"
              buttonLink="https://tickets.nixcon.org/2025/"
              note={
                <span>
                  Note: If you have contributed to official Nix projects, you may be eligible for a free ticket.
                  <br></br>
                  <a
                    href="https://tickets.nixcon.org/redirect/?url=https%3A//vouchers.nixcon.org%3A84Zmw0AjEfTeWf5bdBkDdtAORfFh41vl3riICIcK3C4"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline"
                  >
                    Click here
                  </a>{" "}
                  to check your eligibility.
                </span>
              }
            />
            <TicketCard
              title="CORPORATE TICKET"
              price="€256.00"
              description="Only corporate tickets come with company name/logo recognition on the badge. This is great opportunity to show community involvement and exercise your conference budget."
              buttonText="GET CORPORATE TICKET"
              buttonLink="https://tickets.nixcon.org/2025/"
              note={
                <span>
                  Note: If your organization is{" "}
                  <A href="/sponsorship" aria-label="Sponsorship" class="underline">
                    sponsoring NixCon
                  </A>{" "}
                  , you already get a contingent of some corporate tickets.
                </span>
              }
            />
          </div>
        </Section>
      </PageLayout>

      <div class="h-20"></div>
    </div>
  )
}
