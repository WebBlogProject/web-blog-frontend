import loupeImage from '../../../assets/loupeBig.png';
import '../css/ErrorPage.css';

type ErrorPageProps = {
  msg: string;
};

function ErrorPage({ msg }: ErrorPageProps) {
  return (
    <div>
      <div className="loupe-container">
        <img className="loupe" src={loupeImage} alt={'No item exist'}></img>
      </div>
      <div className="msg">{msg}</div>
    </div>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
