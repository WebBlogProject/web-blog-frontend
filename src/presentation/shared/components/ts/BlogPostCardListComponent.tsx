import '../css/BlogPostCardListComponent.css';
import { BlogPostCard } from './BlogPostCard';
import {
  LoadState,
  LoadStateConst,
} from '../../../../application/types/PageState';
import { useCallback } from 'react';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { BlogCardType } from '../../../../application/types/BlogCardType';

type BlogPostCardListComponentProps = {
  posts: PostHeaderData[];
  cardTypeGetter: (index: number) => BlogCardType;
  refreshState: LoadState;
  appendState: LoadState;
  errorPageProps: ErrorPageProps;
  fetchBoundaryReference: React.RefObject<HTMLDivElement>;
};

function BlogPostCardListComponent({
  posts,
  cardTypeGetter,
  refreshState,
  appendState,
  errorPageProps,
  fetchBoundaryReference,
}: BlogPostCardListComponentProps) {
  const showBlogCardList = useCallback(
    (posts: PostHeaderData[]) => {
      return (
        <div className="Post-feed">
          {posts.map((post: PostHeaderData, idx) => (
            <BlogPostCard
              id={post.id}
              title={post.title}
              creationDate={post.creationDate}
              estimatedTimeToRead={post.estimatedTimeToRead}
              thumbnailUrl={post.thumbnailUrl}
              key={post.id}
              tagList={post.tagList}
              cardType={cardTypeGetter(idx)}
            />
          ))}
        </div>
      );
    },
    [cardTypeGetter]
  );

  const showFooterLoadingSpinner = useCallback((appendState: LoadState) => {
    switch (appendState) {
      case LoadStateConst.Complete:
      case LoadStateConst.None:
        return;
      case LoadStateConst.Error:
      case LoadStateConst.Loading:
        // TODO: Show loading spinner
        return <div> loading ... </div>;
    }
  }, []);

  const render = useCallback(() => {
    switch (refreshState) {
      case LoadStateConst.Complete:
      case LoadStateConst.None:
        return (
          <div>
            {posts.length === 0 && refreshState === LoadStateConst.Complete ? (
              // TODO: Show empty view
              <div>Empty view</div>
            ) : (
              showBlogCardList(posts)
            )}
            {showFooterLoadingSpinner(appendState)}

            {/* If ref attributed tag is shown on the viewport,
            intersection observer senses it (related to infinite scroll) */}
            <div style={{ height: '1px' }} ref={fetchBoundaryReference} />
          </div>
        );
      case LoadStateConst.Error:
        return <ErrorPage msg={errorPageProps.msg} />;
      case LoadStateConst.Loading:
        return <div> loading ... </div>;
    }
  }, [
    errorPageProps,
    fetchBoundaryReference,
    showFooterLoadingSpinner,
    refreshState,
    appendState,
    showBlogCardList,
    posts,
  ]);

  return render();
}

export { BlogPostCardListComponent };
export type { BlogPostCardListComponentProps };
