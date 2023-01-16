import '../css/BlogPostCard.css';

import { getFormattedDate } from '../../utils/PostUtils';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

type BlogPostCardProps = {
  id: number;
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  thumbnailUrl: string;
};

function BlogPostCard({
  id,
  title,
  creationDate,
  estimatedTimeToRead,
  thumbnailUrl,
}: BlogPostCardProps) {
  const routerNavigate = useNavigate();

  const onClickPostCard = useCallback(() => {
    routerNavigate(`/post/${id}`);
  }, [id, routerNavigate]);

  return (
    <div className="Post-card" onClick={onClickPostCard}>
      <img src={thumbnailUrl} alt={`${title}_thumbnail`} />
      <div className="Card-content">
        <h3>{title}</h3>
        <div>
          {getFormattedDate(creationDate)} · {estimatedTimeToRead}min
        </div>
      </div>
    </div>
  );
}

export { BlogPostCard };
export type { BlogPostCardProps };
