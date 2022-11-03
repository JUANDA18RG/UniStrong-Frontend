import { createContext, useContext, useState, useEffect } from 'react';
import { fetchData } from '../utils/fetchData';

const ExercisesContext = createContext();

const ExercisesProvider = ({ children }) => {
  const [exercises, setExercises] = useState({});
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchExercisesData = async () => {
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        'exercisedb.p.rapidapi.com',
        { signal: controller.signal }
      );

      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        'exercisedb.p.rapidapi.com',
        { signal: controller.signal }
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

const useExercises = () => useContext(ExercisesContext);

export { ExercisesProvider, useExercises };
