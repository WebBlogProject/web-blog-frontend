import { NotFound, NotFoundProps } from "../../components/ts/NotFound";

function NoSearchResultPage() {
  const props: NotFoundProps = {
    msg: "해당 검색어에 대한 검색 결과가 없습니다",
  };
  return (
    <div>
      <NotFound {...props} />
    </div>
  );
}

export { NoSearchResultPage };
