import { varTranEnter, varTranExit } from './transition';

// ----------------------------------------------------------------------

export const varBounce = () => {
  const durationIn = 0.6;
  const durationOut = 0.4;
  const easeIn = [0.43, 0.13, 0.23, 0.96];
  const easeOut = [0.43, 0.13, 0.23, 0.96];

  return {
    // IN
    in: {
      initial: { scale: 0.3, opacity: 0 },
      animate: {
        scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
        opacity: [0, 1, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] },
    },
    inUp: {
      initial: { y: 720, scaleY: 4, opacity: 0 },
      animate: {
        y: [720, -24, 12, -4, 0],
        scaleY: [4, 0.9, 0.95, 0.985, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: [12, -24, 720],
        scaleY: [0.985, 0.9, 3],
        opacity: [1, 1, 0],
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inDown: {
      initial: { y: -720, scaleY: 4, opacity: 0 },
      animate: {
        y: [-720, 24, -12, 4, 0],
        scaleY: [4, 0.9, 0.95, 0.985, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        y: [-12, 24, -720],
        scaleY: [0.985, 0.9, 3],
        opacity: [1, 1, 0],
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inLeft: {
      initial: { x: -720, scaleX: 3, opacity: 0 },
      animate: {
        x: [-720, 24, -12, 4, 0],
        scaleX: [3, 1, 0.98, 0.995, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: [0, 24, -720],
        scaleX: [1, 0.9, 2],
        opacity: [1, 1, 0],
        transition: varTranExit({ durationOut, easeOut }),
      },
    },
    inRight: {
      initial: { x: 720, scaleX: 3, opacity: 0 },
      animate: {
        x: [720, -24, 12, -4, 0],
        scaleX: [3, 1, 0.98, 0.995, 1],
        opacity: [0, 1, 1, 1, 1],
        transition: varTranEnter({ durationIn, easeIn }),
      },
      exit: {
        x: [0, -24, 720],
        scaleX: [1, 0.9, 2],
        opacity: [1, 1, 0],
        transition: varTranExit({ durationOut, easeOut }),
      },
    },

    // OUT
    out: { animate: { scale: [0.9, 1.1, 0.3], opacity: [1, 1, 0] } },
    outUp: { animate: { y: [-12, 24, -720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] } },
    outDown: { animate: { y: [12, -24, 720], scaleY: [0.985, 0.9, 3], opacity: [1, 1, 0] } },
    outLeft: { animate: { x: [0, 24, -720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] } },
    outRight: { animate: { x: [0, -24, 720], scaleX: [1, 0.9, 2], opacity: [1, 1, 0] } },
  };
};