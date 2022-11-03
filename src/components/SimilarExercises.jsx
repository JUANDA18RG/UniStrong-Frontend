import { Box, Typography } from '@mui/material';
import { useExercises } from '../context/ExercisesContext';
import HorizontalMenu from './HorizontalMenu';
import Loading from './Loading';

const SimilarExercises = ({ currentExercise }) => {
  const { exercises } = useExercises();
  const currentTarget = currentExercise?.target;
  const currentEquipment = currentExercise?.equipment;

  const filterExercises = (exercise, type, count) => {
    return (
      exercises.length &&
      exercises
        .filter(
          (exercisesItem) =>
            exercisesItem.id !== exercise.id &&
            exercisesItem[type] === exercise[type]
        )
        .slice(0, count)
    );
  };

  const sameTargetExercises =
    currentExercise && filterExercises(currentExercise, 'target', 20);
  const sameEquipmentExercises =
    currentExercise && filterExercises(currentExercise, 'equipment', 20);

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
      {currentTarget ? (
        <HorizontalMenu data={sameTargetExercises} />
      ) : (
        <Loading width={200} height={200} />
      )}
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
      {currentEquipment ? (
        <HorizontalMenu data={sameEquipmentExercises} />
      ) : (
        <Loading width={200} height={200} />
      )}
    </Box>
  );
};

export default SimilarExercises;
