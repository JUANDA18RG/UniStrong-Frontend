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
      minHeight={{ xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)' }}
    >
      <Stack
        alignSelf="stretch"
        justifyContent="space-around"
        alignItems="center"
      >
        <Stack flex={3} justifyContent="center" spacing={3} textAlign="center">
          <Typography
            variant="h3"
            component="h1"
            color="redRYB.main"
            sx={(theme) => ({
              fontSize: {
                xs: theme.typography.h4.fontSize,
                sm: theme.typography.h3.fontSize,
              },
              fontWeight: 300,
            })}
          >
            Fitness Club
          </Typography>
          <Typography
            variant="h2"
            component="p"
            sx={(theme) => ({
              fontSize: {
                xs: theme.typography.h3.fontSize,
                sm: theme.typography.h2.fontSize,
              },
              fontWeight: 300,
            })}
          >
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
            sx={(theme) => ({
              padding: theme.spacing(1.5, 5),
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: 1.5,
            })}
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
