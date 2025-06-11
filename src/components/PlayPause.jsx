import { BsPauseFill } from "@aminya/solid-icons/bs/BsPauseFill"
import { BsPlayFill } from "@aminya/solid-icons/bs/BsPlayFill"
import { useAnimationStore } from "~/stores/animation"

export function PlayPause() {
  const { isAnimationOn, toggleAnimationMode } = useAnimationStore()

  // Handle toggle button click
  const handleToggleClick = () => {
    toggleAnimationMode()
  }

  return (
    <button
      onClick={handleToggleClick}
      class="my-8 px-5 py-2 rounded-full text-white border border-white flex items-center justify-center cursor-pointer gap-2"
      aria-label="Toggle animation"
    >
      Blobble {!isAnimationOn() ? <BsPlayFill size={24} /> : <BsPauseFill size={24} />}
    </button>
  )
}
