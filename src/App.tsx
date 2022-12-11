import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import {
  BlogPostPage,
  loader as postLoader,
} from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";
import { ErrorPage } from "./presentation/edge/pages/ts/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHomePostList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:id",
    element: <BlogPostPage />,
    loader: postLoader,
    errorElement: <ErrorPage />,
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
