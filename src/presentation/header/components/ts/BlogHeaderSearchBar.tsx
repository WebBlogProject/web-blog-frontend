import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BlogHeaderSearchBar.css';
import loupeImage from '../../../../assets/loupeSmall.png';

function BlogHeaderSearchBar() {
  const [query, setQuery] = useState('');
  const routerNavigate = useNavigate();

  const searchIfEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key !== 'Enter') {
        return;
      }
      routerNavigate(`/search?q=${query}`);
    },
    [query, routerNavigate]
  );

  const onClickSearchButton = useCallback(() => {
    routerNavigate(`/search?q=${query}`);
  }, [query, routerNavigate]);

  return (
    <div className="BlogHeaderSearchBar">
      <input
        className="BlogHeaderSearchBar-loupe"
        type="image"
        src={loupeImage}
        alt="Search Button"
        onClick={onClickSearchButton}
      />
      <input
        className="BlogHeaderSearchBar-input"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchIfEnter}
        value={query}
      />
    </div>
  );
}

export { BlogHeaderSearchBar };
