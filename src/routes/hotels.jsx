import { For } from "solid-js"
import { HotelCard } from "~/components/Cards"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SecondaryButtonLink, Title } from "~/components/Ui"
import { hotelDeals } from "~/data/hotels"

export default function Hotels() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Section>
          <Title>Accommodation</Title>
          <Paragraph>
            {" "}
            Find the perfect place to stay for NixCon. We've secured special rates at local hotels, highlighted nearby
            camping options, and provided resources for coordinating shared accommodation with fellow attendees.
          </Paragraph>
        </Section>

        <Section title="Hotels">
          <For each={hotelDeals}>
            {(hotel) => (
              <HotelCard
                name={hotel.name}
                additionalInformation={hotel.additionalInformation}
                prices={hotel.prices}
                travelTime={hotel.travelTime}
                website={hotel.website}
                mapUrl={hotel.mapUrl}
                bookingInfo={hotel.bookingInfo}
                imagePath={hotel.imagePath}
                imageAlt={hotel.imageAlt}
              />
            )}
          </For>
        </Section>

        <Section title="Camping">
          <Paragraph>
            There is a camping area in the town of Jona which is close to the conference venue. Unfortunately the
            website does not provide any information in English.
          </Paragraph>
          <SecondaryButtonLink
            href="https://www.rapperswil-jona.ch/naherholungimfreien/7647"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-flex items-center gap-2"
          >
            Camping Information
          </SecondaryButtonLink>
        </Section>
        <Section title="Community Coordination">
          <Paragraph>Connect with other attendees to coordinate shared accommodation options.</Paragraph>
          <SecondaryButtonLink
            href="https://matrix.to/#/#nixcon-accommodation:nixos.org"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 inline-flex items-center gap-2"
          >
            Join Matrix Room
          </SecondaryButtonLink>
        </Section>

        <Section title="Need Assistance?">
          <Paragraph>
            If you need help finding suitable accommodation or have any questions, please don't hesitate to contact us.
          </Paragraph>
          <SecondaryButtonLink href="mailto:nixcon@nixos.org" class="mt-2 inline-flex items-center gap-2">
            Contact nixcon@nixos.org
          </SecondaryButtonLink>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
