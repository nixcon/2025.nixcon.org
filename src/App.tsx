import { main } from "./lava/app"
import { createEffect } from 'solid-js';

function App() {
  createEffect(() => {
    main()
  })

  return (
    <>
      {/* Background */}
      <canvas id="background" class="fixed inset-0 w-screen h-screen" />

      {/* Content */}
      <div class="fixed inset-0 flex text-white">
        <section class="m-auto flex flex-col gap-5 justify-center items-center">
          <h1 class="font-bold text-6xl lg:text-8xl font-serif text-white">NixCon 2025</h1>
          <p class="text-3xl">📍 Rapperswil-Jona, 🇨🇭</p>
          <p class="mt-20">stay tuned</p>
        </section>
      </div>
    </>
  )
}

export default App
