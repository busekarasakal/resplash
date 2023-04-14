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
};
