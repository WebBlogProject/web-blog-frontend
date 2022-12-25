import loupeImage from '../../../assets/loupeBig.png';
import '../css/EmptyPage.css';

type EmptyPageProps = {
  msg: string;
};

function EmptyPage({ msg }: EmptyPageProps) {
  return (
    <div>
      <div className="EmptyPage-NoItemIcon">
        <img src={loupeImage} alt="No item exist"></img>
      </div>
      <div className="EmptyPage-Description">{msg}</div>
    </div>
  );
}

export { EmptyPage };
export type { EmptyPageProps };
