/* temporary test page for BlogPostCard */

import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import sampleImage from '../../../../assets/postCardSampleImg.png';

const posts: BlogPostCardProps[] = [
  {
    id: 1,
    title: 'some title',
    creationDate: Date.now(),
    estimateTimedToRead: 10,
    thumbnailUrl: sampleImage,
  },
];

function BlogHomePostList() {
  return (
    <div>
      {posts.map((post: BlogPostCardProps) => (
        <BlogPostCard {...post} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
