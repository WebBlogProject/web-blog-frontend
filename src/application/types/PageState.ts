import { PostHeaderData } from './PostHeaderData';

type HomePageState = {
  nextPage: number | null;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
};

type SearchPageState = {
  nextPage: number | null;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
  query: string;
}

export type { HomePageState, SearchPageState };
export const INITIAL_PAGE = 1;