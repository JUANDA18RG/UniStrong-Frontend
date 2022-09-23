import { Button, Container, Stack, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Container sx={{ height: 80, py: 1 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        gap={5}
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
        <Stack direction="row" alignItems="center" gap={1}>
          <Button
            component={NavLink}
            to="/"
            color="richBlack"
            sx={{
              borderBottom: '3px solid transparent',
            }}
            style={({ isActive }) => ({
              borderBottom: isActive && '3px solid #FF2625',
            })}
            end
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/exercises"
            color="richBlack"
            sx={{
              borderBottom: '3px solid transparent',
            }}
            style={({ isActive }) => ({
              borderBottom: isActive && '3px solid #FF2625',
            })}
            end
          >
            Exercises
          </Button>
          <Button
            component={NavLink}
            to="/dashboard"
            color="richBlack"
            sx={{
              borderBottom: '3px solid transparent',
            }}
            style={({ isActive }) => ({
              borderBottom: isActive && '3px solid #FF2625',
            })}
            end
          >
            Dashboard
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
