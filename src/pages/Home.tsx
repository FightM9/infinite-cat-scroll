import { FC, useEffect, useState } from 'react';
import ImageList from 'components/ImageList';
import { useFavoriteCats } from 'hooks';
import { Cat } from 'shared/types';

import 'shared/styles/button.scss';
import 'shared/styles/page.scss';
import { fetchImages } from 'shared/api/config';

const Home: FC = () => {
  const [{ favoriteCats, toggleFavorite }] = useFavoriteCats();
  const [data, setData] = useState<Cat[]>([]);
  const [page, setPage] = useState(1);
  const [isError, setIsError] = useState(false);

  console.log('start home');

  useEffect(() => {
    fetchImages(page)
      .then((result) => setData([...data, ...result.data]))
      .then(() => setIsError(false))
      .catch(() => setIsError(true));
  }, [page]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='home'>
      <ImageList
        images={data}
        toggleFavorite={toggleFavorite}
        favoriteList={favoriteCats}
      />
      <div style={{ textAlign: 'center' }}>
        <button className='button' onClick={() => setPage(page + 1)}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Home;
