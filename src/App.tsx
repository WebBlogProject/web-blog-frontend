import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import { BlogPostPage } from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";
import { ErrorPage } from "./presentation/pages/ts/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHomePostList />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:id",
    element: <BlogPostPage />,
    loader: ({ params }: any) => {
      return params.id;
    },
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
