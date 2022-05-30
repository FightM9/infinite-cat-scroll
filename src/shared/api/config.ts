/**
 * TheCatApi config
 * https://docs.thecatapi.com/
 */

export const KEY = '60625e92-60d0-4054-ab62-a1da7596f49e';
export const getImages = (page: number) => `https://api.thecatapi.com/v1/images/search?limit=20&page=${page}&order=desc`
