import React from "react";
import { connect } from "react-redux";

const c = ({ programCounter, pointer, value }) => (
  <div id="variables">
    <table className="table">
      <tbody>
        <tr>
          <td>Program Counter</td>
          <td>{programCounter}</td>
        </tr>
        <tr>
          <td>Pointer</td>
          <td>{pointer}</td>
        </tr>
        <tr>
          <td>Value</td>
          <td>{value}</td>
        </tr>
        <tr>
          <td>Ascii</td>
          <td>{String.fromCharCode(value)}</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default connect(
  ({ programCounter, pointer, value }) => ({ programCounter, pointer, value })
)(c)
