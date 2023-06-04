import '../css/KeywordPresenter.css';
import { ReactComponent as LoupeImage } from '../../../../assets/loupe.svg';

type KeywordPresenterProps = {
  keyword: string;
};

function KeywordPresenter({ keyword }: KeywordPresenterProps) {
  return (
    <div className="KeywordPresenter">
      <h2 className="KeywordHeader">검색 결과</h2>
      <div className="Keyword">
        <LoupeImage />
        <h4>{keyword}</h4>
      </div>
    </div>
  );
}

export { KeywordPresenter };
