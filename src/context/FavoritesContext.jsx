import { createContext, useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.favorites ? JSON.parse(localStorage.favorites) : []
  );

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showSnackbar = (isItAdded, itemId) => {
    const key = enqueueSnackbar(
      `The exercise ${isItAdded ? 'added to' : 'removed from'} favorites.`,
      {
        autoHideDuration: 3000,
        variant: isItAdded ? 'success' : 'error',
        action: (
          <Button
            onClick={() => {
              setFavorites((prevFavorites) =>
                isItAdded
                  ? prevFavorites.filter((favoriteId) => favoriteId !== itemId)
                  : [...prevFavorites, itemId]
              );
              closeSnackbar(key);
            }}
            color="cultured"
          >
            Undo
          </Button>
        ),
      }
    );
  };

  const handleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((exerciseId) => exerciseId !== id)
      );
      showSnackbar(false, id);
      return;
    }

    setFavorites((prevFavorites) => [...prevFavorites, id]);
    showSnackbar(true, id);
  };

  useEffect(() => {
    localStorage.favorites = JSON.stringify(favorites);
  }, [favorites]);

  const values = {
    favorites,
    handleFavorites,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

const useFavorites = () => useContext(FavoritesContext);

export { FavoritesProvider, useFavorites };
