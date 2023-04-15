import '../css/BlogPostCardList.css';
import { BlogPostCard } from './BlogPostCard';
import { PostPreview } from '../../../../application/types/PostPreview';

type BlogPostCardListProps = {
  posts: PostPreview[];
  cardLayout: string;
};

function BlogPostCardList({ posts, cardLayout }: BlogPostCardListProps) {
  return (
    <div className={cardLayout}>
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
