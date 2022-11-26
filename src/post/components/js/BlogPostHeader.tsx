import { getFormattedDate } from '../../../shared/utils/PostUtils';
import {
  BlogPostHeaderTagItem,
  BlogPostHeaderTagItemProps,
} from './BlogPostHeaderTagItem';
import '../css/BlogPostHeader.css';

type BlogPostHeaderProps = {
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  tagList: BlogPostHeaderTag[];
  thumbnailUrl: string;
};

type BlogPostHeaderTag = {
  tagId: number;
  tagProps: BlogPostHeaderTagItemProps;
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
          <BlogPostHeaderTagItem {...tag.tagProps} key={tag.tagId} />
        ))}
      </div>
    </div>
  );
}

export { BlogPostHeader };
export type { BlogPostHeaderProps, BlogPostHeaderTag };
