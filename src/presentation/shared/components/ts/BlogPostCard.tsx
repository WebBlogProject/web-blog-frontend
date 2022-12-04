import '../css/BlogPostCard.css';

import { getFormattedDate } from '../../utils/PostUtils';

type BlogPostCardProps = {
  id: number;
  title: string;
  creationDate: number;
  estimateTimedToRead: number;
  thumbnailUrl: string;
};

function BlogPostCard({
  title,
  creationDate,
  estimateTimedToRead,
  thumbnailUrl,
}: BlogPostCardProps) {
  return (
    <div className="Post-card">
      <img src={thumbnailUrl} alt="${title}_thumbnail" />
      <div className="Card-content">
        <div>{getFormattedDate(creationDate)}</div>
        <h3>{title}</h3>
        <div>{estimateTimedToRead}min</div>
      </div>
    </div>
  );
}

export { BlogPostCard };
export type { BlogPostCardProps };
