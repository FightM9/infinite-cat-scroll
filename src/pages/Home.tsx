import { useFavoriteCats, useFetchCats } from 'hooks';
import ImageList from 'components/ImageList';

import 'shared/styles/button.scss';
import 'shared/styles/page.scss';
import { FC, useEffect, useState } from 'react';
import { getImages } from 'shared/api/config';
import axios from 'axios';
import { Cat } from 'shared/types';

const Home: FC = () => {
  const [{ favoriteCats, toggleFavorite }] = useFavoriteCats();
  const [cats, setCast] = useState<Cat[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(getImages(20, page))
      .then((result) => setCast([...cats, ...result.data]));
  }, [page]);

  return (
    <div className='home'>
      <ImageList
        images={cats}
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
