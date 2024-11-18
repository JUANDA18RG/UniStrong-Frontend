import React from 'react';
import { Box, Button, Stack, styled, Typography } from '@mui/material';
import BodyPartIcon from '../assets/icons/body-part.png';
import TargetIcon from '../assets/icons/target.png';
import EquipmentIcon from '../assets/icons/equipment.png';
import capitalizeString from '../utils/capitalizeString';
import Loading from './Loading';
import { useFavorites } from '../context/FavoritesContext';

const TagBoxRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  flex: 1,
  [theme.breakpoints.up('md')]: { flexDirection: 'row' },
}));

const IconBoxRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.cultured.main,
  borderRadius: '50%',
  padding: theme.spacing(1.5),
  width: 65,
  height: 65,
  transition: theme.transitions.create('background-color'),
  '&:hover': {
    backgroundColor: '#E1E1E1',
  },
}));

const Details = ({ currentExercise }) => {
  const { favorites, handleFavorites } = useFavorites();

  const {
    name: exerciseName,
    gifUrl,
    bodyPart,
    target,
    equipment,
  } = currentExercise;
  const formattedNames = {
    formattedExerciseName: capitalizeString(exerciseName),
    formattedBodyPart: capitalizeString(bodyPart),
    formattedTarget: capitalizeString(target),
    formattedEquipment: capitalizeString(equipment),
  };

  if (!Object.keys(currentExercise).length) return <Loading />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: { xs: 'center', md: 'left' },
        gap: { xs: 3, md: 'none' },
        minHeight: '600px',
      }}
    >
      <Box component="img" src={gifUrl} flex={1} maxWidth={1} />
      <Stack
        sx={{
          justifyContent: 'space-around',
          alignItems: { xs: 'center', md: 'flex-start' },
          alignSelf: 'stretch',
          gap: 5,
          flex: 1,
          p: 2,
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            variant="h4"
            component="h1"
            sx={(theme) => ({
              fontSize: { md: theme.typography.h3.fontSize },
            })}
          >
            {formattedNames.formattedExerciseName}
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={(theme) => ({
              fontSize: { md: theme.typography.h6.fontSize },
              fontWeight: 400,
            })}
          >
            <Typography variant="inherit" component="span" color="redRYB.main">
              {formattedNames.formattedExerciseName}
            </Typography>{' '}
            exercise targets your{' '}
            <Typography variant="inherit" component="span" color="redRYB.main">
              {target}.
            </Typography>{' '}
            <br />
            It is good for your{' '}
            <Typography variant="inherit" component="span" color="redRYB.main">
              {bodyPart}.
            </Typography>{' '}
            <br />
            You can do it with{' '}
            <Typography variant="inherit" component="span" color="redRYB.main">
              {equipment === 'body weight' ? `your ${equipment}` : equipment}.
            </Typography>
          </Typography>
        </Box>
        <Stack
          direction={{ xs: 'row', md: 'column' }}
          justifyContent={{ xs: 'center' }}
          spacing={3}
        >
          <TagBoxRoot>
            <IconBoxRoot>
              <Box component="img" src={BodyPartIcon} maxWidth={1} />
            </IconBoxRoot>
            <Typography variant="h6" component="p" fontWeight={400}>
              {formattedNames.formattedBodyPart}
            </Typography>
          </TagBoxRoot>
          <TagBoxRoot>
            <IconBoxRoot>
              <Box component="img" src={TargetIcon} maxWidth={1} />
            </IconBoxRoot>
            <Typography variant="h6" component="p" fontWeight={400}>
              {formattedNames.formattedTarget}
            </Typography>
          </TagBoxRoot>
          <TagBoxRoot>
            <IconBoxRoot>
              <Box component="img" src={EquipmentIcon} maxWidth={1} />
            </IconBoxRoot>
            <Typography variant="h6" component="p" fontWeight={400}>
              {formattedNames.formattedEquipment}
            </Typography>
          </TagBoxRoot>
        </Stack>
        <Box
          sx={{ width: 1, flex: 1, textAlign: { xs: 'center', md: 'start' } }}
        >
          <Button
            onClick={() => handleFavorites(currentExercise.id)}
            variant="contained"
            color="redRYB"
            sx={(theme) => ({
              padding: { sm: theme.spacing(1.5, 5) },
              fontSize: { xs: 16, sm: 18 },
              fontWeight: 400,
              letterSpacing: { xs: 1.2, sm: 1.5 },
            })}
          >
            {favorites.includes(currentExercise.id)
              ? 'Remove From Favorites'
              : 'Add Favorites'}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Details;
