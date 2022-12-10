import { BlogHeaderSearchBar } from "./BlogHeaderSearchBar";
import "../css/BlogHeader.css";

const blogName = "Blog Name";

function BlogHeader() {
  return (
    <div className="BlogHeader">
      <div className="BlogName">{blogName}</div>
      <BlogHeaderSearchBar />
    </div>
  );
}

export { BlogHeader };
