import loupeImage from '../../../assets/loupeBig.png';
import '../css/ErrorPage.css';

type ErrorPageProps = {
  msg: string;
};

function ErrorPage({ msg }: ErrorPageProps) {
  return (
    <div>
      <div className="ErrorPage-NoItemIcon">
        <img src={loupeImage} alt="No item exist"></img>
      </div>
      <div className="ErrorPage-Description">{msg}</div>
    </div>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
