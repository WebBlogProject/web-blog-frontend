import { useSearchParams } from 'react-router-dom';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { useCallback } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordBar } from '../../components/ts/KeywordBar';
import { useSearchPostHeadersQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage } from '../../../pages/ts/ErrorPage';

function SearchResultPage() {
  const [search, setSearch] = useSearchParams();
  const query = search.get('q') ?? '';

  const { data, isSuccess, isError } = useSearchPostHeadersQuery(query);

  const renderPage = useCallback(() => {
    if (isSuccess) {
      const postHeaders = data ?? ({} as PostHeaderData[]);
      return (
        <div>
          <KeywordBar keyword={query} />
          <BlogPostCardList posts={postHeaders} />
        </div>
      );
    } else if (isError) {
      return <ErrorPage msg={'검색에 실패했습니다.'} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [query, isSuccess, isError]);
  return renderPage();
}

export { SearchResultPage };
