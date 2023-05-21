import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { useLazyGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useCallback, useMemo } from 'react';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import {
  postHeaderPageLoadComplete,
  postHeaderPageLoadFail,
  postHeaderPageLoading,
} from '../../../../application/redux/home/homeSlice';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import {
  LoadStateConst,
  LoadState,
} from '../../../../application/types/PageState';

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

  const showFooterLoadingSpinner = useCallback((appendState: LoadState) => {
    switch (appendState) {
      case LoadStateConst.Complete:
      case LoadStateConst.None:
        return <></>;
      case LoadStateConst.Error:
      case LoadStateConst.Loading:
        // TODO: Show loading spinner
        return <div> loading ... </div>;
    }
  }, []);

  const renderPage = useCallback(() => {
    const refreshState = homeResult.refreshState;
    const appendState = homeResult.appendState;

    switch (refreshState) {
      case LoadStateConst.Complete:
      case LoadStateConst.None:
        return (
          <div>
            <BlogPostCardList posts={posts} cardLayout="HomeCardLayout" />
            {showFooterLoadingSpinner(appendState)}

            {/* If ref attributed tag is shown on the viewport,
              intersection observer senses it (releated to infinite scroll) */}
            <div style={{ height: '1px' }} ref={ref} />
          </div>
        );
      case LoadStateConst.Error:
        return <ErrorPage msg={errorPageProps.msg} />;
      case LoadStateConst.Loading:
        return <div> loading ... </div>;
    }
  }, [homeResult, errorPageProps, posts, ref, showFooterLoadingSpinner]);

  return renderPage();
}

export { BlogHomePage };
