import '../css/BlogPostCardList.css';
import { BlogPostCard } from './BlogPostCard';
import { PostPreview } from '../../../../application/types/PostPreview';

type BlogPostCardListProps = {
  posts: PostPreview[];
};

function BlogPostCardList({ posts }: BlogPostCardListProps) {
  return (
    <div className="Card-container">
      {posts.map((post: PostPreview) => (
        <BlogPostCard
          id={post.id}
          title={post.title}
          creationDate={post.creationDate}
          estimatedTimeToRead={post.estimatedTimeToRead}
          thumbnailUrl={post.thumbnailUrl}
          key={post.id}
        />
      ))}
    </div>
  );
}

export { BlogPostCardList };
export type { BlogPostCardListProps };
