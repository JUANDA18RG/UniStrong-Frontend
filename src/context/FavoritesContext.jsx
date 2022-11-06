import { createContext, useContext, useEffect, useState } from 'react';

const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    localStorage.favorites ? JSON.parse(localStorage.favorites) : []
  );

  const handleFavorites = (id) => {
    if (favorites.includes(id)) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((exerciseId) => exerciseId !== id)
      );
      return;
    }

    setFavorites((prevFavorites) => [...prevFavorites, id]);
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
