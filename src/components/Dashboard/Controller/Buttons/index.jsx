import React from "react";
import { connect } from "react-redux";

import Run from "./Run";
import Step from "./Step";
import Reset from "./Reset";

export default () => (
  <div id="controller">
    <Run />
    <Step />
    <Reset />
  </div>
)
