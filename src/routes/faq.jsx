import { marked } from "marked"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { faqItems } from "~/data/faq.js"

const renderer = new marked.Renderer()
renderer.link = ({ href, text }) => {
  return `<a target="_blank" rel="noopener noreferrer" href="${href}">${text}</a>`
}

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
                <article
                  class="prose prose-neutral prose-invert prose-p:text-white prose-li:text-white prose-li:list-['-']  prose-li:leading-4 prose-ul:text-green-400 prose-li:marker:text-white"
                  innerHTML={marked.parse(item.answer, { async: false, gfm: true, renderer: renderer })}
                />
              </div>
            </div>
          ))}
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
