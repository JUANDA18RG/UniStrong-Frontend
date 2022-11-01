import { useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const Arrow = ({ rightDirection }) => {
  const scrollDirection = rightDirection ? 'scrollNext' : 'scrollPrev';
  const itemPosition = rightDirection
    ? 'isLastItemVisible'
    : 'isFirstItemVisible';

  const { [scrollDirection]: scroll, [itemPosition]: isItemVisible } =
    useContext(VisibilityContext);

  return (
    <IconButton
      disabled={isItemVisible}
      onClick={() => scroll()}
      color="redRYB"
      sx={{
        width: 50,
        height: 50,
        alignSelf: 'center',
        display: 'block',
        my: 2,
      }}
    >
      <Box
        component="img"
        src={rightDirection ? RightArrowIcon : LeftArrowIcon}
        sx={{ opacity: isItemVisible ? 0.5 : 1 }}
      />
    </IconButton>
  );
};

const HorizontalMenu = ({ data }) => {
  return (
    <Box
      sx={{
        '& .react-horizontal-scrolling-menu--scroll-container ': {
          alignItems: 'center',
          height: 450,
          padding: 1,
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',

          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }}
    >
      <ScrollMenu
        Footer={
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 1,
            }}
          >
            <Arrow />
            <Arrow rightDirection />
          </Box>
        }
      >
        {data &&
          data.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: { xs: 300, sm: 'auto' },
                width: { xs: 230, sm: 'auto' },
                mr: 5,
              }}
            >
              <ExerciseCard
                itemId={item.id}
                title={item.id}
                exerciseData={item}
              />
            </Box>
          ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalMenu;
