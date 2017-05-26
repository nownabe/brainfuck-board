import * as React from "react";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

import AutoStepFast from "./AutoStepFast";
import AutoStepSlow from "./AutoStepSlow";
import Reset from "./Reset";
import Run from "./Run";
import Step from "./Step";
import Save from "./Save";

export default () => (
  <Columns>
    <Column><Run /></Column>
    <Column><AutoStepFast /></Column>
    <Column><AutoStepSlow /></Column>
    <Column><Step /></Column>
    <Column><Reset /></Column>
    <Column><Save /></Column>
  </Columns>
);
