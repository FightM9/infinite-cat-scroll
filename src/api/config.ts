const url = 'https:/api.thecatapi.com/v1/images/search?format=json&limit=15';

const BASE = 'https:/api.thecatapi.com/v1';
const KEY = '60625e92-60d0-4054-ab62-a1da7596f49e';
const LIMIT = 15;
const IMAGES =  `${BASE}/images/search?`

export const getImages = (limit = 10, page = 0) => `${BASE}/images/search?/format=json&limit=${limit}&page=${page}`;
