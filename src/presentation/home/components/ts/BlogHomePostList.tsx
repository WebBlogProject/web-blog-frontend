import '../css/BlogHomePostList.css';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import { convertToHomePost } from '../../../../application/mappers/postMapper';
import { useGetPostsQuery } from '../../../../application/redux/api/apiSlice';
import { useMemo } from 'react';
import { Post } from '../../../../application/types/Post';

type BlogHomePost = {
  id: number;
  postCardProps: BlogPostCardProps;
};

function BlogHomePostList() {
  const { data, isSuccess } = useGetPostsQuery();

  const posts: BlogHomePost[] = useMemo(() => {
    const emptyArray: BlogHomePost[] = [];
    return data?.map(convertToHomePost) ?? emptyArray;
  }, [data]);

  if (isSuccess) {
    return (
      <div className="Card-container">
        {posts.map((post: BlogHomePost) => (
          <BlogPostCard {...post.postCardProps} key={post.id} />
        ))}
      </div>
    );
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogHomePostList };
