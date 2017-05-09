import React from "react";

import { connect } from "react-redux";

const c = ({ output }) => (
  <div id="output">
    <pre>{output}</pre>
  </div>
);

export default connect(
  ({ output }) => ({ output })
)(c);
