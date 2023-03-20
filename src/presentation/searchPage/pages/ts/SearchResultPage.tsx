import { useSearchParams } from 'react-router-dom';
import { PostHeaderData } from '../../../../application/types/PostHeaderData';
import { useCallback } from 'react';
import { BlogPostCardList } from '../../../shared/components/ts/BlogPostCardList';
import { KeywordBar } from '../../components/ts/KeywordBar';

const mockPostHeader: PostHeaderData[] = [
  {
    id: 1,
    title: 'Blog 1',
    creationDate: 1000,
    estimatedTimeToRead: 3,
    thumbnailUrl: 'someUrl.png',
    tagList: [
      {
        tagId: 1,
        tagName: 'tag1',
      },
    ],
  },
  {
    id: 2,
    title: 'Blog 2',
    creationDate: 2000,
    estimatedTimeToRead: 6,
    thumbnailUrl: 'someUrl.png',
    tagList: [
      {
        tagId: 2,
        tagName: 'tag2',
      },
    ],
  },
  {
    id: 3,
    title: 'Blog 3',
    creationDate: 3000,
    estimatedTimeToRead: 9,
    thumbnailUrl: 'someUrl.png',
    tagList: [
      {
        tagId: 3,
        tagName: 'tag3',
      },
    ],
  },
  {
    id: 4,
    title: 'Blog 4',
    creationDate: 4000,
    estimatedTimeToRead: 12,
    thumbnailUrl: 'someUrl.png',
    tagList: [
      {
        tagId: 4,
        tagName: 'tag4',
      },
    ],
  },
  {
    id: 5,
    title: 'Blog 5',
    creationDate: 5000,
    estimatedTimeToRead: 15,
    thumbnailUrl: 'someUrl.png',
    tagList: [
      {
        tagId: 5,
        tagName: 'tag5',
      },
    ],
  },
];

function SearchResultPage() {
  const [search, setSearch] = useSearchParams();
  // get query from url
  const query = search.get('q') ?? '';
  const renderPage = useCallback(() => {
    return (
      <div>
        <KeywordBar keyword={query} />
        <BlogPostCardList posts={mockPostHeader} />
      </div>
    );
  }, []);
  return <div>{renderPage()}</div>;
}

export { SearchResultPage };
