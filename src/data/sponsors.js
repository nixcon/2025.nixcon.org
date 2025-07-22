/**
 * @typedef {object} Sponsor
 * @property {string} name - The name of the sponsoring company or individual.
 * @property {string | null} logoUrl - The URL of the sponsor's logo. Null if no logo.
 * @property {string} websiteUrl - The URL to the sponsor's website.
 * @property {'Diamond' | 'Gold' | 'Silver' | 'Bronze' | 'Custom'} tier - The sponsorship tier.
 * @property {boolean} invert - Invert black logos to match white foreground color
 */

/** @type {Sponsor[]} */
export const sponsors = [
  // Example of how to add a sponsor:
  // {
  //   name: "Example Sponsor Inc.",
  //   logoUrl: "https://example.com/logo.png",
  //   websiteUrl: "https://example.com",
  //   tier: "Gold",
  //   invert: false,
  // },
  {
    name: "Flox",
    logoUrl: "/flox.svg",
    websiteUrl: "https://flox.dev/",
    tier: "Diamond",
    invert: true,
  },
  {
    name: "Clan",
    logoUrl: "/clan.svg",
    websiteUrl: "https://clan.lol/",
    tier: "Diamond",
    invert: false,
  },
  {
    name: "Framework",
    logoUrl: "/framework.png",
    websiteUrl: "https://frame.work/",
    tier: "Silver",
    invert: false,
  },
  {
    name: "Cyberus",
    logoUrl: "/cyberus.svg",
    websiteUrl: "https://cyberus-technology.de/en",
    tier: "Gold",
    invert: true,
  },
  {
    name: "Determinate Systems",
    logoUrl: "/determinate_system.svg",
    websiteUrl: "https://determinate.systems/",
    tier: "Diamond",
    invert: false,
  },
  {
    name: "Nixcademy",
    logoUrl: "/nixcademy.svg",
    websiteUrl: "https://nixcademy.com/",
    tier: "Gold",
    invert: false,
  },
  {
    name: "SoCal NUG",
    logoUrl: "/socalnug.png",
    websiteUrl: "https://socal-nug.com/",
    tier: "Bronze",
    invert: false,
  },
  {
    name: "Garnix",
    logoUrl: "/garnix.svg",
    websiteUrl: "https://garnix.io/",
    tier: "Silver",
    invert: false,
  },
  {
    name: "Helsinki",
    logoUrl: "/helsinki.svg",
    websiteUrl: "https://helsinki-systems.de/",
    tier: "Bronze",
    invert: false,
  },
  {
    name: "PDT Partners",
    logoUrl: "/PDT.svg",
    websiteUrl: "https://www.pdtpartners.com/",
    tier: "Gold",
    invert: false,
  },
  {
    name: "Tweag",
    logoUrl: "/tweag.svg",
    websiteUrl: "https://www.tweag.io/",
    tier: "Silver",
    invert: false,
  },
]
