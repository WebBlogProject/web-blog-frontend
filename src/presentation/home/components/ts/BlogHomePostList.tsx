/* temporary test page for BlogPostCard */
import '../css/BlogHomePostList.css';
import {
  BlogPostCard,
  BlogPostCardProps,
} from '../../../shared/components/ts/BlogPostCard';
import sampleImage from '../../../../assets/postCardSampleImg.png';

const posts: any = [
  // temporary testdata , TODO : Create BlogPostType in the application layer
  {
    id: 1,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 2,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 3,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 4,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 5,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 6,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 7,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 8,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
  {
    id: 9,
    postCardProps: {
      title: 'some title',
      creationDate: Date.now(),
      estimateTimedToRead: 10,
      thumbnailUrl: sampleImage,
    },
  },
];

function BlogHomePostList() {
  return (
    <div className="Card-container">
      {posts.map((post: any) => (
        <BlogPostCard {...post.postCardProps} key={post.id} />
      ))}
    </div>
  );
}

export { BlogHomePostList };
