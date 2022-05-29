import { FC } from 'react';
import Favorite from './Icons';

import 'shared/styles/list.scss';

interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface ImageListProps {
  images: Image[];
  toggleFavorite: (image: Image) => void;
  favoriteList: Image[];
}

const ImageList: FC<ImageListProps> = ({
  images,
  toggleFavorite,
  favoriteList,
}) => {
  const isFavorite = (image: Image) =>
    favoriteList.filter((favorite) => favorite.id === image.id).length > 0;

  if (images.length === 0) return <></>;

  return (
    <ul className='list'>
      {images.map((image, i) => (
        <li key={image.id} className='list-item'>
          <img
            className='list-image'
            src={image.url}
            width={image.width}
            height={image.height}
            alt=''
          />
          <button
            className='list-favorite'
            onClick={() => {
              toggleFavorite(image);
            }}
          >
            <Favorite favorite={isFavorite(image)} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
