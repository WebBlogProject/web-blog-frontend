import { PostHeaderData } from './PostHeaderData';

type PageState = {
  nextPage: number | null;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
};

export type { PageState }