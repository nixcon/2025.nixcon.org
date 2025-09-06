import PageLayout from "~/components/PageLayout"
import { Section } from "~/components/Section"
import { onMount } from "solid-js"
import "video.js/dist/video-js.css"

// URLs - Update these when publishing
const STREAM_1_URL = 'https://live.chaoswest.tv/nix1/main.m3u8'
const STREAM_2_URL = 'https://live.chaoswest.tv/nix2/main.m3u8'
const YOUTUBE_EMBED_URL_AULA = "https://www.youtube-nocookie.com/embed/YQU6oxxat6I"
const YOUTUBE_EMBED_URL_LECTURE_HALL = "https://www.youtube-nocookie.com/embed/sd9sEyrXf7o"

export default function LivePage() {
  let videoRef1
  let videoRef2

  onMount(() => {
    // Import video.js dynamically for client-side initialization
    import('video.js').then(({ default: videojs }) => {
      // Initialize first stream
      if (videoRef1) {
        const player1 = videojs(videoRef1, {
          controls: true,
          responsive: true,
          fluid: true,
          sources: [{
            src: STREAM_1_URL,
            type: 'application/x-mpegURL'
          }]
        })
      }

      // Initialize second stream
      if (videoRef2) {
        const player2 = videojs(videoRef2, {
          controls: true,
          responsive: true,
          fluid: true,
          sources: [{
            src: STREAM_2_URL,
            type: 'application/x-mpegURL'
          }]
        })
      }
    })
  })

  return (
    <div class="relative min-h-svh text-white">
      <PageLayout>
        <Section title="Live Streams">
          <div class=" space-y-2">
            <p class="">
              Watch the conference live via YouTube or direct HLS streams
            </p>
          </div>
          <div class="flex flex-col items-center space-y-8">
            {/* YouTube Streams */}
            <div class="w-full max-w-6xl">
              <div class=" mb-6">
                <h3 class="text-xl font-semibold">YouTube Live Streams</h3>
                <p class="text-sm text-gray-300">Watch live on YouTube</p>
              </div>

              <div class="flex flex-col space-y-8">
                {/* Aula Stream */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Aula</h4>
                    <p class="text-xs text-gray-400">YouTube Live</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_AULA}
                      title="Aula - YouTube Live Stream"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>

                {/* Lecture Hall Stream */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Lecture Hall</h4>
                    <p class="text-xs text-gray-400">YouTube Live</p>
                  </div>
                  <div class="relative w-full" style="padding-bottom: 56.25%; height: 0;">
                    <iframe
                      class="absolute top-0 left-0 w-full h-full rounded-lg"
                      src={YOUTUBE_EMBED_URL_LECTURE_HALL}
                      title="Lecture Hall - YouTube Live Stream"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Streams */}
            <div class="w-full max-w-6xl">
              <div class=" mb-6">
                <h3 class="text-xl font-semibold">Direct Streams</h3>
                <p class="text-sm text-gray-300">Same content as direct HLS streams</p>
              </div>

              <div class="flex flex-col space-y-8">
                {/* Stream 1 */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Aula</h4>
                    <p class="text-xs text-gray-400">HLS Direct Feed</p>
                  </div>
                  <div class="relative w-full rounded-lg overflow-hidden" style="padding-bottom: 56.25%; height: 0;">
                    <video
                      ref={videoRef1}
                      class="video-js vjs-default-skin absolute top-0 left-0 w-full h-full"
                      controls
                      preload="auto"
                      data-setup="{}"
                    >
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a web browser that{" "}
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>.
                        <br />
                        <br />
                        Or copy this direct stream URL for your preferred player:
                        <br />
                        <code>{STREAM_1_URL}</code>
                      </p>
                    </video>
                  </div>
                </div>

                {/* Stream 2 */}
                <div class="space-y-3">
                  <div class="">
                    <h4 class="text-lg font-medium">Lecture Hall</h4>
                    <p class="text-xs text-gray-400">HLS Direct Feed</p>
                  </div>
                  <div class="relative w-full rounded-lg overflow-hidden" style="padding-bottom: 56.25%; height: 0;">
                    <video
                      ref={videoRef2}
                      class="video-js vjs-default-skin absolute top-0 left-0 w-full h-full"
                      controls
                      preload="auto"
                      data-setup="{}"
                    >
                      <p class="vjs-no-js">
                        To view this video please enable JavaScript, and consider upgrading to a web browser that{" "}
                        <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>.
                        <br />
                        <br />
                        Or copy this direct stream URL for your preferred player:
                        <br />
                        <code>{STREAM_2_URL}</code>
                      </p>
                    </video>
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
