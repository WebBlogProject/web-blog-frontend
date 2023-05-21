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
} from '../../../../application/redux/searchResult/searchResultSlice';
import { LoadStateConst } from '../../../../application/types/PageState';

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

  // TODO: Replace to right state condition
  const renderPage = useCallback(() => {
    if (searchResult.pageState.refreshState == LoadStateConst.Complete) {
      return (
        <div>
          <KeywordPresenter keyword={query} />
          <BlogPostCardList posts={posts} cardLayout="SearchResultCardLayout" />
        </div>
      );
    } else if (searchResult.pageState.refreshState == LoadStateConst.Error) {
      return <ErrorPage msg={errorPageProps.msg} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [searchResult, errorPageProps, posts, query]);

  return (
    <div>
      {renderPage()}
      {/* if ref attributed tag is shown on the viewport,intersection observer senses it (releated to infinite scroll) */}
      <div style={{ height: '1px' }} ref={ref} />
    </div>
  );
}

export { BlogSearchResultPage };
