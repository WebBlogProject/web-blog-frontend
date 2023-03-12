import { PostHeaderData } from './PostHeaderData';

type PostHeaderPage = {
  nextPosts: PostHeaderData[];
  hasNextPage: boolean;
  nextPage: number;
};

export type { PostHeaderPage };
