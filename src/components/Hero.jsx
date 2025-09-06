import { Countdown } from "./Countdown"
import { Logo } from "./Logo"
import { Paragraph, Title } from "./Ui"

import { clientOnly } from "@solidjs/start"
import { Show } from "solid-js"
import { useAnimationStore } from "~/stores/animation"

const ClientPlayPause = clientOnly(() => import("~/components/PlayPause"))

const claim =
  "Join the Nix community for hands-on learning, inspiring talks, and real connections — whether you're just getting started or deep into declarative dreams."

export function Hero() {
  const { webglNotAvailable } = useAnimationStore()
  return (
    <section class="min-h-screen sm:h-screen pt-22 flex flex-col sm:flex-row relative mx-auto p-5">
      <div class="h-[50vh] sm:h-full w-full sm:w-1/3 flex sm:pl-20">
        <div class="sm:h-2/3 w-full sm:mt-auto">
          <Logo />
        </div>
      </div>

      <div class="sm:w-2/3 flex flex-col h-full justify-between items-end">
        <div class="sm:m-auto p-10 flex flex-col gap-5">
          <Paragraph className="sm:text-lg">{claim}</Paragraph>
          <Show when={!webglNotAvailable()}>
            <ClientPlayPause />
          </Show>
        </div>

        <div class="flex flex-col">
          {/* <Countdown /> */}
          <div class="text-[24.5px] sm:text-[33px] md:text-[49px] font-bold -my-2 uppercase">5-7 September 2025</div>
          <Title>SWITZERLAND</Title>
        </div>
      </div>
    </section>
  )
}
