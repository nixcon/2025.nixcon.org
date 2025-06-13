import { FaBrandsDiscourse } from "@aminya/solid-icons/fa/FaBrandsDiscourse"
import { FaBrandsGithub } from "@aminya/solid-icons/fa/FaBrandsGithub"
import { SiMatrix } from "@aminya/solid-icons/si/SiMatrix"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, Title } from "~/components/Ui" // Assuming SubTitle can be used for organizer names
import { organizers } from "~/data/organizers"

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
