import { Container } from '@mui/material';
import SearchExercise from '../components/SearchExercise';
import SearchResult from '../components/SearchResult';
import { SearchExerciseProvider } from '../context/SearchExerciseContext';

const Exercises = () => {
  return (
    <Container sx={{ mb: 5 }}>
      <SearchExerciseProvider>
        <SearchExercise />
        <SearchResult />
      </SearchExerciseProvider>
    </Container>
  );
};

export default Exercises;
