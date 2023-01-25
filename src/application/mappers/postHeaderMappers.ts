import { PostHeaderData } from '../types/PostHeaderData';
import { PostPreview } from '../types/PostPreview';

const convertToPostPreview = (post: PostHeaderData): PostPreview => ({
  id: post.id,
  title: post.title,
  creationDate: post.creationDate,
  estimatedTimeToRead: post.estimatedTimeToRead,
  thumbnailUrl: post.thumbnailUrl,
});

export { convertToPostPreview };
