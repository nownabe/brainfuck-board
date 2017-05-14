import * as React from "react";

import { connect } from "react-redux";

const c = ({ output }: { output: string }) => (
  <div id="output">
    <pre>{output}</pre>
  </div>
);

export default connect(
  ({ interpreter }) => ({ output: interpreter.output })
)(c);
