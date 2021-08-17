import type { VFC } from "react";
import { useMemo } from "react";

import { getAppState } from "../lib";

import Redirect from "./Redirect";
import Code from "./Code";

const App: VFC = () => {
  const state = useMemo(getAppState, [location.href]);

  if (state.done && state.code !== undefined) {
    return <Code code={state.code} />;
  }

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
