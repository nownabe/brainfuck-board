import React from "react"
import Controller from "./Controller"
import Computer from "./Computer"

export default () => (
  <div>
    <nav className="nav">
      <div className="nav-center">
        <h1 className="nav-item">Brainf*ck Board</h1>
      </div>
    </nav>
    <div id="board" className="columns">
      <Controller />
      <Computer />
    </div>
  </div>
)
