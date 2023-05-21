import { useSearchParams } from 'react-router-dom';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { PostPreview } from '../../../../application/types/PostPreview';
import { useCallback, useEffect, useMemo } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordPresenter } from '../../components/ts/KeywordPresenter';
import { useLazyGetPostHeadersByKeywordQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
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
import {
  LoadState,
  LoadStateConst,
} from '../../../../application/types/PageState';

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

  useEffect(() => {
    if (stateQuery !== query) {
      dispatch(resetSearchPostHeader({ query: query }));
    }
  }, [stateQuery, query, dispatch]);

  const ref = useFetchPages(
    useLazyGetPostHeadersByKeywordQuery,
    searchPostHeaderPageLoadComplete,
    searchPostHeaderPageLoadFail,
    searchPostHeaderPageLoading,
    getFetchArg,
    searchResult.pageState.nextPage
  );

  const posts: PostPreview[] = useMemo(() => {
    return searchResult.pageState.posts.map(convertToPostPreview) ?? [];
  }, [searchResult]);

  const errorPageProps: ErrorPageProps = useMemo(() => {
    return {
      msg: '검색에 실패했습니다.',
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
    const refreshState = searchResult.pageState.refreshState;
    const appendState = searchResult.pageState.appendState;

    switch (refreshState) {
      case LoadStateConst.Complete:
      case LoadStateConst.None:
        return (
          <div>
            <KeywordPresenter keyword={query} />
            <BlogPostCardList
              posts={posts}
              cardLayout="SearchResultCardLayout"
            />
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
  }, [
    searchResult,
    errorPageProps,
    posts,
    query,
    ref,
    showFooterLoadingSpinner,
  ]);

  return renderPage();
}

export { BlogSearchResultPage };
