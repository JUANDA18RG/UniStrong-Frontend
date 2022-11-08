import { useState } from 'react';
import { useExercises } from '../context/ExercisesContext';
import { Box, Button, Collapse, styled } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import Loading from './Loading';

const MenuWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(5),
}));

const ExpandableMenu = ({ data }) => {
  const { exercises } = useExercises();
  const [expanded, setExpanded] = useState(false);
  const favoriteExercises =
    exercises.length &&
    data.map((item) => exercises.find((exercise) => exercise.id === item));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <MenuWrapper>
        {favoriteExercises ? (
          favoriteExercises
            .slice(0, 3)
            .map((favoriteExercise) => (
              <ExerciseCard
                key={favoriteExercise.id}
                exerciseData={favoriteExercise}
              />
            ))
        ) : (
          <Loading />
        )}
      </MenuWrapper>
      {favoriteExercises?.length > 3 && (
        <>
          <MenuWrapper width={1}>
            <Collapse
              in={expanded}
              sx={(theme) => ({
                width: 1,
                '& .MuiCollapse-wrapperInner': {
                  width: 1,
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: theme.spacing(5),
                },
              })}
            >
              {favoriteExercises.slice(3).map((favoriteExercise) => (
                <ExerciseCard
                  key={favoriteExercise.id}
                  exerciseData={favoriteExercise}
                />
              ))}
            </Collapse>
          </MenuWrapper>
          <Button
            onClick={() => setExpanded((prev) => !prev)}
            size="large"
            color="redRYB"
            sx={{ width: 'fit-content', mx: 'auto', mt: expanded ? 0 : -5 }}
          >
            Show {expanded ? 'Less' : 'More'}
          </Button>
        </>
      )}
    </Box>
  );
};

export default ExpandableMenu;
