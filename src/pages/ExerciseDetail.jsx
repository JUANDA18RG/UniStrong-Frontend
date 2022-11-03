import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useExercises } from '../context/ExercisesContext';
import { Container } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [currentExercise, setCurrentExercise] = useState({});
  const { id } = useParams();
  const { exercises } = useExercises();
  const navigate = useNavigate();

  useEffect(() => {
    if (exercises.length > 0) {
      const exercise = exercises.find((exercise) => exercise.id === id);

      exercise ? setCurrentExercise(exercise) : navigate('/nomatch');
    }
  }, [id, exercises]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <Container>
      <Details currentExercise={currentExercise} />
      <ExerciseVideos exerciseName={currentExercise?.name} />
      <SimilarExercises currentExercise={currentExercise} />
    </Container>
  );
};

export default ExerciseDetail;
