import '../css/BlogHomePostList.css';
import { BlogPostCard } from '../../../shared/components/ts/BlogPostCard';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import { loadPostHeaderPage } from '../../../../application/redux/home/homeSlice';

function BlogHomePostList() {
  const { data, isSuccess, isError, ref } = useFetchPages(
    useGetPostHeadersQuery,
    loadPostHeaderPage
  );

  const posts: PostPreview[] = useMemo(() => {
    return data.posts.map(convertToPostPreview) ?? [];
  }, [data]);

  const errorPageProps: ErrorPageProps = {
    msg: '포스트 목록을 불러오지 못했습니다.',
  };

  if (isSuccess) {
    return (
      <div>
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
        {/* if ref attributed tag is shown on the viewport,intersection observer senses it (releated to infinite scroll) */}
        <div style={{ height: '1px' }} ref={ref} />
      </div>
    );
  } else if (isError) {
    return <ErrorPage msg={errorPageProps.msg} />;
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogHomePostList };
