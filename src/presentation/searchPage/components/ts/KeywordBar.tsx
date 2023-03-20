import loupeImage from '../../../../assets/loupeSmall.png';
import '../css/KeywordBar.css';

type KeywordBarProps = {
  keyword: string;
};

function KeywordBar({ keyword }: KeywordBarProps) {
  return (
    <div className="Keyword-Bar-container">
      <div className="Keyword-Header-container">
        <div>검색 결과</div>
        <img className="loupe" src={loupeImage} alt="Search Button" />
      </div>
      <div className="Keyword-container">{keyword}</div>
    </div>
  );
}

export { KeywordBar };
export type { KeywordBarProps as SearchResultProps };
