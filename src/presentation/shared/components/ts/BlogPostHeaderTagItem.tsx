import '../css/BlogPostHeaderTagItem.css';

type BlogPostHeaderTagItemProps = {
  tagName: string;
};

function BlogPostHeaderTagItem({ tagName }: BlogPostHeaderTagItemProps) {
  return <span className="BlogPostHeaderTagItem">{tagName}</span>;
}

export { BlogPostHeaderTagItem };
export type { BlogPostHeaderTagItemProps };
