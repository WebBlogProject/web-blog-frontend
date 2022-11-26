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
  return <>{/*TODO: Show header information*/}</>;
}

export { BlogPostHeader };
export type { BlogPostHeaderProps };
