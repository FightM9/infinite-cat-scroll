import { FC, useEffect } from 'react';
import ImageList from 'components/ImageList';
import { useFavoriteCats, useFetchCats } from 'hooks';

import 'shared/styles/button.scss';
import 'shared/styles/page.scss';

const Home: FC = () => {
  const [{ favoriteCats, toggleFavorite }] = useFavoriteCats();
  const [{ data, fetchImage, isLoading, isError, errorMessage }] = useFetchCats();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchImage();
  };

  if (data.length === 0 && isLoading) return <p>Loading...</p>;
  if (isError) return <p>{errorMessage}</p>

  return (
    <div className='home'>
      <ImageList
        images={data}
        toggleFavorite={toggleFavorite}
        favoriteList={favoriteCats}
      />
      <div style={{ textAlign: 'center' }}>
        <button className='button' onClick={fetchData}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
