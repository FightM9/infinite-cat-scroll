import { useEffect, useState } from 'react';
import { Cat } from 'shared/types';

/**
 * Custom hooks for saving your favorite cats in local storage
 */
export const useFavoriteCats = () => {
  const key = 'favorite-cats';
  const [favoriteCats, setFavoriteCats] = useState<Cat[]>([]);

  useEffect(() => {
    // Get favorite cats in local storage
    try {
      const item = window.localStorage.getItem(key);
      if (item) setFavoriteCats(JSON.parse(item));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    // Save current favorite cats in local storage
    window.localStorage.setItem(key, JSON.stringify(favoriteCats));
  }, [favoriteCats]);

  const toggleFavorite = (cat: Cat) => {
    const favoriteWithoutTargetCat = favoriteCats.filter(
      (favoriteCat) => favoriteCat.id !== cat.id
    );

    if (favoriteWithoutTargetCat.length === favoriteCats.length) {
      // Adding a new cat to the favorites list
      const newFavorite = [...favoriteCats, cat];
      setFavoriteCats(newFavorite);
    } else {
      // Save list without target cat
      setFavoriteCats(favoriteWithoutTargetCat);
    }
  };

  return [{ favoriteCats, toggleFavorite }];
};
