import { marked } from "marked"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import faqMarkdown from "~/data/faq.md?raw" // Import the raw markdown content

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
          <article
            class="prose prose-neutral prose-invert prose-p:text-white prose-li:text-white prose-li:list-['-']  prose-li:leading-4 prose-li:marker:text-white prose-headings:mt-30 lg:prose-lg"
            innerHTML={marked.parse(faqMarkdown, { async: false, gfm: true, renderer: renderer })}
          />
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
