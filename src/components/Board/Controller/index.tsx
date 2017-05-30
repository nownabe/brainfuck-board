import * as React from "react";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

import AutoStepFast from "./AutoStepFast";
import AutoStepSlow from "./AutoStepSlow";
import Publish from "./Publish";
import Reset from "./Reset";
import Run from "./Run";
import Step from "./Step";
import Stop from "./Stop";

export default () => (
  <Columns>
    <Column><Run /></Column>
    <Column><AutoStepFast /></Column>
    <Column><AutoStepSlow /></Column>
    <Column><Step /></Column>
    <Column><Stop /></Column>
    <Column><Reset /></Column>
    <Column><Publish /></Column>
  </Columns>
);
