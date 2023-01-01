import loupeImage from '../../../assets/loupeBig.png';
import '../css/ErrorPage.css';

type ErrorPageProps = {
  msg: string;
};

function ErrorPage({ msg }: ErrorPageProps) {
  return (
    <div>
      <img
        src={loupeImage}
        className="ErrorPage-noItemIcon"
        alt="No item exist"
      />
      <div className="ErrorPage-description">{msg}</div>
    </div>
  );
}

export { ErrorPage };
export type { ErrorPageProps };
