import React from "react";

import Output from "./Output";
import Source from "./Source";
import Variables from "./Variables";
import Memory from "./Memory";

export default () => (
  <div className="column">
    <Output />
    <Source />
    <Variables />
    <Memory />
  </div>
);
