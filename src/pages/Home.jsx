import { Box, Container } from '@mui/material';

import Hero from '../components/Hero';

const Home = () => {
  return (
    <Box sx={{ bgcolor: 'black.main' }}>
      <Container
        sx={{ height: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)' } }}
      >
        <Hero />
      </Container>
    </Box>
  );
};

export default Home;
