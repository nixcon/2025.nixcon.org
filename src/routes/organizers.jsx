import { BsPeopleFill } from '@aminya/solid-icons/bs/BsPeopleFill';
import { FaBrandsGithub } from '@aminya/solid-icons/fa/FaBrandsGithub';
import { FaBrandsDiscourse } from '@aminya/solid-icons/fa/FaBrandsDiscourse';
import { SiMatrix } from '@aminya/solid-icons/si/SiMatrix';
import PageLayout from '~/components/PageLayout';

// Define the organizer type
const organizers = [
  {
    name: "Alex",
    github: "ners",
    githubUrl: "https://github.com/ners",
    matrix: "@ners:nixos.dev",
    matrixUrl: "https://matrix.to/#/%40ners:nixos.dev",
    discourse: "ners",
    discourseUrl: "https://discourse.nixos.org/u/ners",
    responsibilities: ["Program", "Date, venue", "Website"]
  },
  {
    name: "Andreas",
    github: "Nebucatnetzer",
    githubUrl: "https://github.com/Nebucatnetzer",
    matrix: "@nebucatnetzer13:matrix.org",
    matrixUrl: "https://matrix.to/#/%40nebucatnetzer13:matrix.org",
    discourse: "Nebucatnetzer",
    discourseUrl: "https://discourse.nixos.org/u/Nebucatnetzer",
    responsibilities: ["Hotels"]
  },
  {
    name: "Andreas",
    github: "andir",
    githubUrl: "https://github.com/andir",
    matrix: "@andi:kack.it",
    matrixUrl: "https://matrix.to/#/%40andi:kack.it",
    discourse: "andir",
    discourseUrl: "https://discourse.nixos.org/u/andir",
    responsibilities: ["A/V"]
  },
  {
    name: "Antoine",
    github: "nlewo",
    githubUrl: "https://github.com/nlewo",
    matrix: "@lewo:matrix.org",
    matrixUrl: "https://matrix.to/#/%40lewo:matrix.org",
    discourse: "lewo",
    discourseUrl: "https://discourse.nixos.org/u/lewo",
    responsibilities: ["A/V"]
  },
  {
    name: "Berber",
    github: "zmberber",
    githubUrl: "https://github.com/zmberber",
    matrix: "@zmberber:matrix.org",
    matrixUrl: "https://matrix.to/#/%40zmberber:matrix.org",
    discourse: "zmberber",
    discourseUrl: "https://discourse.nixos.org/u/zmberber",
    responsibilities: ["Letters of Invitation"]
  },
  {
    name: "Enrico",
    github: "escherlies",
    githubUrl: "https://github.com/escherlies",
    matrix: "@enryco:tchncs.de",
    matrixUrl: "https://matrix.to/#/%40enryco:tchncs.de",
    responsibilities: ["Website"]
  },
  {
    name: "Farhad",
    github: "fmehta",
    githubUrl: "https://github.com/fmehta",
    matrix: "@farhad_mehta:matrix.org",
    discourse: "fmehta",
    discourseUrl: "https://discourse.nixos.org/u/fmehta",
    matrix: "@farhad_mehta:matrix.org",
    matrixUrl: "https://matrix.to/#/%40farhad_mehta:matrix.org",
    responsibilities: ["Date, venue"]
  },
  {
    name: "Ida",
    github: "idabzo",
    githubUrl: "https://github.com/idabzo",
    matrix: "@idabzo:matrix.org",
    matrixUrl: "https://matrix.to/#/%40idabzo:matrix.org",
    discourse: "idabzo",
    discourseUrl: "https://discourse.nixos.org/u/idabzo",
    responsibilities: ["Website"]
  },
  {
    name: "hrmny",
    github: "ForsakenHarmony",
    githubUrl: "https://github.com/ForsakenHarmony",
    matrix: "@hrmny:matrix.org",
    matrixUrl: "https://matrix.to/#/%40hrmny:c-base.org",
    discourse: "hrmny",
    discourseUrl: "https://discourse.nixos.org/u/hrmny",
    responsibilities: ["Tickets", "A/V"]
  },
  {
    name: "John",
    github: "john-rodewald",
    githubUrl: "https://github.com/john-rodewald",
    matrix: "@john-rodewald:nixos.dev",
    matrixUrl: "https://matrix.to/#/%40john-rodewald:nixos.dev",
    discourse: "john-rodewald",
    discourseUrl: "https://discourse.nixos.org/u/john-rodewald",
    responsibilities: ["Tickets", "Food", "A/V"]
  },
  {
    name: "Kenji",
    github: "a-kenji",
    githubUrl: "https://github.com/a-kenji",
    matrix: "@a-kenji:matrix.org",
    matrixUrl: "https://matrix.to/#/%40a-kenji:matrix.org",
    discourse: "a-kenji",
    discourseUrl: "https://discourse.nixos.org/u/a-kenji",
    responsibilities: ["Program", "Perk delivery"]
  },
  {
    name: "Lassulus",
    github: "lassulus",
    githubUrl: "https://github.com/lassulus",
    matrix: "@lassulus:lassul.us",
    matrixUrl: "https://matrix.to/#/%40lassulus:lassul.us",
    discourse: "lassulus",
    discourseUrl: "https://discourse.nixos.org/u/lassulus",
    responsibilities: ["Program", "Tickets"]
  },
  {
    name: "Pablo",
    github: "pinpox",
    githubUrl: "https://github.com/pinpox",
    matrix: "@pinpox:matrix.org",
    matrixUrl: "https://matrix.to/#/%40pinpox:matrix.org",
    discourse: "pinpox",
    discourseUrl: "https://discourse.nixos.org/u/pinpox",
    responsibilities: ["Website"]
  },
  {
    name: "Picnoir",
    github: "picnoir",
    githubUrl: "https://github.com/picnoir",
    matrix: "@picnoir:alternativebit.fr",
    matrixUrl: "https://matrix.to/#/%40picnoir:alternativebit.fr",
    discourse: "picnoir",
    discourseUrl: "https://discourse.nixos.org/u/picnoir",
    responsibilities: ["A/V"]
  },
  {
    name: "Raphael",
    github: "das-g",
    githubUrl: "https://github.com/das-g",
    matrix: "@das-g:matrix.org",
    matrixUrl: "https://matrix.to/#/%40das-g:matrix.org",
    discourse: "das-g",
    discourseUrl: "https://discourse.nixos.org/u/das-g",
    responsibilities: ["Date, venue"]
  },
  {
    name: "Ron",
    github: "refroni",
    githubUrl: "https://github.com/refroni",
    matrix: "@ronef:matrix.org",
    matrixUrl: "https://matrix.to/#/%40ronef:matrix.org",
    discourse: "ron",
    discourseUrl: "https://discourse.nixos.org/u/ron",
    responsibilities: ["Sponsorships"]
  },
  {
    name: "Sebastian",
    github: "ra33it0",
    githubUrl: "https://github.com/ra33it0",
    matrix: "@ra33it0:matrix.org",
    matrixUrl: "https://matrix.to/#/%40ra33it0:matrix.org",
    discourse: "ra33it0",
    discourseUrl: "https://discourse.nixos.org/u/ra33it0",
    responsibilities: ["Program", "Sponsorships"]
  },
  {
    name: "Silvan",
    github: "infinisil",
    githubUrl: "https://github.com/infinisil",
    matrix: "@infinisil:matrix.org",
    matrixUrl: "https://matrix.to/#/%40infinisil:matrix.org",
    discourse: "infinisil",
    discourseUrl: "https://discourse.nixos.org/u/infinisil",
    responsibilities: ["General administration", "Hotels", "Sponsorships", "Letters of Invitation"]
  }
];

export default function Organizers() {
  return (
    <PageLayout>
      <div class="flex flex-col items-center gap-5">
        <h1 class="text-2xl md:text-4xl font-bold flex items-center gap-3">
          <BsPeopleFill class="text-xl md:text-3xl" />
          Organizers
        </h1>

        <p class="text-center text-lg mb-6">
          NixCon 2025 is organized by a dedicated team of volunteers from the Nix community.
        </p>

        {/* Organizers Grid */}
        <div class="w-full">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {organizers.map((organizer) => (
              <div class="p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
                <div class="flex flex-col items-center">
                  {/* GitHub Profile Picture */}
                  <div class="w-24 h-24 rounded-full bg-white/20 mb-3 overflow-hidden">
                    <img
                      src={`https://github.com/${organizer.github}.png`}
                      alt={`${organizer.name}'s profile picture`}
                      class="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback if image fails to load
                        const target = e.target;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff' opacity='0.5'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Name */}
                  <h3 class="text-xl font-bold">{organizer.name}</h3>

                  {/* Responsibilities */}
                  <div class="mt-2 mb-3">
                    <div class="flex flex-wrap justify-center gap-1">
                      {organizer.responsibilities.map((responsibility) => (
                        <span class="px-2 py-1 text-xs bg-white/20 rounded-full">{responsibility}</span>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div class="flex gap-3 mt-2">
                    <a href={organizer.githubUrl} target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white" title={`GitHub: ${organizer.github}`}>
                      <FaBrandsGithub class="text-xl" />
                    </a>

                    {organizer.matrixUrl && (
                      <a href={organizer.matrixUrl} target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white" title={`Matrix: ${organizer.matrix}`}>
                        <SiMatrix class="text-xl" />
                      </a>
                    )}

                    {organizer.discourseUrl && (
                      <a href={organizer.discourseUrl} target="_blank" rel="noopener noreferrer" class="text-white/80 hover:text-white" title={`Discourse: ${organizer.discourse}`}>
                        <FaBrandsDiscourse class="text-xl" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p class="text-center mt-6">
          Co-organised with <a href="https://ost.ch/ifs" class="underline hover:text-white/80">OST Eastern Switzerland University of Applied Sciences</a>
          <br />
          For any questions about the organizing team, please contact <a href="mailto:nixcon@nixos.org" class="underline hover:text-white/80">nixcon@nixos.org</a>
        </p>
      </div>
    </PageLayout>
  );
}
