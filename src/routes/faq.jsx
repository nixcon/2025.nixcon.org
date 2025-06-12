import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Paragraph, SubTitle, Title } from "~/components/Ui"
import { faqItems } from "~/data/faq.js"

export default function FaqPage() {
  return (
    <div class="relative min-h-svh text-white">
      <PageLayout>
        {/* <SubTitle>FAQ</SubTitle> */}

        <Section title="FAQ">
          {faqItems.map((item, index) => (
            <div class="py-5 first:pt-0">
              <div class="text-xl font-semibold">
                {/* You can add an icon here for open/close state if desired */}
                {item.question}
              </div>
              <div class="pt-4 text-white/90">
                {/* Added padding and slightly lighter text for answer */}
                <Paragraph>{item.answer}</Paragraph>
              </div>
            </div>
          ))}
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
