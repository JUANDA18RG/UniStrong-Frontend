import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
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
import {
  Favorite,
  FavoriteBorder,
  PlaylistAdd,
  PlaylistAddCheck,
} from '@mui/icons-material';

const ExerciseCard = ({ exerciseData }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isInCollection, setIsInCollection] = useState(false);

  return (
    <Card
      sx={(theme) => ({
        width: { xs: 320, md: 340 },
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
        to={`${exerciseData.id}`}
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
          <Typography
            variant="h6"
            component="p"
            mt={2}
            sx={{ verticalAlign: 'center' }}
          >
            {exerciseData.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Stack
        direction="row"
        sx={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
        }}
      >
        <Tooltip title="Add a Collection" disableInteractive>
          <IconButton
            onClick={() => setIsInCollection((prev) => !prev)}
            color="jet"
          >
            {isInCollection ? <PlaylistAddCheck /> : <PlaylistAdd />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Add Favorites" disableInteractive>
          <IconButton
            onClick={() => setIsFavorite((prev) => !prev)}
            color="redRYB"
          >
            {isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>
      </Stack>
    </Card>
  );
};

export default ExerciseCard;
