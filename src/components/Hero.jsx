import { Logo } from "./Logo"
import { PlayPause } from "./PlayPause"
import { Paragraph, Title } from "./Ui"

const claim =
  "Join the Nix community for hands-on learning, inspiring talks, and real connections — whether you're just getting started or deep into declarative dreams."

export function Hero() {
  return (
    <section class="min-h-screen sm:h-screen pt-22 flex flex-col sm:flex-row relative mx-auto p-5">
      <div class="h-[50vh] sm:h-full w-full sm:w-1/3 flex sm:pl-20">
        <div class="sm:h-2/3 w-full sm:mt-auto">
          <Logo />
        </div>
      </div>

      <div class="sm:w-2/3 flex flex-col h-full justify-between items-end">
        <div class="sm:m-auto p-10">
          <Paragraph className="sm:text-lg">{claim}</Paragraph>
          <PlayPause />
        </div>

        <div class="">
          <div class="text-[25px] sm:text-[] md:text-[52px] font-bold">5-7 September, 2025</div>
          <Title>SWITZERLAND</Title>
        </div>
      </div>
    </section>
  )
}
