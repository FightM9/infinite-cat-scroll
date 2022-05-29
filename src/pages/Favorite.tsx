import ImageList from 'components/ImageList';
import { useFavoriteCats } from 'hooks';
import { FC } from 'react';

const Favorite:FC = () => {
  const [{ favoriteCats, toggleFavorite }] = useFavoriteCats();

  return (
    <div>
      {favoriteCats.length > 0 ? (
        <ImageList
          images={favoriteCats}
          toggleFavorite={toggleFavorite}
          favoriteList={favoriteCats}
        />
      ) : (
        <p>You don't have favorite cats</p>
      )}
    </div>
  );
};

export default Favorite;
