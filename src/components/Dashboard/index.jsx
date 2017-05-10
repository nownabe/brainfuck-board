import React from "react"
import Controller from "./Controller"
import Computer from "./Computer"
import Header from "components/common/Header";

export default () => (
  <div>
    <Header />
    <div id="board" className="columns">
      <Controller />
      <Computer />
    </div>
  </div>
)
