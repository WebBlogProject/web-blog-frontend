import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import { BlogPostPage } from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";
import { ErrorPage } from "./presentation/pages/ts/ErrorPage";
import { EmptyPage } from "./presentation/pages/ts/EmptyPage";

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
  // temporary link for testing EmptyPage
  {
    path: "/empty-page",
    element: <EmptyPage />,
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
