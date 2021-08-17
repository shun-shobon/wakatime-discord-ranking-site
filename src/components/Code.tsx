import type { VFC } from "react";

type Props = {
  code: string;
};

const Code: VFC<Props> = ({ code }) => {
  return (
    <div className="absolute w-full h-full pt-20 px-20 text-center">
      <h3>このコードをコピーしてDiscordのDMに送信してください。</h3>
      <textarea
        className="w-full mt-2 p-1 rounded-md border-2 border-grey-200 resize-none"
        readOnly
      >
        {code}
      </textarea>
    </div>
  );
};

export default Code;
