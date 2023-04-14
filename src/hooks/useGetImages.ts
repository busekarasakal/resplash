import { useInfiniteQuery } from '@tanstack/react-query';
import { ApiImage } from '../shared/types';

const GET_IMAGES_KEY = 'GET_IMAGES';

const ACCESS_KEY = import.meta.env.VITE_IMAGE_API_KEY;
const API_ROOT = 'https://api.unsplash.com/search/photos';

type GetImagesResponse = {
  results: ApiImage[];
  total: number;
  total_pages: number;
};

// TODO: constants for colors
export const useGetImages = (query: {
  search?: string;
  color?: string;
  orientation?: string;
}) => {
  const { search, color } = query;

  const fetchImages = async ({ pageParam = 1 }) => {
    const url = new URL(API_ROOT);
    url.searchParams.append('client_id', ACCESS_KEY);

    if (search) {
      url.searchParams.append('query', search);
    }
    if (color) {
      url.searchParams.append('color', color);
    }

    url.searchParams.append('per_page', '20');

    url.searchParams.append('page', pageParam.toString());

    return fetch(url.href).then((res) => res.json());
  };

  const getImages = useInfiniteQuery<GetImagesResponse>(
    [GET_IMAGES_KEY],
    fetchImages,
    {
      enabled: false,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.total_pages === pages.length) {
          return undefined;
        }

        return pages.length + 1;
      },
    },
  );

  return { ...getImages };
};
