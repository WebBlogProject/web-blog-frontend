import {
  BlogPostHeader,
  BlogPostHeaderProps,
} from '../../components/js/BlogPostHeader';
import sampleImage from '../../../assets/headerSampleImage.png';

function BlogPostPage() {
  // TODO : Temporary prop data to show header.
  // We need to replace it to redux data.
  const testProps: BlogPostHeaderProps = {
    title: 'title',
    creationDate: Date.now(),
    estimatedTimeToRead: 10,
    tagList: [
      {
        tagId: 1,
        tagProps: { tagName: 'test1' },
      },
      {
        tagId: 2,
        tagProps: { tagName: 'test2' },
      },
      {
        tagId: 3,
        tagProps: { tagName: 'test3' },
      },
    ],
    thumbnailUrl: sampleImage,
  };

  return (
    <div>
      <BlogPostHeader {...testProps} />
    </div>
  );
}

export { BlogPostPage };
