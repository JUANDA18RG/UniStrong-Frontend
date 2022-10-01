import {
  Button,
  Checkbox,
  FormControl,
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
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      py={3}
    >
      <FormControl sx={{ width: 150 }}>
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
        >
          {bodyParts.map((bodyPart) => (
            <MenuItem
              key={bodyPart}
              value={bodyPart}
              color="redPigment.main"
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
      </FormControl>
      <TextField
        color="redPigment"
        label="Search"
        placeholder="Search exercise, target muscle or equipment"
        sx={{ width: 4 / 10 }}
      />
      <Button
        variant="contained"
        color="redPigment"
        size="large"
        sx={{ height: 56, width: 120, padding: 1.5, letterSpacing: 0.9 }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchExercise;
