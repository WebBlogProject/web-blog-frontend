import { useSearchParams } from 'react-router-dom';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { useCallback } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordPresenter } from '../../components/ts/KeywordPresenter';
import { useGetPostHeadersByKeywordQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage } from '../../../pages/ts/ErrorPage';

function BlogSearchResultPage() {
  const [search] = useSearchParams();
  const query = search.get('q') ?? '';

  const { data, isSuccess, isError } = useGetPostHeadersByKeywordQuery(query);

  const renderPage = useCallback(() => {
    if (isSuccess) {
      const postHeaders = data ?? ({} as PostHeaderData[]);
      return (
        <div>
          <KeywordPresenter keyword={query} />
          <BlogPostCardList posts={postHeaders} />
        </div>
      );
    } else if (isError) {
      return <ErrorPage msg={'검색에 실패했습니다.'} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [query, data, isSuccess, isError]);
  return renderPage();
}

export { BlogSearchResultPage };
