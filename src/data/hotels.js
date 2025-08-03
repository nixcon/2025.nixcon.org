/**
 * @typedef {Object} HotelDeal
 * @property {string} name - The name of the hotel.
 * @property {string} additionalInformation - Additional information about the hotel or deal.
 * @property {string[]} prices - An array of strings describing the prices.
 * @property {string} travelTime - Information about the travel time to the venue.
 * @property {string} website - The URL of the hotel's website.
 * @property {string} mapUrl - The URL to the hotel's location on a map.
 * @property {string} bookingInfo - Instructions on how to book the deal.
 * @property {string} [imagePath] - The path to an image for the hotel deal.
 * @property {string} [imageAlt] - Alt text for the hotel deal image.
 */

/**
 * An array of hotel deal objects.
 * @type {HotelDeal[]}
 */
// Sorted by confirmation date
export const hotelDeals = [
  {
    name: "The Yarn",
    additionalInformation: "Breakfast is included.",
    prices: [],
    travelTime: "Travel time by train can be as low as 30 minutes.",
    website: "https://theyarn.ch/",
    mapUrl: "https://maps.app.goo.gl/6a5Cfi281uYqgtpu5",
    bookingInfo: "Book via email at corporate@theyarn.ch, mentioning you are attending the NixCon conference.",
    imagePath: "/the-yarn-rates.png",
    imageAlt: "The Yarn Hotel Room Rates",
  },
  {
    name: "Hotel Swiss Star",
    additionalInformation: "",
    prices: ["Single room incl. breakfast CHF 150.00/night", "Double room incl. breakfast CHF 190.00/night"],
    travelTime: "Travel time by train to OST is about 28 minutes.",
    website: "https://www.hotel-swiss-star.ch",
    mapUrl: "https://maps.app.goo.gl/RDurEWjULhBkgX3M7",
    bookingInfo: 'Book via email (info@hotel-swiss-star.ch) or phone (+41 44 578 78 00) and mention promo code "NixCon".',
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
