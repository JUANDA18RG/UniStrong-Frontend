import { createContext, useContext, useState } from 'react';

const SearchExerciseContext = createContext();

const SearchExerciseProvider = ({ children }) => {
  const [selectedBodyParts, setSelectedBodyParts] = useState(['all']);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const values = {
    selectedBodyParts,
    setSelectedBodyParts,
    searchQuery,
    setSearchQuery,
    searchResult,
    setSearchResult,
  };

  return (
    <SearchExerciseContext.Provider value={values}>
      {children}
    </SearchExerciseContext.Provider>
  );
};

const useSearchExercise = () => useContext(SearchExerciseContext);

export { SearchExerciseProvider, useSearchExercise };
