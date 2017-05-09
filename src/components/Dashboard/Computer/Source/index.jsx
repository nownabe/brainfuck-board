import React from "react";

import { connect } from "react-redux";

const c = ({ source }) => (
  <div id="source">
    <pre>{source}</pre>
  </div>
);

export default connect(
  ({ source }) => ({ source })
)(c);
