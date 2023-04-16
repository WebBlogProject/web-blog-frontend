import { useSearchParams } from 'react-router-dom';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { PostPreview } from '../../../../application/types/PostPreview';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { useCallback, useEffect, useMemo } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordPresenter } from '../../components/ts/KeywordPresenter';
import { useLazyGetPostHeadersByKeywordQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage } from '../../../pages/ts/ErrorPage';
import { useAppSelector } from '../../../shared/hooks/reduxHooks';
import {
  searchPostHeaderPageLoad,
  searchPostHeaderPageLoadFail,
} from '../../../../application/redux/searchResult/searchResultSlice';
import { useFetchPages } from '../../../shared/hooks/useFetchPages';
import { SearchQueryArgs } from '../../../../application/types/SearchQueryArgs';

function BlogSearchResultPage() {
  const [search] = useSearchParams();
  const query = search.get('q') ?? '';

  const getQueryParam = useCallback(
    (scrollId: number) => {
      return {
        scrollId: scrollId,
        keyword: query,
      } as SearchQueryArgs;
    },
    [query]
  );

  const searchResult = useAppSelector((state) => state.searchResult);
  const ref = useFetchPages<SearchQueryArgs>(
    useLazyGetPostHeadersByKeywordQuery,
    searchPostHeaderPageLoad,
    searchPostHeaderPageLoadFail,
    getQueryParam,
    searchResult.nextPage
  );

  const posts: PostPreview[] = useMemo(() => {
    const postHeaders = searchResult.posts ?? ([] as PostHeaderData[]);
    return postHeaders.map(convertToPostPreview) ?? [];
  }, [searchResult]);

  const renderPage = useCallback(() => {
    if (searchResult.isSuccess) {
      return (
        <div>
          <KeywordPresenter keyword={query} />
          <BlogPostCardList posts={posts} cardLayout="SearchResultCardLayout" />
        </div>
      );
    } else if (searchResult.isError) {
      return <ErrorPage msg={'검색에 실패했습니다.'} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [query, searchResult, posts]);

  return (
    <div>
      {renderPage()}
      {/* if ref attributed tag is shown on the viewport,intersection observer senses it (releated to infinite scroll) */}
      <div style={{ height: '1px' }} ref={ref} />
    </div>
  );
}

export { BlogSearchResultPage };
