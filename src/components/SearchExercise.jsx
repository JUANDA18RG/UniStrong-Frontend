import { useState } from 'react';
import {
  Button,
  Checkbox,
  InputBase,
  ListItem,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useExercises } from '../context/ExercisesContext';
import { useSearchExercise } from '../context/SearchExerciseContext';
import { useForm } from 'react-hook-form';

const SearchExercise = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bodyPartsFilter, setBodyPartsFilter] = useState(['all']);
  const { bodyParts } = useExercises();
  const { setSelectedBodyParts, setSearchQuery } = useSearchExercise();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ exerciseSearch }) => {
    setSearchQuery(exerciseSearch.toLowerCase());
  };

  const handleBodyPartsFilter = (event) => {
    if (event.target.value.length === 0) {
      setBodyPartsFilter(['all']);
      return;
    }
    setBodyPartsFilter(
      event.target.value.filter((bodyPart) => bodyPart !== 'all')
    );
  };

  const handleClose = () => {
    setSelectedBodyParts(bodyPartsFilter);
    setIsOpen(false);
  };

  return (
    <Stack
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      autoComplete="off"
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      py={3}
    >
      <Select
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={handleClose}
        value={bodyPartsFilter}
        onChange={handleBodyPartsFilter}
        multiple
        input={<InputBase />}
        renderValue={(selected) => (
          <Typography variant="body2">
            Fitler by Body Part <br />
            <Typography
              variant="caption"
              component="span"
              color="redPigment.main"
              sx={{
                display: selected.includes('all') ? 'none' : 'inline',
              }}
            >
              {selected.length} Selected
            </Typography>
          </Typography>
        )}
        sx={{ width: 150, height: 30 }}
      >
        {bodyParts.map((bodyPart) => (
          <MenuItem
            key={bodyPart}
            value={bodyPart}
            sx={{
              '&.Mui-selected': { bgcolor: 'rgba(230, 33, 33, 0.1)' },
              '&.Mui-selected:hover': { bgcolor: 'rgba(230, 33, 33, 0.2)' },
            }}
          >
            <Checkbox
              checked={bodyPartsFilter.includes(bodyPart)}
              color="redPigment"
            />
            {bodyPart}
          </MenuItem>
        ))}
        <ListItem>
          <Button onClick={handleClose} color="redRYB" sx={{ ml: 'auto' }}>
            Apply
          </Button>
        </ListItem>
      </Select>
      <TextField
        {...register('exerciseSearch')}
        color="redPigment"
        label="Search"
        placeholder="Search exercise, target muscle or equipment"
        sx={{ width: { xs: 1, sm: 4 / 10 }, height: 56 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="redPigment"
        size="large"
        sx={{
          height: { xs: 48, sm: 56 },
          width: { xs: 140, sm: 120 },
          padding: 1.5,
          letterSpacing: 0.9,
        }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchExercise;
