import * as React from "react";
import { connect } from "react-redux";

import DarkTextarea from "components/common/DarkTextarea";
import Container from "components/common/MiniContainer";

const c = ({ output }: { output: string }) => (
  <Container>
    <h3>Output</h3>
    <DarkTextarea value={output} disabled />
  </Container>
);

export default connect(
  ({ interpreter }) => ({ output: interpreter.output }),
)(c);
