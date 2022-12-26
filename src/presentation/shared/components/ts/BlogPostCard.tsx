import '../css/BlogPostCard.css';

import { getFormattedDate } from '../../utils/PostUtils';

type BlogPostCardProps = {
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  thumbnailUrl: string;
};

function BlogPostCard({
  title,
  creationDate,
  estimatedTimeToRead,
  thumbnailUrl,
}: BlogPostCardProps) {
  return (
    <div className="Post-card">
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
