import { PostHeaderData } from './PostHeaderData';

type PageState = {
  nextPage: number;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
};

export type { PageState };
