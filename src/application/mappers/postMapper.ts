import { Post } from '../types/Post';
import { PostPreview } from '../types/PostPreview';

const convertToPostPreview = (post: Post): PostPreview => ({
  id: post.id,
  title: post.title,
  creationDate: post.creationDate,
  estimatedTimeToRead: post.estimatedTimeToRead,
  thumbnailUrl: post.thumbnailUrl,
});

export { convertToPostPreview };
