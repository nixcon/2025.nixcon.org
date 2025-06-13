import { BsPauseFill } from "@aminya/solid-icons/bs/BsPauseFill"
import { BsPlayFill } from "@aminya/solid-icons/bs/BsPlayFill"
import { useAnimationStore } from "~/stores/animation"
import { SecondaryButtonWithoutFlake } from "./Ui"

export default function PlayPause() {
  const { isAnimationOn, toggleAnimationMode } = useAnimationStore()

  // Handle toggle button click
  const handleToggleClick = () => {
    toggleAnimationMode()
  }

  return (
    <SecondaryButtonWithoutFlake onClick={handleToggleClick} aria-label="Toggle animation">
      Blobble {isAnimationOn() ? <BsPauseFill size={24} /> : <BsPlayFill size={24} />}
    </SecondaryButtonWithoutFlake>
  )
}
