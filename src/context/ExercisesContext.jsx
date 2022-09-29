import { createContext, useContext, useState } from 'react';
import { fetchData, options } from '../utils/fetchData';

const ExercisesContext = createContext();

const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState({});
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        { ...options, signal: controller.signal }
      );

      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        { ...options, signal: controller.signal }
      );

      setExercises(exercisesData);
      setBodyParts(bodyPartsData);
    };

    fetchExercisesData();

    return () => {
      controller.abort();
    };
  }, []);

  const values = { exercises, bodyParts };

  return (
    <ExercisesContext.Provider value={values}>
      {children}
    </ExercisesContext.Provider>
  );
};

const useExercises = useContext(ExercisesContext);

export { ExercisesProvider, useExercises };
