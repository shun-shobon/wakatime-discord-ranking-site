import type { VFC } from "react";
import { useMemo } from "react";

import { getAppState, createRedirectURL } from "../lib";

const App: VFC = () => {
  const state = useMemo(getAppState, [location.href]);

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default App;
