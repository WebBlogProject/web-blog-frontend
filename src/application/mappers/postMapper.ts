import { Post } from '../types/Post';

const convertToHomePost = (post: Post) => ({
  id: post.id,
  postCardProps: {
    title: post.title,
    creationDate: post.creationDate,
    estimatedTimeToRead: post.estimatedTimeToRead,
    thumbnailUrl: post.thumbnailUrl,
  },
});

export { convertToHomePost };
