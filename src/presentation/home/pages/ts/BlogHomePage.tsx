import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useLazyGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useCallback, useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import {
  postHeaderPageLoad,
  postHeaderPageLoadFail,
} from '../../../../application/redux/home/homeSlice';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

function BlogHomePage() {
  const homeResult = useAppSelector((state) => state.home);
  const getSearchArg = useCallback((pageId: number | null) => {
    return pageId
  }, [])

  const ref = useFetchPages(
    useLazyGetPostHeadersQuery,
    postHeaderPageLoad,
    postHeaderPageLoadFail,
    getSearchArg,
    homeResult.nextPage,
  );

  const posts: PostPreview[] = useMemo(() => {
    return homeResult.posts.map(convertToPostPreview) ?? [];
  }, [homeResult]);

  const errorPageProps: ErrorPageProps = useMemo(() => {
    return {
      msg: '포스트 목록을 불러오지 못했습니다.',
    };
  }, []);

  const renderPage = useCallback(() => {
    if (homeResult.isSuccess) {
      return <BlogPostCardList posts={posts} cardLayout="HomeCardLayout" />;
    } else if (homeResult.isError && posts.length === 0) {
      return <ErrorPage msg={errorPageProps.msg} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [homeResult, errorPageProps, posts]);

  return (
    <div>
      {renderPage()}
      {/* if ref attributed tag is shown on the viewport,intersection observer senses it (releated to infinite scroll) */}
      <div style={{ height: '1px' }} ref={ref} />
    </div>
  );
}

export { BlogHomePage };
