import type { VFC } from "react";
import { useMemo } from "react";

import { getAppState } from "../lib";

import Redirect from "./Redirect";
import Code from "./Code";
import Error from "./Error";

const App: VFC = () => {
  const state = useMemo(getAppState, [location.href]);

  if (state.done && state.code !== undefined) {
    return <Code code={state.code} />;
  }

  if (state.done && state.error !== undefined) {
    return <Error error={state.error} />;
  }

  return <Redirect />;
};

export default App;
