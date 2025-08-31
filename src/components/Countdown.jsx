import { createEffect, createSignal, onCleanup } from "solid-js"

export function Countdown() {
  // Set the target date to September 5, 2025 (event start date)
  const targetDate = new Date("2025-09-05T09:00:00+02:00")

  // Create signals for the countdown values
  const [days, setDays] = createSignal(0)
  const [hours, setHours] = createSignal(0)
  const [minutes, setMinutes] = createSignal(0)
  const [seconds, setSeconds] = createSignal(0)

  // Function to calculate and update the countdown
  const updateCountdown = () => {
    const now = new Date()
    const difference = targetDate.getTime() - now.getTime()

    // If the target date has passed, set all values to 0
    if (difference <= 0) {
      setDays(0)
      setHours(0)
      setMinutes(0)
      setSeconds(0)
      return
    }

    // Calculate time units
    const d = Math.floor(difference / (1000 * 60 * 60 * 24))
    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((difference % (1000 * 60)) / 1000)

    // Update signals
    setDays(d)
    setHours(h)
    setMinutes(m)
    setSeconds(s)
  }

  // Set up the interval to update the countdown every second
  createEffect(() => {
    // Initial update
    updateCountdown()

    // Set up interval - update every second instead of every millisecond
    const intervalId = setInterval(updateCountdown, 1000)

    // Clean up the interval when the component is unmounted
    onCleanup(() => clearInterval(intervalId))
  })

  const pad = (num) => num.toString().padStart(2, "0")

  return (
    <div class="font-bold uppercase text-2xl tabular-nums ml-auto text-[24.5px] sm:text-[33px] md:text-[49px] flex gap-2 items-center my-2 font-mono">
      <div class="flex flex-col justify-center items-center border rounded-lg p-1 sm:p-2 w-16 h-19 sm:w-18 sm:h-22 md:w-24 md:h-28">
        <div>{days()}</div>
        <div class="font-normal text-xs sm:text-sm">days</div>
      </div>

      <span>:</span>

      <div class="flex flex-col justify-center items-center border rounded-lg p-1 sm:p-2 w-16 h-19 sm:w-18 sm:h-22 md:w-24 md:h-28">
        <div>{pad(hours())}</div>
        <div class="font-normal text-xs sm:text-sm">hours</div>
      </div>

      <span>:</span>

      <div class="flex flex-col justify-center items-center border rounded-lg p-1 sm:p-2 w-16 h-19 sm:w-18 sm:h-22 md:w-24 md:h-28">
        <div>{pad(minutes())}</div>
        <div class="font-normal text-xs sm:text-sm">mins</div>
      </div>

      <span>:</span>

      <div class="flex flex-col justify-center items-center border rounded-lg p-1 sm:p-2 w-16 h-19 sm:w-18 sm:h-22 md:w-24 md:h-28">
        <div>{pad(seconds())}</div>
        <div class="font-normal text-xs sm:text-sm">secs</div>
      </div>
    </div>
  )
}
