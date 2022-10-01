import { useState } from 'react';
import { Box, Container } from '@mui/material';
import SearchExercise from '../components/SearchExercise';

const Exercises = () => {
  const [selectedBodyParts, setSelectedBodyParts] = useState(['all']);

  return (
    <Container>
      <SearchExercise
        selectedBodyParts={selectedBodyParts}
        setSelectedBodyParts={setSelectedBodyParts}
      />
    </Container>
  );
};

export default Exercises;
