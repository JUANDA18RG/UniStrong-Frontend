import { Link } from 'react-router-dom';
import capitalizeString from '../utils/capitalizeString';
import { useFavorites } from '../context/FavoritesContext';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const ExerciseCard = ({ exerciseData, includeBadges }) => {
  const { favorites, handleFavorites } = useFavorites();

  return (
    <Card
      sx={(theme) => ({
        width: { xs: 320, md: 340 },
        minWidth: 0,
        height: 400,
        borderTop: 5,
        borderTopColor: 'redRYB.main',
        transition: theme.transitions.create('transform'),
        position: 'relative',
        '&:hover': {
          transform: { xs: 'none', md: 'scale(1.05)' },
        },
      })}
    >
      <CardActionArea
        component={Link}
        to={`/exercises/${exerciseData.id}`}
        sx={{
          height: 1,
          py: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CardMedia
          component="img"
          src={exerciseData.gifUrl}
          alt={`visualize ${exerciseData.name} exercise gif`}
          loading="lazy"
          sx={{
            display: 'block',
            height: 230,
            width: 'auto',
            mx: 'auto',
          }}
        />
        <CardContent sx={{ alignSelf: 'stretch' }}>
          {includeBadges && (
            <Stack
              direction="row"
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <Chip
                label={exerciseData.bodyPart}
                sx={{ bgcolor: '#B7D7E6', cursor: 'inherit' }}
              />
              <Chip
                label={exerciseData.target}
                sx={{ bgcolor: '#fecbc7', cursor: 'inherit' }}
              />
              <Chip
                label={exerciseData.equipment}
                sx={{ bgcolor: '#FED177', cursor: 'inherit' }}
              />
            </Stack>
          )}
          <Typography
            variant="h6"
            component="p"
            mt={2}
            sx={{ verticalAlign: 'center' }}
          >
            {capitalizeString(exerciseData.name)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
        }}
      >
        <Tooltip title="Add Favorites" disableInteractive>
          <IconButton
            onClick={() => handleFavorites(exerciseData.id)}
            color="redRYB"
          >
            {favorites.includes(exerciseData.id) ? (
              <Favorite />
            ) : (
              <FavoriteBorder />
            )}
          </IconButton>
        </Tooltip>
      </Box>
    </Card>
  );
};

export default ExerciseCard;
