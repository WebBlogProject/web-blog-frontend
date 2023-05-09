import { PostHeaderData } from './PostHeaderData';

type PageState = {
  nextPage: number | null;
  posts: PostHeaderData[];
  isSuccess: boolean;
  isError: boolean;
};

type SearchPageState = {
  pageState: PageState;
  query: string;
}

export type { PageState, SearchPageState };
export const INITIAL_PAGE = 1;