import '../css/BlogHomePostList.css';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import { convertToHomePost } from '../../../../application/mappers/postMapper';
import { useGetPostsQuery } from '../../../../application/redux/api/apiSlice';
import { Post } from '../../../../application/types/Post';

type BlogHomePost = {
  id: number;
  postCardProps: BlogPostCardProps;
};

function BlogHomePostList() {
  const { data, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div> loading ... </div>;
  }

  const posts: BlogHomePost[] = (data as Post[]).map(convertToHomePost);
  return (
    <div className="Card-container">
      {posts.map((post: BlogHomePost) => (
        <BlogPostCard {...post.postCardProps} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
