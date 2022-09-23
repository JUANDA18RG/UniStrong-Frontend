import { Box, Container } from '@mui/material';

import Hero from '../components/Hero';
import SearchExercise from '../components/SearchExercise';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black.main' }}>
      <Container sx={{ minHeight: '100vh' }}>
        <Hero />
        <SearchExercise />
      </Container>
    </Box>
  );
};

export default Home;
