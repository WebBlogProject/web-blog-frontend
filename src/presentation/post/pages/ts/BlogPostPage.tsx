import { useLoaderData } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../../../application/redux/api/apiSlice';
import { ErrorPage, ErrorPageProps } from '../../../pages/ts/ErrorPage';
import { BlogPostBodyContent } from '../../components/ts/BlogPostBodyContent';
import { BlogPostHeader } from '../../components/ts/BlogPostHeader';

function BlogPostPage() {
  const errorPageProps: ErrorPageProps = {
    msg: '포스트 정보를 불러오지 못했습니다.',
  };

  const { data, isSuccess, isError } = useGetPostByIdQuery(
    useLoaderData() as number
  );

  if (isSuccess) {
    return (
      <div>
        <BlogPostHeader
          title={data.title}
          creationDate={data.creationDate}
          estimatedTimeToRead={data.estimatedTimeToRead}
          thumbnailUrl={data.thumbnailUrl}
          tagList={data.tagList}
        />
        <BlogPostBodyContent bodyContent={data.bodyContent} />
      </div>
    );
  } else if (isError) {
    return <ErrorPage msg={errorPageProps.msg} />;
  } else {
    return <div> loading ... </div>;
  }
}

export { BlogPostPage };
