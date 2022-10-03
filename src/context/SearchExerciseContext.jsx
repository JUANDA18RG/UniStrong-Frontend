import { createContext, useContext, useState, useEffect } from 'react';
import { useExercises } from './ExercisesContext';

const SearchExerciseContext = createContext();

const SearchExerciseProvider = ({ children }) => {
  const [selectedBodyParts, setSelectedBodyParts] = useState(['all']);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const { exercises } = useExercises();

  const searchExercise = () => {
    return (
      exercises.length > 0 &&
      exercises.filter(
        (exercise) =>
          (selectedBodyParts.includes('all') ||
            selectedBodyParts.includes(exercise.bodyPart)) &&
          (exercise.name.includes(searchQuery) ||
            exercise.equipment.includes(searchQuery) ||
            exercise.target.includes(searchQuery))
      )
    );
  };

  useEffect(() => {
    setSearchResult(searchExercise());
  }, [exercises, searchQuery, selectedBodyParts]);

  const values = {
    setSelectedBodyParts,
    setSearchQuery,
    searchResult,
  };

  return (
    <SearchExerciseContext.Provider value={values}>
      {children}
    </SearchExerciseContext.Provider>
  );
};

const useSearchExercise = () => useContext(SearchExerciseContext);

export { SearchExerciseProvider, useSearchExercise };
