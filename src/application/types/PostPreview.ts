type PostPreview = {
  id: number;
  postCardProps: {
    title: string;
    creationDate: number;
    estimatedTimeToRead: number;
    thumbnailUrl: string;
  };
};

export type { PostPreview };
