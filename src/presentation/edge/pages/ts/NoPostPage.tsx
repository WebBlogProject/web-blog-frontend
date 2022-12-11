import { NotFound, NotFoundProps } from "../../components/ts/NotFound";

function NoPostPage() {
  const props: NotFoundProps = {
    msg: "작성된 포스트가 없습니다",
  };
  return (
    <div>
      <NotFound {...props} />
    </div>
  );
}

export { NoPostPage };
