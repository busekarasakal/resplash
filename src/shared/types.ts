export type ApiImage = {
  id: string;
  urls: {
    raw: string;
  };
  likes: number;
  description: string;
  links: {
    html: string;
  };
  alt_description: string;
  user: {
    username: string;
  };
  blur_hash: string;
  width: number;
  height: number;
};

export type GetImagesResponse = {
  results: ApiImage[];
  total: number;
  total_pages: number;
};

export type GetImagesQuery = {
  search: string;
  color: string;
  orientation: string;
  sort: string;
};

export type Option = {
  label: string;
  value: string;
};
