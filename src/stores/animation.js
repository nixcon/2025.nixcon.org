import { createSignal } from 'solid-js';

// Default animation state is on
const [isAnimationOn, setIsAnimationOn] = createSignal(true);

export const useAnimationStore = () => {
  const toggleAnimation = () => {
    const newState = !isAnimationOn();
    setIsAnimationOn(newState);
    return newState;
  };

  return {
    isAnimationOn,
    setIsAnimationOn,
    toggleAnimation
  };
};
