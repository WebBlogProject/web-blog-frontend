import { BlogHeaderSearchBar } from "./BlogHeaderSearchBar";

type BlogHeaderProps = {
    blogName: string;
}

function BlogHeader({blogName}: BlogHeaderProps) {
    return (
    <div className="BlogHeader">
        <div className="BlogName">{blogName}</div>
        <BlogHeaderSearchBar />
    </div>
    );
}

export { BlogHeader };