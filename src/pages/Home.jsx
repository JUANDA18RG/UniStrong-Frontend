import { Box, Container } from '@mui/material';

import Hero from '../components/Hero';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black.main' }}>
      <Container>
        <Hero />
      </Container>
    </Box>
  );
};

export default Home;
