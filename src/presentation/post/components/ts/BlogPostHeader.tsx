import { getFormattedDate } from '../../../shared/utils/PostUtils';
import { BlogPostHeaderTagItem } from '../../../shared/components/ts/BlogPostHeaderTagItem';
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
    <header className="BlogPostHeader BlogGrid">
      <figure className="BlogPostHeader-thumbnail">
        <img
          src={thumbnailUrl}
          alt={`${title}_thumbnail`}
          sizes="(min-width: 1400px) 1400px, 92vw"
        />
      </figure>
      <div>
        {tagList.map((tag) => (
          <BlogPostHeaderTagItem tagName={tag.tagName} key={tag.tagId} />
        ))}
      </div>
      <h1 className="BlogPostHeader-title">{title}</h1>
      <div className="BlogPostHeader-description">
        {`${getFormattedDate(creationDate)} \u00B7 ${estimatedTimeToRead} min`}
      </div>
    </header>
  );
}

export { BlogPostHeader };
export type { BlogPostHeaderProps };
