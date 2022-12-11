import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import {
  BlogPostPage,
  loader as postLoader,
} from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";
import { getPositionOfLineAndCharacter } from "typescript";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHomePostList />,
  },
  {
    path: "/post/:id",
    element: <BlogPostPage />,
    loader: postLoader,
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
