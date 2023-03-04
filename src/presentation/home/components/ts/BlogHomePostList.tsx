import '../css/BlogHomePostList.css';
import { BlogPostCard } from '../../../shared/components/ts/BlogPostCard';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import { pageLoaded } from '../../../../application/redux/home/homeSlice';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

function BlogHomePostList() {
  const { data, isSuccess, isError, ref } = useFetchPages(
    useGetPostHeadersQuery,
    pageLoaded
  );

  const posts: PostPreview[] = useMemo(() => {
    const emptyArray: PostPreview[] = [];
    return data.posts.map(convertToPostPreview) ?? emptyArray;
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
        <div style={{ height: '1px' }} ref={ref} />
        {/* if ref attributed tag is shown on the viewport,intersection observer senses it (releated to infinite scroll) */}
      </div>
    );
  } else if (isError) {
    return <ErrorPage msg={errorPageProps.msg} />;
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogHomePostList };
