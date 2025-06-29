import { createEffect, createSignal, onCleanup } from "solid-js"

export function Countdown() {
  // Set the target date to September 5, 2025 (event start date)
  const targetDate = new Date("2025-09-05T08:00:00")

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
    <div class="font-bold uppercase text-2xl tabular-nums ml-auto text-[24.5px] sm:text-[33px] md:text-[49px]">
        <span>{days()}</span><span class="font-normal text-xs sm:text-sm pl-1 pr-5">days</span>
        <span>{pad(hours())}</span><span class="font-normal text-xs sm:text-sm pl-1 pr-5">hours</span>
        <span>{pad(minutes())}</span><span class="font-normal text-xs sm:text-sm pl-1 pr-2">minutes</span>
    </div>
  )
}
