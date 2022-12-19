import { tagType } from './tagType';

type simplePostCardType = {
  id: number;
  title: string;
  creationDate: number;
  estimateTimedToRead: number;
  thumbnailUrl: string;
  tagList: tagType[];
};

export type { simplePostCardType };
