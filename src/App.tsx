import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BlogHeader } from "./presentation/header/components/ts/BlogHeader";
import { BlogPostPage } from "./presentation/post/pages/ts/BlogPostPage";
import { BlogHomePostList } from "./presentation/home/components/ts/BlogHomePostList";
import { ErrorPage, ErrorPageProps } from "./presentation/pages/ts/ErrorPage";
import { EmptyPage, EmptyPageProps } from "./presentation/pages/ts/EmptyPage";

const emptyPageProps: EmptyPageProps = {
  msg: "작성된 포스트(검색 결과)가 없습니다.",
};

const errorPageProps: ErrorPageProps = {
  msg: "일시적인 오류가 발생했습니다.",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <BlogHomePostList />,
    errorElement: <ErrorPage {...errorPageProps} />,
  },
  {
    path: "/post/:id",
    element: <BlogPostPage />,
    loader: ({ params }: any) => {
      return params.id;
    },
    errorElement: <ErrorPage {...errorPageProps} />,
  },
  // temporary link for testing EmptyPage
  {
    path: "/empty-page",
    element: <EmptyPage {...emptyPageProps} />,
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
