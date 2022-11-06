import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ExercisesProvider } from './context/ExercisesContext';
import { FavoritesProvider } from './context/FavoritesContext';

const App = () => {
  return (
    <>
      <Navbar />
      <ExercisesProvider>
        <FavoritesProvider>
          <Outlet />
        </FavoritesProvider>
      </ExercisesProvider>
      <Footer />
    </>
  );
};

export default App;
