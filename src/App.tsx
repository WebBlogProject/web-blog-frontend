import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { BlogHeader } from './presentation/header/components/ts/BlogHeader';
import { BlogPostPage } from './presentation/post/pages/ts/BlogPostPage';
import { BlogHomePage } from './presentation/home/pages/ts/BlogHomePage';
import { ErrorPage, ErrorPageProps } from './presentation/pages/ts/ErrorPage';
import { EmptyPage, EmptyPageProps } from './presentation/pages/ts/EmptyPage';
import { BlogSearchResultPage } from './presentation/searchPage/pages/ts/BlogSearchResultPage';
import './App.css';

const emptyPageProps: EmptyPageProps = {
  msg: '작성된 포스트(검색 결과)가 없습니다.',
};

const errorPageProps: ErrorPageProps = {
  msg: '일시적인 오류가 발생했습니다.',
};

const BlogMainLayout = () => {
  return (
    <>
      <BlogHeader />
      <main className="BlogMain">
        <Outlet />
      </main>
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <BlogMainLayout />,
    children: [
      {
        path: '/',
        element: <BlogHomePage />,
        errorElement: <ErrorPage {...errorPageProps} />,
      },
      {
        path: '/post/:id',
        element: <BlogPostPage />,
        loader: ({ params }: any) => {
          return params.id;
        },
        errorElement: <ErrorPage {...errorPageProps} />,
      },
      {
        path: '/search',
        element: <BlogSearchResultPage />,
      },
      // temporary link for testing EmptyPage
      {
        path: '/empty-page',
        element: <EmptyPage {...emptyPageProps} />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
