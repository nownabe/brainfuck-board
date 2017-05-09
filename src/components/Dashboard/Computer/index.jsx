import React from "react";

import Output from "./Output";
import Source from "./Source";
import Variables from "./Variables";

export default () => (
  <div className="column">
    <Output />
    <Source />
    <Variables />
  </div>
);
