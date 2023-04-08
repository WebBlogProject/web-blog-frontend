import { BlogHeaderSearchBar } from './BlogHeaderSearchBar';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BlogHeader.css';

const blogName = 'Blog Name';

function BlogHeader() {
  const routerNavigate = useNavigate();

  const onClickSearchButton = useCallback(() => {
    routerNavigate(`/`);
  }, [routerNavigate]);

  return (
    <div className="BlogHeader">
      <div className="BlogName" onClick={onClickSearchButton}>
        {blogName}
      </div>
      <BlogHeaderSearchBar />
      <hr />
    </div>
  );
}

export { BlogHeader };
