import type { VFC } from "react";
import { useMemo } from "react";

import { getAppState, createRedirectURL } from "../lib";

import Redirect from "./Redirect";

const App: VFC = () => {
  const state = useMemo(getAppState, [location.href]);

  if (!state.done) {
    return <Redirect />;
  }

  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default App;
