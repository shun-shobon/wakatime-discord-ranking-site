import type { VFC } from "react";

type Props = {
  code: string;
};

const Code: VFC<Props> = ({ code }) => {
  return (
    <div>
      <div>
        <h3>このコードをコピーしてDiscordのDMに送信してください。</h3>
        <div className="relative rounded-md">
          <input
            className="block w-full border-gray-300 rounded-md"
            value={code}
            type="text"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Code;
