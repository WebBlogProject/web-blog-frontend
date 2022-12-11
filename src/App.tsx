import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import { BlogPostPage } from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHomePostList />,
  },
  {
    path: "/post",
    element: <BlogPostPage />,
  },
]);

function App() {
  return (
    <div>
      <BlogHeader />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
