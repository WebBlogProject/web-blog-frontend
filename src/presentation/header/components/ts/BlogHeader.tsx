import { BlogHeaderSearchBar } from "./BlogHeaderSearchBar";
import "../css/BlogHeader.css"

type BlogHeaderProps = {
    blogName: string;
}

function BlogHeader({blogName}: BlogHeaderProps) {
    return (
    <div className="BlogHeader">
        <BlogName blogName={blogName} />
        <BlogHeaderSearchBar />
    </div>
    );
}

function BlogName({blogName}: BlogHeaderProps) {
    return (
        <div className="BlogName">{blogName}</div>
    )
}

export { BlogHeader };