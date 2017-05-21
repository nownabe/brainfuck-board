import * as React from "react";

import Column from "bulma/grid/Column";

import Memory from "./Memory";
import Output from "./Output";
import Source from "./Source";

export default () => (
  <Column>
    <Output />
    <Source />
    <Memory />
  </Column>
);
