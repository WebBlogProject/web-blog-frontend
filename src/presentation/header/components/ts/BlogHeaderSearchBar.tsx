import React, { useState, useCallback } from 'react';
import '../css/BlogHeaderSearchBar.css';
import loupeImage from '../../../../assets/loupeSmall.png';

function BlogHeaderSearchBar() {
  const [query, setQuery] = useState('');

  const searchIfEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key !== 'Enter') {
        return;
      }
      /* TODO: Impelemnt search */
      console.log(query);
    },
    [query]
  );

  const onClickSearchButton = useCallback(() => {
    /* TODO: Impelemnt search */
    console.log('click button');
  }, []);

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
        onKeyPress={searchIfEnter}
        value={query}
      />
    </div>
  );
}

export { BlogHeaderSearchBar };
