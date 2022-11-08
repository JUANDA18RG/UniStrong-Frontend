import { useFavorites } from '../context/FavoritesContext';
import { Box, Container, Stack, Typography } from '@mui/material';
import ExpandableMenu from '../components/ExpandableMenu';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <Container>
      <Stack justifyContent="center" alignItems="center" mt={3} mb={10}>
        <Stack width={1}>
          <Typography variant="h2" component="h1" mb={5} align="center">
            Favorites
          </Typography>
          {favorites?.length ? (
            <ExpandableMenu data={favorites} />
          ) : (
            <Stack
              alignItems="center"
              justifyContent={{ xs: 'flex-start', md: 'center' }}
              textAlign="center"
            >
              <Box
                sx={{
                  flex: 2,
                  width: { xs: 200, sm: 250, md: 350 },
                  height: { xs: 200, sm: 250, md: 350 },
                }}
              >
                <lottie-player
                  src="https://assets8.lottiefiles.com/datafiles/vhvOcuUkH41HdrL/data.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Box>
              <Stack flex={1} alignItems="center" spacing={1}>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    fontSize: { md: '2.125rem' },
                    fontWeight: 500,
                  }}
                >
                  There is no{' '}
                  <Box
                    component="span"
                    sx={{
                      display: 'inline',
                      color: 'redRYB.main',
                      fontWeight: 700,
                    }}
                  >
                    favorites.
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    fontSize: { md: '1.25rem' },
                    fontWeight: 400,
                    color: 'text.secondary',
                  }}
                >
                  You may add one.
                </Typography>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Favorites;
