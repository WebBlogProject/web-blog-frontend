import '../css/BlogPostHeader.css';

type BlogPostHeaderProps = {
  title: string;
  creationDate: number;
  estimatedTimeToRead: number;
  tagList: string[];
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
      {/*TODO: Show header information*/}
    </div>
  );
}

export { BlogPostHeader };
export type { BlogPostHeaderProps };
