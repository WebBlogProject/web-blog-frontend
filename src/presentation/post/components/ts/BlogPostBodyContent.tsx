import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../css/BlogPostBodyContent.css';

type BlogPostBodyContentProps = {
  bodyContent: string;
};

function BlogPostBodyContent({ bodyContent }: BlogPostBodyContentProps) {
  return (
    <ReactMarkdown
      children={bodyContent}
      remarkPlugins={[remarkGfm]}
      className="BlogPostBodyContent"
    />
  );
}

export { BlogPostBodyContent };
