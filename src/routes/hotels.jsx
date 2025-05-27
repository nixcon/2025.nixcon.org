import { FaSolidComments, FaSolidHotel, FaSolidLink } from 'solid-icons/fa';
import { FaSolidMapLocationDot } from 'solid-icons/fa'
import { For } from 'solid-js';
import PageLayout from '~/components/PageLayout';

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
      imagePath: "/the-yarn-rates.png",
      imageAlt: "The Yarn Hotel Room Rates"
    },
    {
      name: "Hotel Swiss Star",
      additionalInformation: "",
      prices: [
        "Single room incl. breakfast CHF 150.00/night",
        "Double room incl. breakfast CHF 190.00/night"
      ],
      travelTime: "Travel time by train to OST is about 28 minutes.",
      website: "https://www.hotel-swiss-star.ch",
      mapUrl: "https://maps.app.goo.gl/RDurEWjULhBkgX3M7",
      bookingInfo: "Book directly on the hotel website using promo code \"NixCon\"."
    },
    {
      name: "Hotel Residence Loren",
      additionalInformation:
        "Underground parking is available for CHF 10 per night. Cancellation is possible until seven days before arrival.",
      prices: [
        "Double room for one person incl. breakfast: CHF 125.00/night",
        "Double room for two persons incl. breakfast: CHF 150.00/night",
      ],
      bookingInfo:
        'Book needs to be done via email at info@hotel-residence-loren.ch and mention "NixCon 2025"',
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
      bookingInfo:
        'Book via email at info@aabach-hotel.ch and mention "NixCon 2025"',
      website: "https://www.aabach-hotel.ch/",
      mapUrl: "https://maps.app.goo.gl/J9sjKHhDE2jxT3326",
      travelTime: "Travel time by train to OST 35 minutes.",
    },
  ];

  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-5">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3">
          <FaSolidHotel class="text-xl md:text-3xl" />
          Regional hotels offering a discount
        </h1>

        {/* Hotel Listings */}
        <div class="w-full space-y-6">
          <For each={hotelDeals}>
            {(hotel) => (
              <div class="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <h3 class="text-2xl font-bold mb-2">{hotel.name}</h3>

                <p class="mb-4">
                  {hotel.additionalInformation}
                </p>

                {hotel.prices.length > 0 && (
                  <div class="mb-4">
                    <p class="font-semibold mb-1">Prices:</p>
                    <ul class="list-disc pl-5">
                      <For each={hotel.prices}>
                        {(price) => <li>{price}</li>}
                      </For>
                    </ul>
                  </div>
                )}

                <p class="mb-4">{hotel.travelTime}</p>

                {hotel.bookingInfo && (
                  <p class="mb-4 font-medium bg-white/10 p-2 rounded">
                    <span class="font-bold">Booking:</span> {hotel.bookingInfo}
                  </p>
                )}

                {hotel.imagePath && (
                  <details class="mb-4 bg-white/5 rounded-lg overflow-hidden">
                    <summary class="p-3 cursor-pointer hover:bg-white/10 transition-colors font-medium">
                      View Room Rates
                    </summary>
                    <div class="p-3">
                      <img
                        src={hotel.imagePath}
                        alt={hotel.imageAlt}
                        class="w-full max-w-2xl mx-auto rounded-lg border border-white/20"
                      />
                    </div>
                  </details>
                )}

                <div class="flex flex-wrap gap-4">
                  <a
                    href={hotel.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
                  >
                    <FaSolidLink /> Visit Website
                  </a>
                  <a
                    href={hotel.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
                  >
                    <FaSolidMapLocationDot /> View on Map
                  </a>
                </div>
              </div>
            )}
          </For>
        </div>

        <div class="mt-6 text-center">
          <h3 class="text-xl font-bold mb-4">Need Accommodation Assistance?</h3>

          <div class="flex flex-col justify-center items-center gap-4">
            <a
              href="https://matrix.to/#/#nixcon-accommodation:nixos.org"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
            >
              <FaSolidComments />
              Join our Matrix room to coordinate accommodation
            </a>

            <a
              href="mailto:nixcon@nixos.org"
              class="px-4 py-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg text-white font-medium flex items-center gap-2"
            >
              <FaSolidLink />
              Contact us at nixcon@nixos.org
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
