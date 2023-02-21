import { PostHeaderData } from './PostHeaderData';

type PostHeaderDTO = {
  nextPosts: PostHeaderData[];
  hasNextPage: boolean;
  nextPage: number;
};

export type { PostHeaderDTO };
