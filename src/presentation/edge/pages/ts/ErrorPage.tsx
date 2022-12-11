import { NotFound, NotFoundProps } from "../../components/ts/NotFound";

function ErrorPage() {
  const props: NotFoundProps = {
    msg: "일시적인 오류가 발생했습니다",
  };
  return (
    <div>
      <NotFound {...props} />
    </div>
  );
}

export { ErrorPage };
