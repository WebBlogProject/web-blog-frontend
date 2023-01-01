import loupeImage from '../../../assets/loupeBig.png';
import '../css/EmptyPage.css';

type EmptyPageProps = {
  msg: string;
};

function EmptyPage({ msg }: EmptyPageProps) {
  return (
    <div>
      <img
        src={loupeImage}
        className="EmptyPage-noItemIcon"
        alt="No item exist"
      />
      <div className="EmptyPage-description">{msg}</div>
    </div>
  );
}

export { EmptyPage };
export type { EmptyPageProps };
