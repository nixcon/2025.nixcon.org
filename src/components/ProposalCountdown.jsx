import { createEffect, createSignal, onCleanup } from "solid-js"

export function ProposalCountdown() {
  // Set the target date to August 1, 2025 03:59 (Europe/Zurich)
  const targetDate = new Date("2025-08-01T03:59:00+02:00")

  // Create signals for the countdown values
  const [days, setDays] = createSignal(0)
  const [hours, setHours] = createSignal(0)
  const [minutes, setMinutes] = createSignal(0)
  const [seconds, setSeconds] = createSignal(0)
  const [isExpired, setIsExpired] = createSignal(false)

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
      setIsExpired(true)
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
    setIsExpired(false)
  }

  // Set up the interval to update the countdown every second
  createEffect(() => {
    // Initial update
    updateCountdown()

    // Set up interval - update every second
    const intervalId = setInterval(updateCountdown, 1000)

    // Clean up the interval when the component is unmounted
    onCleanup(() => clearInterval(intervalId))
  })

  const pad = (num) => num.toString().padStart(2, "0")

  return (
    <div class="inline-flex items-center gap-2 font-mono text-sm">
      <div class="flex items-center gap-1">
        <div class="flex flex-col items-center justify-center border rounded-lg px-2 py-4 min-w-[70px]">
          <div class="font-bold text-xl">{days()}</div>
          <div class="text-sm uppercase">days</div>
        </div>
        <span class="text-base">:</span>
        <div class="flex flex-col items-center justify-center border rounded-lg px-2 py-4 min-w-[70px]">
          <div class="font-bold text-xl">{pad(hours())}</div>
          <div class="text-sm uppercase">hrs</div>
        </div>
        <span class="text-base">:</span>
        <div class="flex flex-col items-center justify-center border rounded-lg px-2 py-4 min-w-[70px]">
          <div class="font-bold text-xl">{pad(minutes())}</div>
          <div class="text-sm uppercase">mins</div>
        </div>
        <span class="text-base">:</span>
        <div class="flex flex-col items-center justify-center border rounded-lg px-2 py-4 min-w-[70px]">
          <div class="font-bold text-xl">{pad(seconds())}</div>
          <div class="text-sm uppercase">secs</div>
        </div>
      </div>
    </div>
  )
}