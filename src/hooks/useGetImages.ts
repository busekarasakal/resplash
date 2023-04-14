import { useInfiniteQuery } from '@tanstack/react-query';
import { ApiImage } from '../shared/types';
import { useNavigate } from 'react-router-dom';
import {
  COLOR_OPTIONS,
  ORIENTATION_OPTIONS,
  SORT_OPTIONS,
} from '../shared/constants';

const GET_IMAGES_KEY = 'GET_IMAGES';

const ACCESS_KEY = import.meta.env.VITE_IMAGE_API_KEY;
const API_ROOT = 'https://api.unsplash.com/search/photos';

type GetImagesResponse = {
  results: ApiImage[];
  total: number;
  total_pages: number;
};

export const useGetImages = (query: {
  search: string;
  color: string;
  orientation: string;
  sort: string;
}) => {
  const navigate = useNavigate();
  const { search, color, orientation, sort } = query;

  const buildUrl = (pageParam: number) => {
    const url = new URL(API_ROOT);

    url.searchParams.append('query', search || 'modern');
    if (orientation) {
      url.searchParams.append('orientation', orientation);
    }
    if (color) {
      url.searchParams.append('color', color);
    }
    url.searchParams.append('order_by', sort);

    url.searchParams.append('client_id', ACCESS_KEY);
    url.searchParams.append('per_page', '10');
    url.searchParams.append('page', pageParam.toString());

    return url;
  };

  const replaceRoute = () => {
    const newRouteUrl = new URLSearchParams();

    if (search) {
      newRouteUrl.append('search', search);
    }
    if (orientation) {
      newRouteUrl.append('orientation', orientation);
    }
    if (color) {
      newRouteUrl.append('color', color);
    }
    newRouteUrl.append('sort', sort);

    navigate(`/?${newRouteUrl.toString()}`, {
      replace: true,
    });
  };

  const fetchImages = async ({ pageParam = 1 }) => {
    const url = buildUrl(pageParam);

    const shouldReplaceUrl =
      search === '' &&
      orientation === ORIENTATION_OPTIONS[0].value &&
      color === COLOR_OPTIONS[0].value &&
      sort === SORT_OPTIONS[0].value;

    if (!shouldReplaceUrl) {
      replaceRoute();
    }

    return fetch(url.href).then((res) => res.json());
  };

  const getImages = useInfiniteQuery<GetImagesResponse>(
    [GET_IMAGES_KEY, search, orientation, color, sort],
    fetchImages,
    {
      enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.total_pages === pages.length) {
          return;
        }

        return pages.length + 1;
      },
    },
  );

  return { ...getImages };
};
