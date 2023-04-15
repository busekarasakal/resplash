export const ACCESS_KEY = import.meta.env.VITE_IMAGE_API_KEY;
export const API_ROOT = 'https://api.unsplash.com/search/photos';

export const ORIENTATION_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Landscape', value: 'landscape' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Squarish', value: 'squarish' },
];

export const COLOR_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Black & White', value: 'black_and_white' },
  { label: 'Black', value: 'black' },
  { label: 'White', value: 'white' },
  { label: 'Yellow', value: 'yellow' },
  { label: 'Orange', value: 'orange' },
  { label: 'Red', value: 'red' },
  { label: 'Purple', value: 'purple' },
  { label: 'Magenta', value: 'magenta' },
  { label: 'Green', value: 'green' },
  { label: 'Teal', value: 'teal' },
  { label: 'Blue', value: 'blue' },
];

export const SORT_OPTIONS = [
  { label: 'Relevance', value: 'relevant' },
  { label: 'Latest', value: 'latest' },
];
