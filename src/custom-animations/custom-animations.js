export const dragOut = {
  variants: {
    hidden: { x: '-100vh' },
    visible: {
      x: 0,
      transition: {
        duration: 0.1,
        mass: 0.2,
        damping: 100,
      },
    },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
};
