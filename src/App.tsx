import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import { BlogPostPage } from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from './presentation/home/components/ts/BlogHomePostList';

function App() {
  return (
    <div>
      <BlogHeader />
      <BlogPostPage />
      <BlogHomePostList/>
    </div>
  );
}

export default App;
