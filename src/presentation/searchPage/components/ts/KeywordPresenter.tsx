import loupeImage from '../../../../assets/loupeSmall.png';
import '../css/KeywordPresenter.css';

type KeywordPresenterProps = {
  keyword: string;
};

function KeywordPresenter({ keyword }: KeywordPresenterProps) {
  return (
    <div className="KeywordPresenter">
      <div className="KeywordHeader">
        <div>검색 결과</div>
        <img className="loupe" src={loupeImage} alt="Search Button" />
      </div>
      <div className="Keyword">{keyword}</div>
    </div>
  );
}

export { KeywordPresenter };
