import { useFavoriteCats, useFetchCats } from 'hooks';
import ImageList from 'components/ImageList';

import 'shared/styles/button.scss';
import 'shared/styles/page.scss';
import { FC } from 'react';

const Home:FC = () => {
  const [{ data, fetchImage, isLoading, isError, errorMessage }] =
    useFetchCats();
  const [{ favoriteCats, toggleFavorite }] = useFavoriteCats();

  if (isError) return <p>{errorMessage}</p>;

  return (
    <div className='home'>
      <ImageList
        images={data}
        toggleFavorite={toggleFavorite}
        favoriteList={favoriteCats}
      />
      {!isLoading ? (
        <div style={{ textAlign: 'center' }}>
          <button className='button' onClick={() => fetchImage()}>
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
