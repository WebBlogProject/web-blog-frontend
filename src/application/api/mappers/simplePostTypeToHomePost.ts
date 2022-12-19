import { simplePostType } from '../../types/simplePostType';

const simplePostTypeToHomePost = (post: simplePostType) => ({
  id: post.id,
  postCardProps: {
    title: post.title,
    creationDate: post.creationDate,
    estimateTimedToRead: post.estimateTimedToRead,
    thumbnailUrl: post.thumbnailUrl,
  },
});

export { simplePostTypeToHomePost };
