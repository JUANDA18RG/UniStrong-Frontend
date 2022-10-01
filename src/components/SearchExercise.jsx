import {
  Button,
  Checkbox,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useExercises } from '../context/ExercisesContext';

const SearchExercise = ({ selectedBodyParts, setSelectedBodyParts }) => {
  const { bodyParts } = useExercises();

  const handleSelectedBodyParts = (event) => {
    if (event.target.value.length === 0) {
      setSelectedBodyParts(['all']);
      return;
    }
    setSelectedBodyParts(
      event.target.value.filter((bodyPart) => bodyPart !== 'all')
    );
  };

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      py={3}
    >
      <Select
        multiple
        value={selectedBodyParts}
        onChange={handleSelectedBodyParts}
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
              checked={selectedBodyParts.includes(bodyPart)}
              color="redPigment"
            />
            {bodyPart}
          </MenuItem>
        ))}
      </Select>
      <TextField
        color="redPigment"
        label="Search"
        placeholder="Search exercise, target muscle or equipment"
        sx={{ width: { xs: 1, sm: 4 / 10 } }}
      />
      <Button
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
