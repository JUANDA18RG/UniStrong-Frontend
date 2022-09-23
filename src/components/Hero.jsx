import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/images/banner.png';

const Hero = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      color="common.white"
      minHeight="100vh"
    >
      <Stack
        alignSelf="stretch"
        justifyContent="space-around"
        alignItems="center"
        position="relative"
      >
        <Stack
          justifyContent="center"
          flex={3}
          gap={3}
          textAlign={{ xs: 'center', md: 'start' }}
        >
          <Typography
            variant="h4"
            component="p"
            color="cultured.main"
            fontWeight={300}
          >
            Fitness Club
          </Typography>
          <Typography variant="h2" component="p">
            Sweat, Smile <br /> and Repeat
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="cultured.main"
            fontWeight={300}
          >
            Check out most effective exercises
          </Typography>
        </Stack>
        <Box sx={{ width: 1, flex: 1, textAlign: 'center' }}>
          <Button
            component={Link}
            to="/exercises"
            variant="contained"
            color="redPigment"
            sx={{
              height: 1 / 3,
              width: 8 / 10,
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: 1.5,
            }}
          >
            Explore Exercises
          </Button>
        </Box>
      </Stack>
      <Box
        component="img"
        src={BannerImage}
        sx={{
          display: { xs: 'none', md: 'block' },
          width: 2 / 5,
        }}
      ></Box>
    </Stack>
  );
};

export default Hero;
