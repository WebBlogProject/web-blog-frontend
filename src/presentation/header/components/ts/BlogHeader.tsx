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
    <header className="BlogHead">
      <div className="BlogHead-inner">
        <nav className="BlogHead-menu" onClick={onClickSearchButton}>
          <ul className="nav">
            <li>{blogName}</li>
          </ul>
        </nav>
        <BlogHeaderSearchBar />
      </div>
    </header>
  );
}

export { BlogHeader };
