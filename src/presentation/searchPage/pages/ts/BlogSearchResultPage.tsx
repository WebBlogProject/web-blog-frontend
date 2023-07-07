import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo } from 'react';
import { BlogPostCardListComponent } from '../../../shared/components/ts/BlogPostCardListComponent';
import { KeywordPresenter } from '../../components/ts/KeywordPresenter';
import { useLazyGetPostHeadersByKeywordQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPageProps } from '../../../pages/ts/ErrorPage';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../shared/hooks/reduxHooks';
import { SearchQueryArgs } from '../../../../application/types/SearchQueryArgs';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import {
  resetSearchPostHeader,
  searchPostHeaderPageLoadComplete,
  searchPostHeaderPageLoadFail,
  searchPostHeaderPageLoading,
} from '../../../../application/redux/searchResult/searchResultSlice';

function BlogSearchResultPage() {
  const dispatch = useAppDispatch();
  const [search] = useSearchParams();
  const query = search.get('q') ?? '';

  const searchResult = useAppSelector((state) => state.searchResult);
  const stateQuery = searchResult.query;
  const getFetchArg = useCallback(
    (pageId: number | null) => {
      return { pageId: pageId, keyword: query } as SearchQueryArgs;
    },
    [query]
  );

  const { ref, resetIntersectingState } = useFetchPages(
    useLazyGetPostHeadersByKeywordQuery,
    searchPostHeaderPageLoadComplete,
    searchPostHeaderPageLoadFail,
    searchPostHeaderPageLoading,
    getFetchArg,
    searchResult.pageState.nextPage
  );

  useEffect(() => {
    if (stateQuery !== query) {
      dispatch(resetSearchPostHeader({ query: query }));
      resetIntersectingState();
    }
  }, [stateQuery, query, dispatch, resetIntersectingState]);

  const errorPageProps: ErrorPageProps = useMemo(() => {
    return {
      msg: '검색에 실패했습니다.',
    };
  }, []);

  return (
    <div>
      <KeywordPresenter keyword={query} />
      <BlogPostCardListComponent
        posts={searchResult.pageState.posts}
        cardLayout="SearchResultCardLayout"
        refreshState={searchResult.pageState.refreshState}
        appendState={searchResult.pageState.appendState}
        errorPageProps={errorPageProps}
        fetchBoundaryReference={ref}
      />
    </div>
  );
}

export { BlogSearchResultPage };
