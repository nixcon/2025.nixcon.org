import { FaSolidLink } from "@aminya/solid-icons/fa/FaSolidLink"
import { FaSolidMapLocationDot } from "@aminya/solid-icons/fa/FaSolidMapLocationDot"
import { For } from "solid-js"
import { HotelCard } from "~/components/Cards"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SecondaryButtonLink, SubTitle, Title } from "~/components/Ui"

export default function Hotels() {
  // Sorted by confirmation date
  const hotelDeals = [
    {
      name: "The Yarn",
      additionalInformation: "Breakfast is included.",
      prices: [],
      travelTime: "Travel time by train can be as low as 30 minutes.",
      website: "https://theyarn.ch/",
      mapUrl: "https://maps.app.goo.gl/6a5Cfi281uYqgtpu5",
      bookingInfo: "Book via email at corporate@theyarn.ch, mentioning you are attending the NixCon conference.",
      imagePath: "/2025.nixcon.org/the-yarn-rates.png", // Assuming this path is correct relative to public dir or base URL
      imageAlt: "The Yarn Hotel Room Rates",
    },
    {
      name: "Hotel Swiss Star",
      additionalInformation: "",
      prices: ["Single room incl. breakfast CHF 150.00/night", "Double room incl. breakfast CHF 190.00/night"],
      travelTime: "Travel time by train to OST is about 28 minutes.",
      website: "https://www.hotel-swiss-star.ch",
      mapUrl: "https://maps.app.goo.gl/RDurEWjULhBkgX3M7",
      bookingInfo: 'Book directly on the hotel website using promo code "NixCon".',
    },
    {
      name: "Hotel Residence Loren",
      additionalInformation:
        "Underground parking is available for CHF 10 per night. Cancellation is possible until seven days before arrival.",
      prices: [
        "Double room for one person incl. breakfast: CHF 125.00/night",
        "Double room for two persons incl. breakfast: CHF 150.00/night",
      ],
      bookingInfo: 'Book via email at info@hotel-residence-loren.ch and mention "NixCon 2025"',
      website: "https://www.hotel-residence-loren.ch/",
      mapUrl: "https://maps.app.goo.gl/cZF7fvNNgwutw3qh6",
      travelTime: "Travel time by train to OST can be as low as 37 minutes.",
    },
    {
      name: "Aabach Hotel",
      additionalInformation:
        "The offer is only valid until the 4th of August. Free parking and a gym are available. A restaurant and a bistro with a quiet sun terrasse are available in the same building.",
      prices: [
        "Double room for one person incl. breakfast: CHF 145.00/night + CHF 3.5 city tax/night and person",
        "Double room for two persons incl. breakfast: CHF 160.00/night + CHF 3.5 city tax/night and person",
      ],
      bookingInfo: 'Book via email at info@aabach-hotel.ch and mention "NixCon 2025"',
      website: "https://www.aabach-hotel.ch/",
      mapUrl: "https://maps.app.goo.gl/J9sjKHhDE2jxT3326",
      travelTime: "Travel time by train to OST 35 minutes.",
    },
  ]

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
