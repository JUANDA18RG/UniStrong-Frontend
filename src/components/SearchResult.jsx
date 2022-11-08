import { useEffect, useState } from 'react';
import { useExercises } from '../context/ExercisesContext';
import { useSearchExercise } from '../context/SearchExerciseContext';
import {
  Box,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExerciseCard from './ExerciseCard';
import Loading from './Loading';

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { exercises } = useExercises();
  const { searchResult } = useSearchExercise();

  const theme = useTheme();
  const matchWithSmall = useMediaQuery(theme.breakpoints.up('sm'));
  const matchWithVerySmall = useMediaQuery(theme.breakpoints.down(380));

  const EXERCISES_PER_PAGE = 9;
  const startPointIndex = (currentPage - 1) * EXERCISES_PER_PAGE;
  const endPointIndex = currentPage * EXERCISES_PER_PAGE;
  const exercisesInPage =
    searchResult.length > 0 &&
    searchResult.slice(startPointIndex, endPointIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchResult]);

  const handlePagination = (_, value) => {
    setCurrentPage(value);
  };

  if (!exercises.length) return <Loading />;

  return (
    <Stack
      justifyContent={{ xs: 'flex-start', sm: 'center' }}
      alignItems="center"
      minHeight="70vh"
    >
      {searchResult.length > 0 ? (
        <>
          <Stack
            id="search-result"
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            sx={(theme) => ({
              gap: theme.spacing(5, 8),
              py: 5,
              flex: 1,
              minWidth: 0,
              width: 1,
            })}
          >
            {exercisesInPage.length > 0 &&
              exercisesInPage.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exerciseData={exercise}
                  includeBadges
                />
              ))}
          </Stack>
          {searchResult.length > EXERCISES_PER_PAGE && (
            <Stack alignItems="center">
              <Pagination
                count={Math.ceil(searchResult.length / EXERCISES_PER_PAGE)}
                page={currentPage}
                size={matchWithSmall ? 'large' : 'medium'}
                hideNextButton={matchWithVerySmall}
                hidePrevButton={matchWithVerySmall}
                onChange={handlePagination}
                renderItem={(item) => (
                  <PaginationItem
                    component="a"
                    href="#search-result"
                    {...item}
                  />
                )}
              />
            </Stack>
          )}
        </>
      ) : (
        <Stack
          alignItems="center"
          justifyContent={{ xs: 'flex-start', md: 'center' }}
          textAlign="center"
        >
          <Box
            sx={{
              flex: 2,
              width: { xs: 300, sm: 400, md: 500 },
              height: { xs: 300, sm: 400, md: 500 },
            }}
          >
            <lottie-player
              src="https://assets8.lottiefiles.com/packages/lf20_r71cen62.json"
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
              The exercise is{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline',
                  color: 'redRYB.main',
                  fontWeight: 700,
                }}
              >
                not found.
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
              Maybe you can try another one.
            </Typography>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default SearchResult;
