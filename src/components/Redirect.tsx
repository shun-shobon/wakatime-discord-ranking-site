import type { VFC } from "react";
import { useEffect } from "react";

import { createRedirectURL } from "../lib";

const Redirect: VFC = () => {
  useEffect(() => {
    const url = createRedirectURL();
    location.href = url;
  }, []);

  return (
    <div className="absolute w-full h-full pt-20 text-center">
      <p className="text-2xl">リダイレクト中…</p>
    </div>
  );
};

export default Redirect;
