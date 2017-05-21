import * as React from "react";

import Reset from "./Reset";
import RunAll from "./RunAll";
import RunFast from "./RunFast";
import Step from "./Step";

export default () => (
  <div>
    <RunAll />
    <RunFast />
    <Step />
    <Reset />
  </div>
);
