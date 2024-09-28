import { varTranExit, varTranEnter } from './transition';

// ----------------------------------------------------------------------

export const varRotate = () => {
  const durationIn = 0.6; // Duración de la animación de entrada
  const durationOut = 0.6; // Duración de la animación de salida
  const easeIn = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad de entrada
  const easeOut = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad de salida

  return {
    // IN
    in: {
      initial: { opacity: 0, rotate: -360 },
      animate: { opacity: 1, rotate: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { opacity: 0, rotate: -360, transition: varTranExit({ durationOut, easeOut }) },
    },

    // OUT
    out: {
      initial: { opacity: 1, rotate: 0 },
      animate: { opacity: 0, rotate: -360, transition: varTranExit({ durationOut, easeOut }) },
    },
  };
};