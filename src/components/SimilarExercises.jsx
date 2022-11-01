import { Box, Typography } from '@mui/material';
import { useExercises } from '../context/ExercisesContext';
import HorizontalMenu from './HorizontalMenu';

const SimilarExercises = ({ currentTarget, currentEquipment }) => {
  const { exercises } = useExercises();

  const sameTargetExercises =
    exercises.length &&
    exercises
      .filter((exercise) => exercise.target === currentTarget)
      .slice(0, 20);
  const sameEquipmentExercises =
    exercises.length &&
    exercises
      .filter((exercise) => exercise.equipment === currentEquipment)
      .slice(0, 20);

  return (
    <Box p={1}>
      <Typography
        variant="h5"
        component="h2"
        sx={(theme) => ({
          mb: 5,
          textAlign: { xs: 'center', md: 'left' },
          fontSize: { md: theme.typography.h4.fontSize },
        })}
      >
        More Exercises That Good For Your{' '}
        <Typography
          variant="inherit"
          component="span"
          color="redRYB.main"
          textTransform="capitalize"
        >
          {currentTarget}
        </Typography>
      </Typography>
      <HorizontalMenu data={sameTargetExercises} />
      <Typography
        variant="h5"
        component="h2"
        sx={(theme) => ({
          mt: 10,
          mb: 5,
          textAlign: { xs: 'center', md: 'left' },
          fontSize: { md: theme.typography.h4.fontSize },
        })}
      >
        More Exercises That You Can Do With{' '}
        <Typography
          variant="inherit"
          component="span"
          color="redRYB.main"
          textTransform="capitalize"
        >
          {currentEquipment}
        </Typography>
      </Typography>
      <HorizontalMenu data={sameEquipmentExercises} />
    </Box>
  );
};

export default SimilarExercises;
