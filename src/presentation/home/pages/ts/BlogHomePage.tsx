import { BlogPostCardListComponent } from '../../../shared/components/ts/BlogPostCardListComponent';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useLazyGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useCallback, useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPageProps } from '../../../pages/ts/ErrorPage';
import {
  postHeaderPageLoadComplete,
  postHeaderPageLoadFail,
  postHeaderPageLoading,
} from '../../../../application/redux/home/homeSlice';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';

function BlogHomePage() {
  const homeResult = useAppSelector((state) => state.home);
  const getFetchArg = useCallback((pageId: number | null) => {
    return pageId;
  }, []);

  const ref = useFetchPages(
    useLazyGetPostHeadersQuery,
    postHeaderPageLoadComplete,
    postHeaderPageLoadFail,
    postHeaderPageLoading,
    getFetchArg,
    homeResult.nextPage
  );

  const posts: PostPreview[] = useMemo(() => {
    return homeResult.posts.map(convertToPostPreview) ?? [];
  }, [homeResult]);

  const errorPageProps: ErrorPageProps = useMemo(() => {
    return {
      msg: '포스트 목록을 불러오지 못했습니다.',
    };
  }, []);

  return (
    <BlogPostCardListComponent
      posts={posts}
      cardLayout="HomeCardLayout"
      refreshState={homeResult.refreshState}
      appendState={homeResult.appendState}
      errorPageProps={errorPageProps}
      fetchBoundaryReference={ref}
    />
  );
}

export { BlogHomePage };
