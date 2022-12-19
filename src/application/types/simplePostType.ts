import { tagType } from './tagType';

type simplePostType = {
  id: number;
  title: string;
  creationDate: number;
  estimateTimedToRead: number;
  thumbnailUrl: string;
  tagList: tagType[];
};

export type { simplePostType };
