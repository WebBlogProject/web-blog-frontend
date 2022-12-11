type NotFoundProps = {
  msg: string;
};

function NotFound({ msg }: NotFoundProps) {
  // TODO
  return <div>{msg}</div>;
}

export type { NotFoundProps };
export { NotFound };
