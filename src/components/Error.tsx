import type { VFC } from "react";

type Props = {
  error: string;
};

const Error: VFC<Props> = ({ error }) => {
  return (
    <div className="absolute w-full h-full pt-20 text-center">
      <p className="text-2xl">エラー: {error}</p>
    </div>
  );
};

export default Error;
