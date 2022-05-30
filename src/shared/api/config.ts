/**
 * TheCatApi config
 * https://docs.thecatapi.com/
 */

import axios from 'axios';

export const BASE = 'https:/api.thecatapi.com/v1';
export const KEY = '60625e92-60d0-4054-ab62-a1da7596f49e';
export const getImages = (limit = 10, page = 0) =>
  `${BASE}/images/search?limit=${limit}&page=${page}`;

export const fetchImages = (page: number) =>
  axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&order=desc`
  );
