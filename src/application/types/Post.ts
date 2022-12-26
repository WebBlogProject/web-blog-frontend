import { Tag } from './Tag';

type Post = {
  id: number;
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  thumbnailUrl: string;
  tagList: Tag[];
};

export type { Post };
