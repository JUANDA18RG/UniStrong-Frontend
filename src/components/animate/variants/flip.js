import { varTranExit, varTranEnter } from './transition';

// ----------------------------------------------------------------------

export const varFlip = () => {
  const durationIn = 0.6; // Duración de la animación de entrada
  const durationOut = 0.6; // Duración de la animación de salida
  const easeIn = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad para la entrada
  const easeOut = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad para la salida

  return {
    // IN
    inX: {
      initial: { rotateX: -180, opacity: 0 },
      animate: { rotateX: 0, opacity: 1, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { rotateX: -180, opacity: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
    inY: {
      initial: { rotateY: -180, opacity: 0 },
      animate: { rotateY: 0, opacity: 1, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { rotateY: -180, opacity: 0, transition: varTranExit({ durationOut, easeOut }) },
    },

    // OUT
    outX: {
      initial: { rotateX: 0, opacity: 1 },
      animate: { rotateX: 70, opacity: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
    outY: {
      initial: { rotateY: 0, opacity: 1 },
      animate: { rotateY: 70, opacity: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
  };
};