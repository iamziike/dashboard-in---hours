export const dragOut = {
  variants: {
    hidden: { opacity: 0, x: '100vh' },
    visible: {
      opacity: 1,
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
