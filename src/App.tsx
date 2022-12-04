import { BlogHeader } from './presentation/header/components/ts/BlogHeader';
import { BlogPostPage } from './presentation/post/pages/ts/BlogPostPage';

function App() {
  const blogName = "Blog Name"
  return (
    <div>
      <BlogHeader blogName={blogName}/>
      <BlogPostPage />
    </div>
  );
}

export default App;
