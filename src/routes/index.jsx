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
        {/* Event Details */}
        <Section id="event-details" title="Event Details">
          <div class="grid grid-cols-1 gap-6">
            {/* Schedule Card */}
            <div class="border border-white text-white rounded-2xl p-6 shadow-md flex flex-col">
              <h3 class="text-2xl font-bold leading-tight tracking-tight mb-4 uppercase">Schedule</h3>
              <div class="font-mono space-y-3 flex-1">
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Venue Opens:</span>
                  <span>9:00 daily</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Doors Close:</span>
                  <span>Fri/Sat 20:00, Sun 17:00</span>
                </div>
                <hr class="border-gray-300" />
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Friday:</span>
                  <span>Program starts 10:00</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Saturday:</span>
                  <span>Program starts 11:00</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-semibold">Sunday:</span>
                  <span>No fixed program</span>
                </div>
              </div>
              <div class="mt-4 pt-4 border-t border-gray-300 flex">
                <A
                  href="/schedule"
                  aria-label="Schedule"
                  class="underline text-sm font-mono ml-auto"
                >
                  View detailed schedule
                </A>
              </div>
            </div>

            {/* Meals Card */}
            <div class="border border-white text-white rounded-2xl p-6 shadow-md flex flex-col">
              <h3 class="text-2xl font-bold leading-tight tracking-tight mb-4 uppercase">Meals</h3>
              <div class="font-mono flex-1">
                <table class="w-full border-collapse table-fixed">
                  <thead>
                    <tr class="border-b border-gray-300">
                      <th class="text-left py-2 font-semibold">Meal</th>
                      <th class="text-left py-2 font-semibold">Friday</th>
                      <th class="text-left py-2 font-semibold">Saturday</th>
                      <th class="text-left py-2 font-semibold">Sunday</th>
                    </tr>
                  </thead>
                  <tbody class="text-sm">
                    <tr class="border-b border-gray-300/50">
                      <td class="py-3 font-semibold">Lunch</td>
                      <td class="text-left py-3">Included</td>
                      <td class="text-left py-3">Included</td>
                      <td class="text-left py-3">Included</td>
                    </tr>
                    <tr>
                      <td class="py-3 font-semibold">Dinner</td>
                      <td class="text-left py-3">Included</td>
                      <td class="text-left py-3">Included</td>
                      <td class="text-left py-3">Self-organize</td>
                    </tr>
                  </tbody>
                </table>
                <div class="mt-4 text-xs space-y-1">
                  <div>Conference winds down Sunday afternoon/evening</div>
                </div>
              </div>
            </div>

            {/* Facilities & Activities Card */}
            <div class="border border-white text-white rounded-2xl p-6 shadow-md flex flex-col">
              <h3 class="text-2xl font-bold leading-tight tracking-tight mb-4 uppercase">Facilities</h3>
              <div class="font-mono space-y-4 flex-1">
                <div class="flex items-start gap-3">
                  <div class="text-2xl">🛠️</div>
                  <div>
                    <div class="font-semibold">Hacking Rooms</div>
                    <div class="text-sm text-white">4 rooms will be available throughout the conference for hacking and building projects</div>
                  </div>
                </div>
                <hr class="border-gray-300" />
                <div class="flex items-start gap-3">
                  <div class="text-2xl">🏊‍♂️</div>
                  <div>
                    <div class="font-semibold">Lake Swimming</div>
                    <div class="text-sm text-white mb-2">There is a beach right next to the venue where you can swim</div>
                    <a
                      href="https://xn--gfrr-7qa.li/sensor/1"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-block bg-blue-900/30 hover:bg-blue-900/50 transition-colors rounded px-2 py-1 text-xs underline"
                    >
                      Check water temperature
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CfP */}
        <Section id="cfp" title="Call for presentations">
          <Paragraph>We don't do papers, but you may now submit your talk applications!</Paragraph>

          <Paragraph class="text-center font-semibold text-lg">
            Submissions are now closed
            <div class="mx-auto flex flex-col justify-center items-center gap-4 font-normal">
              <span class="text-sm text-center">
                The submission deadline was August 1, 2025 at 03:59 (Europe/Zurich)
              </span>
            </div>
          </Paragraph>

          <div class="mt-8 flex flex-col items-end gap-2">
            <Paragraph class="text-right">Did you submit a proposal?</Paragraph>
            <SecondaryButtonLink
              href="https://talks.nixcon.org/nixcon-2025/cfp"
              target="_blank"
              rel="noopener noreferrer"
            >
              View or edit your submission
            </SecondaryButtonLink>
          </div>
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
                  >Check your eligibility.
                  </a>
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
