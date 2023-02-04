import '../css/BlogHomePostList.css';
import { BlogPostCard } from '../../../shared/components/ts/BlogPostCard';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useCallback, useMemo, useState } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useIntersect } from '../../../shared/hooks/useIntersect';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';

function BlogHomePostList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isSuccess, isLoading, isError, hasNextResult } = useFetchPages(
    useGetPostHeadersQuery,
    pageNumber
  );

  const ref = useIntersect(
    useCallback(
      async (entry, observer) => {
        if (hasNextResult && !isLoading) setPageNumber(pageNumber + 1);
      },
      [hasNextResult, isLoading, pageNumber]
    )
  );

  const posts: PostPreview[] = useMemo(() => {
    const emptyArray: PostPreview[] = [];
    return data?.map(convertToPostPreview) ?? emptyArray;
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
      </div>
    );
  } else if (isError) {
    return <ErrorPage msg={errorPageProps.msg} />;
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogHomePostList };
