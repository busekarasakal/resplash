import { GetImagesQuery, Option } from './types';

export const getSanitizedParam = (value: string | null, options: Option[]) => {
  const option = options.find((option) => option.value === value);

  return (option ?? options[0]).value;
};

export const buildGetImagesUrlReplacement = (query: GetImagesQuery) => {
  const { search, orientation, color, sort } = query;
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

  return newRouteUrl.toString();
};
