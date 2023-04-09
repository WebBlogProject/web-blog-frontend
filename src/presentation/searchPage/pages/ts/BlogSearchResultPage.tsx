import { useSearchParams } from 'react-router-dom';
import { convertToPostPreview } from '../../../../application/mappers/postHeaderMappers';
import { PostPreview } from '../../../../application/types/PostPreview';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { useCallback, useMemo } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordPresenter } from '../../components/ts/KeywordPresenter';
import { useGetPostHeadersByKeywordQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage } from '../../../pages/ts/ErrorPage';

function BlogSearchResultPage() {
  const [search] = useSearchParams();
  const query = search.get('q') ?? '';

  const { data, isSuccess, isError } = useGetPostHeadersByKeywordQuery(query);

  const posts: PostPreview[] = useMemo(() => {
    const postHeaders = data ?? ([] as PostHeaderData[]);
    return postHeaders.map(convertToPostPreview) ?? [];
  }, [data]);

  const renderPage = useCallback(() => {
    if (isSuccess) {
      return (
        <div>
          <KeywordPresenter keyword={query} />
          <BlogPostCardList posts={posts} cardLayout="SearchResultCardLayout" />
        </div>
      );
    } else if (isError) {
      return <ErrorPage msg={'검색에 실패했습니다.'} />;
    } else {
      return <div> loading ... </div>;
    }
  }, [query, posts, isSuccess, isError]);
  return renderPage();
}

export { BlogSearchResultPage };
