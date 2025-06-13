import { BsPauseFill } from "@aminya/solid-icons/bs/BsPauseFill"
import { BsPlayFill } from "@aminya/solid-icons/bs/BsPlayFill"
import { useAnimationStore } from "~/stores/animation"
import { SecondaryButtonWithoutFlake } from "./Ui"

export function PlayPause() {
  const { isAnimationOn, toggleAnimationMode } = useAnimationStore()

  // Handle toggle button click
  const handleToggleClick = () => {
    toggleAnimationMode()
  }

  const playPauseIcon = !isAnimationOn() ? <BsPlayFill size={24} /> : <BsPauseFill size={24} />

  return (
    <SecondaryButtonWithoutFlake onClick={handleToggleClick} aria-label="Toggle animation">
      Blobble {playPauseIcon}
    </SecondaryButtonWithoutFlake>
  )
}
