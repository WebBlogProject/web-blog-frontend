import { getFormattedDate } from '../../../shared/utils/PostUtils';
import { BlogPostHeaderTagItem } from './BlogPostHeaderTagItem';
import { Tag } from '../../../../application/types/Tag';
import '../css/BlogPostHeader.css';

type BlogPostHeaderProps = {
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  tagList: Tag[];
  thumbnailUrl: string;
};

function BlogPostHeader({
  title,
  creationDate,
  estimatedTimeToRead,
  tagList,
  thumbnailUrl,
}: BlogPostHeaderProps) {
  return (
    <div className="BlogPostHeader">
      <img
        className="BlogPostHeader-thumbnail"
        src={thumbnailUrl}
        alt={`${title}_thumbnail`}
      />
      <div className="BlogPostHeader-title">{title}</div>
      <div className="BlogPostHeader-description">
        {`${getFormattedDate(creationDate)} \u00B7 ${estimatedTimeToRead} min`}
      </div>
      <div>
        {tagList.map((tag) => (
          <BlogPostHeaderTagItem tagName={tag.tagName} key={tag.tagId} />
        ))}
      </div>
    </div>
  );
}

export { BlogPostHeader };
export type { BlogPostHeaderProps };
