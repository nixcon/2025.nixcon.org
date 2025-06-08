import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, Title } from "~/components/Ui"

export default function Legal() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout reducedSpacing={true}>
        <Title>Legal Disclosure</Title>

        <Section title="Hosted by">
          <Paragraph>This website and event is hosted by:</Paragraph>
          <div class="mt-4">
            <Paragraph>Stichting NixOS Foundation</Paragraph>
            <Paragraph>Korte Lijnbaanssteeg 1-4318</Paragraph>
            <Paragraph>1012 SL, Amsterdam</Paragraph>
            <Paragraph>The Netherlands</Paragraph>
          </div>

          <div class="mt-4">
            <Paragraph>KvK 63520583</Paragraph>
            <Paragraph>VAT: NL855271851B01</Paragraph>
          </div>

          <div class="mt-4">
            <Paragraph>
              E-Mail:{" "}
              <a href="mailto:foundation@nixos.org" class="underline hover:text-white/80 transition-colors">
                foundation@nixos.org
              </a>
            </Paragraph>
          </div>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
