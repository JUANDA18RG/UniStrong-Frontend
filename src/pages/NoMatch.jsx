import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: 10,
          minHeight: { xs: 'calc(100vh - 70px)', sm: 'calc(100vh - 80px)' },
          mb: 5,
        }}
      >
        <Stack sx={{ flex: 1, textAlign: 'center', gap: 10 }}>
          <Stack
            flex={3}
            justifyContent="center"
            spacing={3}
            textAlign="center"
          >
            <Typography
              variant="h1"
              sx={(theme) => ({
                fontSize: {
                  xs: theme.typography.h2.fontSize,
                  sm: theme.typography.h1.fontSize,
                },
                fontWeight: 300,
              })}
            >
              Oops!
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              sx={(theme) => ({
                fontSize: {
                  xs: theme.typography.h4.fontSize,
                  sm: theme.typography.h3.fontSize,
                },
                fontWeight: 300,
              })}
            >
              Something went wrong.
            </Typography>
            <Typography variant="h6" component="p" fontWeight={300}>
              The link you followed may be broken, or the page may have been
              removed.
            </Typography>
          </Stack>
          <Box sx={{ width: 1, flex: 1, textAlign: 'center' }}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              color="redPigment"
              sx={(theme) => ({
                padding: theme.spacing(1.5, 5),
                fontSize: 18,
                fontWeight: 400,
                letterSpacing: 1.5,
              })}
            >
              Go To Homepage
            </Button>
          </Box>
        </Stack>
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_j3gumpgp.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </Box>
      </Box>
    </Container>
  );
};

export default NoMatch;
