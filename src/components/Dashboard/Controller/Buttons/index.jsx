import React from "react";
import { connect } from "react-redux";

import Run from "./Run";
import Step from "./Step";

export default () => (
  <div id="controller">
    <Run />
    <Step />
  </div>
)
