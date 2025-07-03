/**
 * @typedef {object} Sponsor
 * @property {string} name - The name of the sponsoring company or individual.
 * @property {string | null} logoUrl - The URL of the sponsor's logo. Null if no logo.
 * @property {string} websiteUrl - The URL to the sponsor's website.
 * @property {'Diamond' | 'Gold' | 'Silver' | 'Bronze' | 'Custom'} tier - The sponsorship tier.
 */

/** @type {Sponsor[]} */
export const sponsors = [
  // Example of how to add a sponsor:
  // {
  //   name: "Example Sponsor Inc.",
  //   logoUrl: "https://example.com/logo.png",
  //   websiteUrl: "https://example.com",
  //   tier: "Gold",
  // },
  {
    name: "Flox",
    logoUrl: "/flox.svg",
    websiteUrl: "https://flox.dev/",
    tier: "Diamond",
  },
  {
    name: "Clan",
    logoUrl: "/clan.svg",
    websiteUrl: "https://clan.lol/",
    tier: "Diamond",
  },
  {
    name: "Framework",
    logoUrl: "/framework.png",
    websiteUrl: "https://frame.work/",
    tier: "Silver",
  },
  {
    name: "Garnix",
    logoUrl: "/garnix.svg",
    websiteUrl: "https://garnix.io/",
    tier: "Silver",
  },
]
