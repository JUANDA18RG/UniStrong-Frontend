import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Button,
  Container,
  IconButton,
  Modal,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';

const ModalNavButton = styled(Button)(({ theme }) => ({
  borderBottom: '3px solid transparent',
  fontSize: 28,
  fontWeight: 300,
  transition: theme.transitions.create('transform'),
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeRoutes = {
    home: location.pathname === '/',
    exercises: location.pathname.includes('/exercises'),
    favorites: location.pathname === '/favorites',
  };

  return (
    <Container sx={{ height: { xs: 70, sm: 80 }, py: { xs: 1 / 2, sm: 1 } }}>
      <Stack
        direction="row"
        justifyContent={{ xs: 'space-between', sm: 'flex-start' }}
        alignItems="center"
        spacing={{ xs: 1, sm: 5 }}
      >
        <Button component={Link} to="/" color="richBlack">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            <img src={Logo} alt="app logo" width={48} height={48} />
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
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          display={{ xs: 'none', sm: 'block' }}
        >
          <Button
            component={NavLink}
            to="/"
            color="richBlack"
            sx={{
              borderBottom: 3,
              borderBottomColor: activeRoutes.home
                ? 'redRYB.main'
                : 'transparent',
            }}
            end
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/exercises"
            color="richBlack"
            sx={{
              borderBottom: 3,
              borderBottomColor: activeRoutes.exercises
                ? 'redRYB.main'
                : 'transparent',
            }}
          >
            Exercises
          </Button>
          <Button
            component={NavLink}
            to="/favorites"
            color="richBlack"
            sx={{
              borderBottom: 3,
              borderBottomColor: activeRoutes.favorites
                ? 'redRYB.main'
                : 'transparent',
            }}
          >
            Favorites
          </Button>
        </Stack>
        <IconButton
          onClick={() => setIsOpen(true)}
          color="richBlack"
          size="large"
          sx={{
            display: { sm: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          sx={{
            bgcolor: 'rgba(33, 33, 33, 0.7)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Stack
            spacing={5}
            sx={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <ModalNavButton
              component={NavLink}
              to="/"
              onClick={() => setIsOpen(false)}
              color="cultured"
              sx={{
                borderBottomColor: activeRoutes.home && 'redRYB.main',
              }}
              end
            >
              Home
            </ModalNavButton>
            <ModalNavButton
              component={NavLink}
              to="/exercises"
              onClick={() => setIsOpen(false)}
              color="cultured"
              sx={{
                borderBottomColor: activeRoutes.exercises && 'redRYB.main',
              }}
            >
              Exercises
            </ModalNavButton>
            <ModalNavButton
              component={NavLink}
              to="/favorites"
              onClick={() => setIsOpen(false)}
              color="cultured"
              sx={{
                borderBottomColor: activeRoutes.favorites && 'redRYB.main',
              }}
            >
              Favorites
            </ModalNavButton>
          </Stack>
        </Modal>
      </Stack>
    </Container>
  );
};

export default Navbar;
