import { varTranExit, varTranEnter } from './transition';

// ----------------------------------------------------------------------

export const varSlide = () => {
  const distance = 160; // Distancia predeterminada para la animación
  const durationIn = 0.6; // Duración de la animación de entrada
  const durationOut = 0.6; // Duración de la animación de salida
  const easeIn = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad de entrada
  const easeOut = [0.43, 0.13, 0.23, 0.96]; // Curva de facilidad de salida

  return {
    // IN
    inUp: {
      initial: { y: distance },
      animate: { y: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { y: distance, transition: varTranExit({ durationOut, easeOut }) },
    },
    inDown: {
      initial: { y: -distance },
      animate: { y: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { y: -distance, transition: varTranExit({ durationOut, easeOut }) },
    },
    inLeft: {
      initial: { x: -distance },
      animate: { x: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { x: -distance, transition: varTranExit({ durationOut, easeOut }) },
    },
    inRight: {
      initial: { x: distance },
      animate: { x: 0, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { x: distance, transition: varTranExit({ durationOut, easeOut }) },
    },

    // OUT
    outUp: {
      initial: { y: 0 },
      animate: { y: -distance, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { y: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
    outDown: {
      initial: { y: 0 },
      animate: { y: distance, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { y: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
    outLeft: {
      initial: { x: 0 },
      animate: { x: -distance, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { x: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
    outRight: {
      initial: { x: 0 },
      animate: { x: distance, transition: varTranEnter({ durationIn, easeIn }) },
      exit: { x: 0, transition: varTranExit({ durationOut, easeOut }) },
    },
  };
};