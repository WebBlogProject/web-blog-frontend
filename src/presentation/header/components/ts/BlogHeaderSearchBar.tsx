import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BlogHeaderSearchBar.css';
import { ReactComponent as LoupeImage } from '../../../../assets/loupe.svg';

function BlogHeaderSearchBar() {
  const [query, setQuery] = useState('');
  const routerNavigate = useNavigate();
  const searchResultPageUrl = `/search?q=${query}`;

  const searchIfEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key !== 'Enter') {
        return;
      }
      routerNavigate(searchResultPageUrl);
    },
    [routerNavigate, searchResultPageUrl]
  );

  const onClickSearchButton = useCallback(() => {
    routerNavigate(searchResultPageUrl);
  }, [routerNavigate, searchResultPageUrl]);

  return (
    <div className="BlogSearchBar">
      <button className="BlogSearchBar-button" onClick={onClickSearchButton}>
        <LoupeImage />
      </button>
      <input
        className="BlogSearchBar-input"
        type="search"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={searchIfEnter}
        value={query}
      />
    </div>
  );
}

export { BlogHeaderSearchBar };
