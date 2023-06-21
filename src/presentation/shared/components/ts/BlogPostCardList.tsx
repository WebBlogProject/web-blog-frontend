import '../css/BlogPostCardList.css';
import { BlogPostCard } from './BlogPostCard';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';

type BlogPostCardListProps = {
  posts: PostHeaderData[];
  cardLayout: string;
};

function BlogPostCardList({ posts, cardLayout }: BlogPostCardListProps) {
  return (
    <div className={cardLayout}>
      {posts.map((post: PostHeaderData) => (
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
