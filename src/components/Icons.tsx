import { FC } from 'react';

interface FavoriteProps {
  favorite?: boolean;
  className?: string;
}

const Favorite: FC<FavoriteProps> = ({ favorite, className }) => {
  return (
    <svg
      className={className ? className : ''}
      width='48'
      height='48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      {favorite ? (
        <path
          d='M33 6c-3.48 0-6.82 1.62-9 4.18C21.82 7.62 18.48 6 15 6 8.84 6 4 10.84 4 17c0 7.56 6.8 13.72 17.1 23.08L24 42.7l2.9-2.64C37.2 30.72 44 24.56 44 17c0-6.16-4.84-11-11-11Z'
          fill='currentColor'
        />
      ) : (
        <path
          d='M33 6c-3.48 0-6.82 1.62-9 4.18C21.82 7.62 18.48 6 15 6 8.84 6 4 10.84 4 17c0 7.56 6.8 13.72 17.1 23.08L24 42.7l2.9-2.64C37.2 30.72 44 24.56 44 17c0-6.16-4.84-11-11-11Zm-8.8 31.1-.2.2-.2-.2C14.28 28.48 8 22.78 8 17c0-4 3-7 7-7 3.08 0 6.08 1.98 7.14 4.72h3.74C26.92 11.98 29.92 10 33 10c4 0 7 3 7 7 0 5.78-6.28 11.48-15.8 20.1Z'
          fill='currentColor'
        />
      )}
    </svg>
  );
};

export default Favorite;
