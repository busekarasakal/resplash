import { useInfiniteQuery } from '@tanstack/react-query';
import { GetImagesQuery, GetImagesResponse } from '../shared/types';
import { UseInfiniteQueryOptions } from '@tanstack/react-query/src/types';
import { ACCESS_KEY, API_ROOT } from '../shared/constants';

const GET_IMAGES_KEY = 'GET_IMAGES';

export const useGetImages = (
  query: GetImagesQuery,
  options?: UseInfiniteQueryOptions<GetImagesResponse>,
) => {
  const { search, color, orientation, sort } = query;

  const buildUrl = (pageParam: number) => {
    const url = new URL(API_ROOT);

    if (orientation) {
      url.searchParams.append('orientation', orientation);
    }
    if (color) {
      url.searchParams.append('color', color);
    }

    url.searchParams.append('order_by', sort);
    url.searchParams.append('query', search || 'modern');
    url.searchParams.append('client_id', ACCESS_KEY);
    url.searchParams.append('per_page', '10');
    url.searchParams.append('page', pageParam.toString());

    return url;
  };

  const fetchImages = async ({ pageParam = 1 }) => {
    const url = buildUrl(pageParam);

    return fetch(url.href).then((res) => res.json());
  };

  const getImages = useInfiniteQuery<GetImagesResponse>(
    [GET_IMAGES_KEY, search, orientation, color, sort],
    fetchImages,
    {
      ...options,
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
