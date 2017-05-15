import * as React from "react";

import Reset from "./Reset";
import Run from "./Run";
import Step from "./Step";

export default () => (
  <div id="controller">
    <Run />
    <Step />
    <Reset />
  </div>
);
