import * as React from "react";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

import AutoStep from "./AutoStep";
import Publish from "./Publish";
import Reset from "./Reset";
import Run from "./Run";
import Step from "./Step";
import Stop from "./Stop";

export default () => (
  <Columns>
    <Column><Run /></Column>
    <Column><AutoStep interval={5}>Auto Step (Fast)</AutoStep></Column>
    <Column><AutoStep interval={20}>Auto Step (Slow)</AutoStep></Column>
    <Column><Step /></Column>
    <Column><Stop /></Column>
    <Column><Reset /></Column>
    <Column><Publish /></Column>
  </Columns>
);
