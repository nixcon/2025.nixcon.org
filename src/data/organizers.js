/**
 * @typedef {Object} Organizer
 * @property {string} name - The name of the organizer.
 * @property {string} [github] - The GitHub username of the organizer.
 * @property {string} [githubUrl] - The URL to the GitHub profile of the organizer.
 * @property {string} matrix - The Matrix ID of the organizer.
 * @property {string} matrixUrl - The URL to the Matrix profile of the organizer.
 * @property {string} [discourse] - The Discourse username of the organizer.
 * @property {string} [discourseUrl] - The URL to the Discourse profile of the organizer.
 * @property {string[]} responsibilities - An array of responsibilities for the organizer.
 */

/**
 * An array of organizer objects.
 * @type {Organizer[]}
 */
export const organizers = [
  // vv Main organisers vv
  {
    name: "Alex",
    github: "ners",
    githubUrl: "https://github.com/ners",
    matrix: "@ners:nixos.dev",
    matrixUrl: "https://matrix.to/#/%40ners:nixos.dev",
    discourse: "ners",
    discourseUrl: "https://discourse.nixos.org/u/ners",
    responsibilities: ["Program", "Date, venue", "Website"],
  },
  {
    name: "John",
    github: "john-rodewald",
    githubUrl: "https://github.com/john-rodewald",
    matrix: "@john-rodewald:nixos.dev",
    matrixUrl: "https://matrix.to/#/%40john-rodewald:nixos.dev",
    discourse: "john-rodewald",
    discourseUrl: "https://discourse.nixos.org/u/john-rodewald",
    responsibilities: ["Tickets", "Food", "A/V"],
  },
  {
    name: "Lassulus",
    github: "lassulus",
    githubUrl: "https://github.com/lassulus",
    matrix: "@lassulus:lassul.us",
    matrixUrl: "https://matrix.to/#/%40lassulus:lassul.us",
    discourse: "lassulus",
    discourseUrl: "https://discourse.nixos.org/u/lassulus",
    responsibilities: ["Program", "Tickets"],
  },
  {
    name: "Silvan",
    github: "infinisil",
    githubUrl: "https://github.com/infinisil",
    matrix: "@infinisil:matrix.org",
    matrixUrl: "https://matrix.to/#/%40infinisil:matrix.org",
    discourse: "infinisil",
    discourseUrl: "https://discourse.nixos.org/u/infinisil",
    responsibilities: ["General administration", "Hotels", "Sponsorships", "Letters of Invitation"],
  },
  // ^^ Main organisers ^^
  {
    name: "Andreas",
    github: "Nebucatnetzer",
    githubUrl: "https://github.com/Nebucatnetzer",
    matrix: "@nebucatnetzer13:matrix.org",
    matrixUrl: "https://matrix.to/#/%40nebucatnetzer13:matrix.org",
    discourse: "Nebucatnetzer",
    discourseUrl: "https://discourse.nixos.org/u/Nebucatnetzer",
    responsibilities: ["Hotels"],
  },
  {
    name: "Andreas",
    github: "andir",
    githubUrl: "https://github.com/andir",
    matrix: "@andi:kack.it",
    matrixUrl: "https://matrix.to/#/%40andi:kack.it",
    discourse: "andir",
    discourseUrl: "https://discourse.nixos.org/u/andir",
    responsibilities: ["A/V"],
  },
  {
    name: "Berber",
    github: "zmberber",
    githubUrl: "https://github.com/zmberber",
    matrix: "@zmberber:matrix.org",
    matrixUrl: "https://matrix.to/#/%40zmberber:matrix.org",
    discourse: "zmberber",
    discourseUrl: "https://discourse.nixos.org/u/zmberber",
    responsibilities: ["Letters of Invitation"],
  },
  {
    name: "Enrico",
    github: "escherlies",
    githubUrl: "https://github.com/escherlies",
    matrix: "@enryco:tchncs.de",
    matrixUrl: "https://matrix.to/#/%40enryco:tchncs.de",
    responsibilities: ["Website"],
  },
  {
    name: "Farhad",
    github: "fmehta",
    githubUrl: "https://github.com/fmehta",
    discourse: "fmehta",
    discourseUrl: "https://discourse.nixos.org/u/fmehta",
    matrix: "@farhad_mehta:matrix.org",
    matrixUrl: "https://matrix.to/#/%40farhad_mehta:matrix.org",
    responsibilities: ["Date, venue"],
  },
  {
    name: "Gerd Flaig",
    github: "gefla",
    githubUrl: "https://github.com/gefla",
    matrix: "@gefla:matrix.org",
    matrixUrl: "https://matrix.to/#/%40gefla:matrix.org",
    // discourse: "???",
    // discourseUrl: "https://discourse.nixos.org/u/???",
    responsibilities: ["A/V"],
  },
  {
    name: "hrmny",
    github: "ForsakenHarmony",
    githubUrl: "https://github.com/ForsakenHarmony",
    matrix: "@hrmny:c-base.org",
    matrixUrl: "https://matrix.to/#/%40hrmny:c-base.org", // Note: Original had matrix.org, then c-base.org. Keeping c-base.org as per last entry.
    discourse: "hrmny",
    discourseUrl: "https://discourse.nixos.org/u/hrmny",
    responsibilities: ["Tickets", "A/V"],
  },
  {
    name: "Kenji",
    github: "a-kenji",
    githubUrl: "https://github.com/a-kenji",
    matrix: "@a-kenji:matrix.org",
    matrixUrl: "https://matrix.to/#/%40a-kenji:matrix.org",
    discourse: "a-kenji",
    discourseUrl: "https://discourse.nixos.org/u/a-kenji",
    responsibilities: ["Program", "Perk delivery"],
  },
  {
    name: "Picnoir",
    github: "picnoir",
    githubUrl: "https://github.com/picnoir",
    matrix: "@picnoir:alternativebit.fr",
    matrixUrl: "https://matrix.to/#/%40picnoir:alternativebit.fr",
    discourse: "picnoir",
    discourseUrl: "https://discourse.nixos.org/u/picnoir",
    responsibilities: ["A/V"],
  },
  {
    name: "Ral",
    // github: "", // No GitHub in original data
    // githubUrl: "https://github.com/",
    matrix: "@ral:fairydust.space",
    matrixUrl: "https://matrix.to/#/%40ral:fairydust.space",
    responsibilities: ["A/V"],
  },
  {
    name: "Raphael",
    github: "das-g",
    githubUrl: "https://github.com/das-g",
    matrix: "@das-g:matrix.org",
    matrixUrl: "https://matrix.to/#/%40das-g:matrix.org",
    discourse: "das-g",
    discourseUrl: "https://discourse.nixos.org/u/das-g",
    responsibilities: ["Date, venue"],
  },
  {
    name: "Sebastian",
    github: "ra33it0",
    githubUrl: "https://github.com/ra33it0",
    matrix: "@ra33it0:matrix.org",
    matrixUrl: "https://matrix.to/#/%40ra33it0:matrix.org",
    discourse: "ra33it0",
    discourseUrl: "https://discourse.nixos.org/u/ra33it0",
    responsibilities: ["Program", "Sponsorships"],
  },
]
