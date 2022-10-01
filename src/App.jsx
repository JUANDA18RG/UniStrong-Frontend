import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ExercisesProvider } from './context/ExercisesContext';

const App = () => {
  return (
    <>
      <Navbar />
      <ExercisesProvider>
        <Outlet />
      </ExercisesProvider>
      <Footer />
    </>
  );
};

export default App;
