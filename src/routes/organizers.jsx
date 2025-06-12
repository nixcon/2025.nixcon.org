import { FaBrandsDiscourse } from "@aminya/solid-icons/fa/FaBrandsDiscourse"
import { FaBrandsGithub } from "@aminya/solid-icons/fa/FaBrandsGithub"
import { SiMatrix } from "@aminya/solid-icons/si/SiMatrix"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SubTitle, Title } from "~/components/Ui" // Assuming SubTitle can be used for organizer names

// Define the organizer type
const organizers = [
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
    name: "hrmny",
    github: "ForsakenHarmony",
    githubUrl: "https://github.com/ForsakenHarmony",
    matrix: "@hrmny:matrix.org",
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

export default function Organizers() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Section>
          <Title>Meet the Organizers</Title>
          <Paragraph>NixCon 2025 is organized by a dedicated team of volunteers from the Nix community.</Paragraph>
        </Section>
        <Section title="">
          {/* Organizers Grid */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {" "}
            {/* Adjusted gap and lg breakpoint */}
            {organizers.map((organizer) => (
              <div class="bg-white/5 p-6 rounded-xl border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors duration-300">
                {/* GitHub Profile Picture */}
                <div class="w-28 h-28 rounded-full bg-white/20 mb-4 overflow-hidden">
                  {" "}
                  {/* Enhanced image style */}
                  <img
                    src={
                      organizer.github
                        ? `https://github.com/${organizer.github}.png`
                        : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff' opacity='0.5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
                    }
                    alt={`${organizer.name}'s profile picture`}
                    class="w-full h-full object-cover"
                    onError={(e) => {
                      const target = /** @type {HTMLImageElement} */ (e.target)
                      target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff' opacity='0.5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
                    }}
                  />
                </div>
                {/* Name */}
                <div class="text-3xl uppercase font-bold">{organizer.name}</div> {/* Used SubTitle, adjusted size */}
                {/* Responsibilities */}
                <div class="mt-4 mb-4 min-h-[3rem]">
                  {" "}
                  {/* Added min-height for consistency */}
                  <div class="flex flex-wrap justify-center gap-1.5">
                    {organizer.responsibilities.map((responsibility) => (
                      <span class="px-3.5 py-1 text-sm tracking-tight bg-white/15 rounded-full font-mono">
                        {responsibility}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Social Links */}
                <div class="flex gap-4 mt-auto pt-3">
                  {" "}
                  {/* mt-auto to push to bottom, pt for spacing */}
                  {organizer.githubUrl && (
                    <a
                      href={organizer.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white/70 hover:text-white transition-colors"
                      title={`GitHub: ${organizer.github}`}
                    >
                      <FaBrandsGithub class="text-2xl" /> {/* Increased icon size */}
                    </a>
                  )}
                  {organizer.matrixUrl && (
                    <a
                      href={organizer.matrixUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white/70 hover:text-white transition-colors"
                      title={`Matrix: ${organizer.matrix}`}
                    >
                      <SiMatrix class="text-2xl" /> {/* Increased icon size */}
                    </a>
                  )}
                  {organizer.discourseUrl && (
                    <a
                      href={organizer.discourseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-white/70 hover:text-white transition-colors"
                      title={`Discourse: ${organizer.discourse}`}
                    >
                      <FaBrandsDiscourse class="text-2xl" /> {/* Increased icon size */}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="">
          <Paragraph>
            Co-organised with{" "}
            <a
              href="https://ost.ch/ifs"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-white/80 transition-colors"
            >
              OST Eastern Switzerland University of Applied Sciences
            </a>
            .
          </Paragraph>
          <Paragraph>
            For any questions about the organizing team, please contact{" "}
            <a href="mailto:nixcon@nixos.org" class="underline hover:text-white/80 transition-colors">
              nixcon@nixos.org
            </a>
            .
          </Paragraph>
        </Section>
      </PageLayout>

      <div class="h-20"></div>
    </div>
  )
}
