import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: 'cultured.main',
        py: 3,
      }}
    >
      <Container>
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          <Button component={Link} to="/" color="richBlack">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              gap={2}
            >
              <Box
                component="img"
                src={Logo}
                alt="app logo"
                width={48}
                height={48}
              />
              <Typography
                variant="h5"
                component="p"
                fontFamily="logoFontFamily"
                fontWeight={700}
              >
                Golds Gym
              </Typography>
            </Stack>
          </Button>
          <Typography variant="h6" component="p" fontWeight={400}>
            Made with 💖 by{' '}
            <Box
              component="a"
              href="https://github.com/realstankle"
              target="_blank"
              rel="noopener noreferrer"
              color="common.black"
            >
              Stankle
            </Box>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
