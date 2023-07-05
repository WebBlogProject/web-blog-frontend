import '../css/BlogPostCardList.css';
import { BlogPostCard } from './BlogPostCard';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';

type BlogPostCardListProps = {
  posts: PostHeaderData[];
  cardLayout: string;
};

function BlogPostCardList({ posts, cardLayout }: BlogPostCardListProps) {
  return (
    <div className={cardLayout + ' post-feed'}>
      {posts.map((post: PostHeaderData, index) => (
        <BlogPostCard
          id={post.id}
          title={post.title}
          creationDate={post.creationDate}
          estimatedTimeToRead={post.estimatedTimeToRead}
          thumbnailUrl={post.thumbnailUrl}
          key={post.id}
          tagList={post.tagList}
          cardSize={
            index < 3 && cardLayout === 'HomeCardLayout'
              ? index === 0
                ? 'large'
                : 'medium'
              : 'small'
          }
        />
      ))}
    </div>
  );
}

export { BlogPostCardList };
export type { BlogPostCardListProps };
