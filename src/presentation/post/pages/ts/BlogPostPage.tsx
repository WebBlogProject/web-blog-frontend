import { useLoaderData } from "react-router-dom";
import {
  BlogPostHeader,
  BlogPostHeaderProps,
} from "../../components/ts/BlogPostHeader";
import sampleImage from "../../../../assets/headerSampleImage.png";

export function loader({ params }: any) {
  return params.id;
}

function BlogPostPage() {
  // TODO : Temporary prop data to show header.
  // We need to replace it to redux data.
  const postId = useLoaderData();
  const testProps: BlogPostHeaderProps = {
    title: "postId: " + postId,
    creationDate: Date.now(),
    estimatedTimeToRead: 10,
    tagList: [
      {
        tagId: 1,
        tagProps: { tagName: "test1" },
      },
      {
        tagId: 2,
        tagProps: { tagName: "test2" },
      },
      {
        tagId: 3,
        tagProps: { tagName: "test3" },
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
