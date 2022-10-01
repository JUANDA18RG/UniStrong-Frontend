import { Container } from '@mui/material';
import SearchExercise from '../components/SearchExercise';
import { SearchExerciseProvider } from '../context/SearchExerciseContext';

const Exercises = () => {
  return (
    <Container>
      <SearchExerciseProvider>
        <SearchExercise />
      </SearchExerciseProvider>
    </Container>
  );
};

export default Exercises;
