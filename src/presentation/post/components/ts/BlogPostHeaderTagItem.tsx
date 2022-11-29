import '../css/BlogPostHeaderTagItem.css';

type BlogPostHeaderTagItemProps = {
  tagName: string;
};

function BlogPostHeaderTagItem({ tagName }: BlogPostHeaderTagItemProps) {
  return <div className="BlogPostHeaderTagItem">{tagName}</div>;
}

export { BlogPostHeaderTagItem };
export type { BlogPostHeaderTagItemProps };
