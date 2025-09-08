import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"

// Day 1 YouTube recordings
const YOUTUBE_EMBED_URL_AULA_DAY1 = "https://www.youtube-nocookie.com/embed/OXRfLgtKDz8"
const YOUTUBE_EMBED_URL_LECTURE_HALL_DAY1 = "https://www.youtube-nocookie.com/embed/gdoYNYYB_FY"

// Day 2 YouTube recordings
const YOUTUBE_EMBED_URL_AULA_DAY2 = "https://www.youtube-nocookie.com/embed/YQU6oxxat6I"
const YOUTUBE_EMBED_URL_LECTURE_HALL_DAY2 = "https://www.youtube-nocookie.com/embed/sd9sEyrXf7o"

export default function LivePage() {

  return (
    <div class="relative min-h-svh text-white">
      <PageLayout>
        <Section title="Conference Recordings">
          <div class=" space-y-2">
            <p class="">
              Watch the recordings from NixCon 2025
            </p>
          </div>
          <div class="flex flex-col items-center space-y-8">
            {/* Day 1 Recordings */}
            <div class="w-full max-w-6xl">
              <div class=" mb-6">
                <h3 class="text-xl font-semibold">Day 1 Recordings</h3>
                <p class="text-sm text-gray-300">Saturday, September 7th</p>
              </div>

              <div class="flex flex-col space-y-8">
                {/* Day 1 Aula */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Aula</h4>
                    <p class="text-xs text-gray-400">Day 1 Recording</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_AULA_DAY1}
                      title="Aula - Day 1 Recording"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>

                {/* Day 1 Lecture Hall */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Lecture Hall</h4>
                    <p class="text-xs text-gray-400">Day 1 Recording</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_LECTURE_HALL_DAY1}
                      title="Lecture Hall - Day 1 Recording"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Day 2 Recordings */}
            <div class="w-full max-w-6xl">
              <div class=" mb-6">
                <h3 class="text-xl font-semibold">Day 2 Recordings</h3>
                <p class="text-sm text-gray-300">Sunday, September 8th</p>
              </div>

              <div class="flex flex-col space-y-8">
                {/* Day 2 Aula */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Aula</h4>
                    <p class="text-xs text-gray-400">Day 2 Recording</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_AULA_DAY2}
                      title="Aula - Day 2 Recording"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>

                {/* Day 2 Lecture Hall */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Lecture Hall</h4>
                    <p class="text-xs text-gray-400">Day 2 Recording</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_LECTURE_HALL_DAY2}
                      title="Lecture Hall - Day 2 Recording"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Section>
      </PageLayout>
      <div class="h-20"></div>
    </div>
  )
}
