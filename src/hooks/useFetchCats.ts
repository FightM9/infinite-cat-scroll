import { useEffect, useState } from 'react';
import axios from 'axios';
import { getImages, KEY } from 'shared/api/config';
import { Cat } from 'shared/types';

/**
 * Fetch data from API
 */

export const useFetchCats = () => {
  const [data, setData] = useState<Cat[]>([]);
  const [url, setUrl] = useState(getImages(20, 1));
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [totalPages, setTotalPaget] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchImage = () => {
    // Check and set next page URL
    if (pageNumber !== totalPages) {
      setUrl(getImages(15, pageNumber));
      setPageNumber(pageNumber + 1);
    }
  };

  const setError = (message: string) => {
    setIsLoading(false);
    setIsError(true);
    setErrorMessage(message);
    return;
  };

  useEffect(() => {
    // Check the URL for correctness
    const fetchData = async () => {
      if (!url) {
        setError('Invalid URL');
      }
      setIsError(false);
      setIsLoading(true);
      try {
        await axios(url,{
          headers: {
            'x-api-key': KEY
          }
        }).then((result) => {
          const cats: Cat[] = result.data;
          // Set the total number of pages
          setTotalPaget(parseInt(result.headers['content-length']));
          // Checking and set cat data
          if (!cats.length) {
            setError('Data is empty');
          } else {
            setData(Array.from(new Set([...data, ...cats])));
          }
        });
      } catch (error) {
        setError('Error loading');
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ data, isLoading, isError, errorMessage, fetchImage }];
};
