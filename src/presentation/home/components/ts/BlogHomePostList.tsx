import '../css/BlogHomePostList.css';
import { BlogPostCard } from '../../../shared/components/ts/BlogPostCard';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';

function BlogHomePostList() {
  const { data, isSuccess } = useGetPostHeadersQuery();

  const posts: PostPreview[] = useMemo(() => {
    const emptyArray: PostPreview[] = [];
    return data?.map(convertToPostPreview) ?? emptyArray;
  }, [data]);

  if (isSuccess) {
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
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogHomePostList };
