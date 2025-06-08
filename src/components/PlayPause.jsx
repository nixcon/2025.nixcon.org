import { BsPauseFill } from "@aminya/solid-icons/bs/BsPauseFill";
import { BsPlayFill } from "@aminya/solid-icons/bs/BsPlayFill";
import { useAnimationStore } from "~/stores/animation";


export function PlayPause() {
  const { isAnimationOn, toggleAnimationMode } = useAnimationStore();

  // Handle toggle button click
  const handleToggleClick = () => {
    toggleAnimationMode();
  };

  return (<button
    onClick={handleToggleClick}
    class="my-8 p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-white flex items-center justify-center"
    aria-label="Toggle animation"
  >
    {!isAnimationOn() ? <BsPlayFill size={24} /> : <BsPauseFill size={24} />}
  </button>)
}