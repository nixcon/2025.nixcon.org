import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, Title } from "~/components/Ui"

export default function Privacy() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Title>Privacy Policy</Title>

        <Section title="">
          {" "}
          {/* Title can be omitted if the main H1 is sufficient */}
          <Paragraph>
            By using the website, you agree to the collection and use of information in accordance with this Privacy
            Policy.
          </Paragraph>
        </Section>

        <Section title="Data Collection">
          <Paragraph>
            This website is hosted on GitHub Pages, which may collect some data. See{" "}
            <a
              href="https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-white/80 transition-colors"
            >
              this page
            </a>{" "}
            for details on GitHub Pages data collection and{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-white/80 transition-colors"
            >
              this page
            </a>{" "}
            for GitHub's General Privacy Statement.
          </Paragraph>
        </Section>

        <Section title="Third-Party Links">
          <Paragraph>
            This website may contain links to other websites that are not operated by us. If you click on such links,
            you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of
            every site you visit. We have no control over and assume no responsibility for the content, privacy policies
            or practices of any third party sites or services.
          </Paragraph>
        </Section>

        <Section title="Cookies and Tracking">
          <Paragraph>
            This website does not set cookies of any type and does not employ any trackers. However, we do use the
            pretalx widget service for displaying our conference schedule, which loads external JavaScript from
            talks.nixcon.org. The main website content is viewable without JavaScript, but the schedule page
            requires JavaScript to display the pretalx widget.
          </Paragraph>
        </Section>

        <Section title="Pretalx Widget">
          <Paragraph>
            Our schedule page uses a self-hosted pretalx widget service at{" "}
            <a
              href="https://talks.nixcon.org/nixcon-2025/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-white/80 transition-colors"
            >
              talks.nixcon.org
            </a>
            {" "}to display conference schedules and talk information. When you visit the schedule page, your browser
            will load JavaScript from this service. For information about data handling by our pretalx instance,
            please see the{" "}
            <a
              href="https://talks.nixcon.org/nixcon-2025/privacy"
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-white/80 transition-colors"
            >
              pretalx privacy policy
            </a>
            .
          </Paragraph>
        </Section>

        <Section title="Policy Changes">
          <Paragraph>
            We may change this Privacy Policy from time to time. You are advised to review this Privacy Policy
            periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this
            page.
          </Paragraph>
        </Section>

        <Section title="Contact Us">
          <Paragraph>
            If you have any questions, don't hesitate to send an email to{" "}
            <a href="mailto:foundation@nixos.org" class="underline hover:text-white/80 transition-colors">
              foundation@nixos.org
            </a>
            .
          </Paragraph>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
