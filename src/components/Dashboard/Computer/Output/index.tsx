import * as React from "react";

import { State } from "states";

import { connect } from "react-redux";

const c = ({ output }: { output: string }) => (
  <div id="output">
    <pre>{output}</pre>
  </div>
);

/*
export default connect(
  ({ interpreter }) => ({ output: interpreter.output }),
)(c);
*/

export default connect(
  (state: State) => {
    console.log(state);
    return { output: state.interpreter.output }
  }
)(c)