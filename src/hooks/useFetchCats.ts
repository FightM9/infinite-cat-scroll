import { useEffect, useState } from 'react';
import axios from 'axios';
import { getImages } from 'shared/api/config';
import { Cat } from 'shared/types';

/**
 * Fetch data from API
 */

export const useFetchCats = () => {
  const [data, setData] = useState<Cat[]>([]);
  const [url, setUrl] = useState(getImages(1));
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPaget] = useState(2);

  const fetchImage = () => {
    // Check and set next page URL
    if (pageNumber !== totalPages) {
      setUrl(getImages(pageNumber));
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
    const fetchData = async () => {
      console.log(url);
      setIsError(false);
      setIsLoading(true);
      try {
        await axios.get(url).then((result) => {
          const cats: Cat[] = result.data;
          // Set the total number of pages
          setTotalPaget(parseInt(result.headers['content-length']));
          // Checking and set cat data
          if (!cats.length) {
            setError('Data is empty');
          } else {
            const newData = Array.from(new Set([...data, ...cats]))
            setData(newData);
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
