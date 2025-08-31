import { BsShuffle } from "@aminya/solid-icons/bs/BsShuffle";
import { useAnimationStore } from "~/stores/animation";

export default function Randomize() {
  const { restartAnimation } = useAnimationStore();

  const handleRandomizeClick = () => {
    restartAnimation();
  };

  return (
    <button
      onClick={handleRandomizeClick}
      class="flex items-center gap-2 px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors cursor-pointer"
      aria-label="Randomize animation"
      title="Randomize the lava animation"
    >
      <BsShuffle size={16} />
      <span class="text-sm">Randomize</span>
    </button>
  );
}