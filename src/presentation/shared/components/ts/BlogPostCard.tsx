import '../css/BlogPostCard.css';

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
  cardSize: string;
};

function BlogPostCard({
  id,
  title,
  creationDate,
  estimatedTimeToRead,
  thumbnailUrl,
  tagList,
  cardSize,
}: BlogPostCardProps) {
  const routerNavigate = useNavigate();

  const onClickPostCard = useCallback(() => {
    routerNavigate(`/post/${id}`);
  }, [id, routerNavigate]);

  return (
    <article className={'post-card ' + cardSize} onClick={onClickPostCard}>
      <img
        className="PostCard-image"
        src={thumbnailUrl}
        alt={`${title}_thumbnail`}
      />
      <div className="PostCard-Content">
        <header className="PostCard-Header">
          {tagList.map((tag) => (
            <BlogPostHeaderTagItem tagName={tag.tagName} key={tag.tagId} />
          ))}
          <h2 className="PostCard-title">{title}</h2>
        </header>
        <footer className="PostCard-meta">
          <time className="PostCard-meta-data">
            {getFormattedDate(creationDate)}
          </time>
          <span className="PostCard-meta-length">
            {estimatedTimeToRead} min read
          </span>
        </footer>
      </div>
    </article>
  );
}

export { BlogPostCard };
export type { BlogPostCardProps };
