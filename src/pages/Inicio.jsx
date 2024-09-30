import Presentacion from "../components/Presentacion";
import Calendar from "../components/Horario";
import Ejercicios from "../components/Ejercicios";
import Nutricion from "../components/Nutricion ";

const Inicio = () => {
  return (
    <>
      <Presentacion />
      <Calendar />
      <Ejercicios />
      <Nutricion />
    </>
  );
};

export default Inicio;
