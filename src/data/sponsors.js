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
    logoUrl: "https://private-user-images.githubusercontent.com/65275785/451546602-1b774d2e-1358-42eb-9d19-4218814ff241.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDkwNjY5MDIsIm5iZiI6MTc0OTA2NjYwMiwicGF0aCI6Ii82NTI3NTc4NS80NTE1NDY2MDItMWI3NzRkMmUtMTM1OC00MmViLTlkMTktNDIxODgxNGZmMjQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjA0VDE5NTAwMlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUyNDY2OGJjYzhkY2UyYTA4YmYzNGIzNjdmZmRmYjYwMTU1YWRhNjc2NzhiNWU5MmY3ZmMxY2M1NmUzZDFlYjQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.G1pWvScBVlPinuhCRQW_WTyv_S1iF0xFcTbiOXPqJuE",
    websiteUrl: "https://flox.dev/",
    tier: "Diamond",
  },
];
