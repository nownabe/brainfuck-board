import * as React from "react";
import { connect } from "react-redux";

const c = ({ memory, pointer }: { memory: Array<number>, pointer: number }) => (
  <table id="memory" className="table is-narrow is-striped">
    <thead>
      <tr>
        <th>Address</th>
        <th>Value</th>
        <th>Letter</th>
      </tr>
    </thead>
    <tbody>
      {
        memory.map((v, i) => (
          <tr key={`addr${i}`}>
            <td className={pointer === i ? "pointed" : ""}>
              {i}{pointer === i ? "*" : ""}
            </td>
            <td>{v}</td>
            <td>{String.fromCharCode(v)}</td>
          </tr>
        ))
      }
    </tbody>
  </table>
)

export default connect(
  ({ interpreter }) => ({
    memory: interpreter.memory,
    pointer: interpreter.pointer,
  })
)(c);
