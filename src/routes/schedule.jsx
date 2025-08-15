import { onMount } from "solid-js"
import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { Title, SecondaryButtonLink } from "~/components/Ui"

export default function Schedule() {
  let scheduleContainer

  onMount(() => {
    // Check if the pretalx-schedule custom element is already defined
    if (!customElements.get('pretalx-schedule')) {
      // Load the pretalx widget script only if not already loaded
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://talks.nixcon.org/nixcon-2025/widgets/schedule.js'
      document.head.appendChild(script)
    }
  })

  return (
    <div class="relative min-h-svh text-white">
      <div style={{ "background-color": "var(--theme-background-translucent)" }}>
        <Section class="!min-h-[10vh] !pt-20 !pb-10 px-5">
          <Title>Schedule</Title>
          <div class="mt-6">
            <SecondaryButtonLink
              href="https://talks.nixcon.org/nixcon-2025/schedule/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Pretalx
            </SecondaryButtonLink>
          </div>
        </Section>
        <div class="">
          <div style="padding-top: 100px;" ref={scheduleContainer}>
            <div
              innerHTML={`
                  <pretalx-schedule
                    event-url="https://talks.nixcon.org/nixcon-2025/"
                    locale="en"
                    format="grid"
                    style="--pretalx-clr-primary: #ff8b00; --pretalx-sticky-top-offset: 72px; background-color: #fafafa; width: 100vw; display: block;">
                  </pretalx-schedule>
                  <noscript>
                    <div class="pretalx-widget">
                      <div class="pretalx-widget-info-message">
                        JavaScript is disabled in your browser. To access our schedule without JavaScript,
                        please <a target="_blank" href="https://talks.nixcon.org/nixcon-2025/schedule/">click here</a>.
                      </div>
                    </div>
                  </noscript>
                `}
            />
          </div>
        </div>
      </div>
      <div class="h-20"></div>
    </div>
  )
}