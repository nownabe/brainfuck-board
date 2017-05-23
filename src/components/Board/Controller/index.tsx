import * as React from "react";

import AutoStepFast from "./AutoStepFast";
import AutoStepSlow from "./AutoStepSlow";
import Reset from "./Reset";
import Run from "./Run";
import Step from "./Step";

export default () => (
  <div>
    <Run />
    <AutoStepFast />
    <AutoStepSlow />
    <Step />
    <Reset />
  </div>
);
