/* temporary test page for BlogPostCard */

import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import sampleImage from '../../../../assets/postCardSampleImg.png';

const posts: any = [
  // temporary testdata , TODO : Create BlogPostType in the application layer
  {
    id: 1,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
];

function BlogHomePostList() {
  return (
    <div>
      {posts.map((post: any) => (
        <BlogPostCard {...post.postCardProps} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
