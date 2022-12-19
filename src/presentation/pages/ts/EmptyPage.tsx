import loupeImage from '../../../assets/loupeBig.png';
import '../css/EmptyPage.css';

type EmptyPageProps = {
  msg: string;
};

function EmptyPage({ msg }: EmptyPageProps) {
  return (
    <div>
      <div className="loupe-container">
        <img className="loupe" src={loupeImage} alt={'No item exist'}></img>
      </div>
      <div className="msg">{msg}</div>
    </div>
  );
}

export { EmptyPage };
export type { EmptyPageProps };
