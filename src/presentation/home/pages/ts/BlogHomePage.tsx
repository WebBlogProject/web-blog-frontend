import { BlogPostCardListComponent } from '../../../shared/components/ts/BlogPostCardListComponent';
import { useLazyGetPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { useCallback, useMemo } from 'react';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { ErrorPageProps } from '../../../pages/ts/ErrorPage';
import {
  postHeaderPageLoadComplete,
  postHeaderPageLoadFail,
  postHeaderPageLoading,
} from '../../../../application/redux/home/homeSlice';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import { BlogCardType } from '../../../../application/types/BlogCardType';

function BlogHomePage() {
  const homeResult = useAppSelector((state) => state.home);
  const getFetchArg = useCallback((pageId: number | null) => {
    return pageId;
  }, []);

  const { ref } = useFetchPages(
    useLazyGetPostHeadersQuery,
    postHeaderPageLoadComplete,
    postHeaderPageLoadFail,
    postHeaderPageLoading,
    getFetchArg,
    homeResult.nextPage
  );

  const getCardTypebyIndex = useCallback((index: number) => {
    switch (index) {
      case 0:
        return BlogCardType.LARGE_CARD;
      case 1:
      case 2:
        return BlogCardType.MEDIUM_CARD;
      default:
        return BlogCardType.SMALL_CARD;
    }
  }, []);

  const errorPageProps: ErrorPageProps = useMemo(() => {
    return {
      msg: '포스트 목록을 불러오지 못했습니다.',
    };
  }, []);

  return (
    <BlogPostCardListComponent
      posts={homeResult.posts}
      cardTypeGetter={getCardTypebyIndex}
      refreshState={homeResult.refreshState}
      appendState={homeResult.appendState}
      errorPageProps={errorPageProps}
      fetchBoundaryReference={ref}
    />
  );
}

export { BlogHomePage };
