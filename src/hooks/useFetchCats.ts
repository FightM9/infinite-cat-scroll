import { useEffect, useState } from 'react';
import { getImages } from 'api/config';
import axios from 'axios';

export interface Cat {
  breeds: [];
  categories: [{}];
  height: number;
  id: string;
  url: string;
  width: number;
}

export const useFetchCats = () => {
  const [data, setData] = useState<Cat[]>([]);
  const [url, setUrl] = useState(getImages(15,1));
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  let nextPage = 2;
  let totalPages = 1;

  const fetchImage = () => {
    if (nextPage !== totalPages) {
      setUrl(getImages(15, nextPage));
      nextPage++;      
    }
  };

  const setError = (message: string) => {
    setIsLoading(false);
    setIsError(true);
    setErrorMessage(message);
    return;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!url) {
        setError('Invalid URL');
      }

      setIsError(false);
      setIsLoading(true);

      try {
        await axios(url).then((result) => {
          const cats: Cat[] = result.data;      
          totalPages = parseInt(result.headers['content-length']);          

          if (!cats.length) {
            setError('Data is empty');
          } else {
            const result = Array.from(new Set([...data, ...cats]));
            setData(Array.from(new Set([...data, ...cats])));
          }
        });
      } catch (error) {
        setError('Error loading');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url, nextPage]);

  return [{ data, isLoading, isError, errorMessage, fetchImage }];
};
