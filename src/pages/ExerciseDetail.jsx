import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useExercises } from '../context/ExercisesContext';
import { Container } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [currentExercise, setCurrentExercise] = useState({});
  const { id } = useParams();
  const { exercises } = useExercises();

  useEffect(() => {
    exercises.length > 0 &&
      setCurrentExercise(exercises.find((exercise) => exercise.id === id));
  }, [id, exercises]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Container>
      <Details currentExercise={currentExercise} />
      <ExerciseVideos exerciseName={currentExercise?.name} />
      <SimilarExercises
        currentTarget={currentExercise?.target}
        currentEquipment={currentExercise.equipment}
      />
    </Container>
  );
};

export default ExerciseDetail;
