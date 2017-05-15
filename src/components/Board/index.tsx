import Header from "components/common/Header";
import * as React from "react";
import Computer from "./Computer";
import Controller from "./Controller";

export default () => (
  <div>
    <Header />
    <div id="board" className="columns">
      <Controller />
      <Computer />
    </div>
  </div>
);
