import { getFormattedDate } from '../../utils/PostUtils';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { Tag } from '../../../../application/types/Tag';
import { BlogPostHeaderTagItem } from './BlogPostHeaderTagItem';

type BlogPostCardProps = {
  id: number;
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  thumbnailUrl: string;
  tagList: Tag[];
};

function BlogPostCard({
  id,
  title,
  creationDate,
  estimatedTimeToRead,
  thumbnailUrl,
  tagList,
}: BlogPostCardProps) {
  const routerNavigate = useNavigate();

  const onClickPostCard = useCallback(() => {
    routerNavigate(`/post/${id}`);
  }, [id, routerNavigate]);

  return (
    <article className="Post-card" onClick={onClickPostCard}>
      <img
        className="post-card-image"
        src={thumbnailUrl}
        alt={`${title}_thumbnail`}
      />
      <div className="post-card-content">
        <header className="post-card-header">
          {tagList.map((tag) => (
            <BlogPostHeaderTagItem tagName={tag.tagName} key={tag.tagId} />
          ))}
          <h2 className="post-card-title">{title}</h2>
        </header>
        <footer className="post-card-meta">
          <time className="post-card-meta-data">
            {getFormattedDate(creationDate)}
          </time>
          <span className="post-card-meta-length">
            {estimatedTimeToRead} min read
          </span>
        </footer>
      </div>
    </article>
  );
}

export { BlogPostCard };
export type { BlogPostCardProps };
