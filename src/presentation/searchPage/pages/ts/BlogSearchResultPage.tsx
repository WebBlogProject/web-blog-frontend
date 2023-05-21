import { useSearchParams } from 'react-router-dom';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { PostPreview } from '../../../../application/types/PostPreview';
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

  return (
    <div>
      <KeywordPresenter keyword={query} />
      <BlogPostCardListComponent
        posts={posts}
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
