import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SecondaryButtonLink, Title } from "~/components/Ui"

export default function NotFound() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <div class="text-center">
          {" "}
          {/* Centering container for the whole content */}
          <Section title="" align="center">
            {" "}
            {/* Using Section, align center for its content */}
            <div class="flex flex-col items-center gap-5">
              <Title className="mb-4">
                {/* Removed icon and alignment classes, kept mb-4 */}
                Page Not Found
              </Title>

              <Paragraph class="text-lg">
                {" "}
                {/* Ensured text-lg for consistency */}
                The page you're looking for doesn't exist or has been moved.
              </Paragraph>

              <SecondaryButtonLink href="/" class="mt-4">
                {" "}
                {/* Added mt-4 */}
                Return to Home
              </SecondaryButtonLink>
            </div>
          </Section>
        </div>
      </PageLayout>
      <div class="h-20"></div> {/* Consistent bottom spacing */}
    </div>
  )
}
