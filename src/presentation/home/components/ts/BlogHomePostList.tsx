/* temporary test page for BlogPostCard */
import '../css/BlogHomePostList.css';
import { BlogPostCard } from '../../../shared/components/ts/BlogPostCard';
import { useSelector } from 'react-redux';
import { selectPosts } from '../../../../application/redux/HomePosts/homePostsSlice';
import { simplePostTypeToHomePost } from '../../../../application/api/mappers/simplePostTypeToHomePost';

function BlogHomePostList() {
  const posts: any[] = useSelector(selectPosts).map(simplePostTypeToHomePost);

  return (
    <div className="Card-container">
      {posts.map((post: any) => (
        <BlogPostCard {...post.postCardProps} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
