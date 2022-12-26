import '../css/BlogHomePostList.css';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../../../application/redux/HomePosts/homePostsSlice';
import { convertToHomePost } from '../../../../application/mappers/postMapper';

type BlogHomePost = {
  id: number;
  postCardProps: BlogPostCardProps;
};

function BlogHomePostList() {
  const posts: BlogHomePost[] = useSelector(selectPosts).map(convertToHomePost);

  return (
    <div className="Card-container">
      {posts.map((post: BlogHomePost) => (
        <BlogPostCard {...post.postCardProps} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
