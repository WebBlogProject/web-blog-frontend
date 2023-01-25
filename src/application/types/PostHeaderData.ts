import { Tag } from './Tag';

type PostHeaderData = {
  id: number;
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  thumbnailUrl: string;
  tagList: Tag[];
};

export type { PostHeaderData };
