import * as React from "react";
import { connect } from "react-redux";

import Container from "components/common/MiniContainer";

const c = ({ programCounter, source }: { programCounter: number, source: string }) => (
  <Container>
    <h3>Next Instruction</h3>
    <pre>
      {
        source.split("").map((char, i) => (
          <span
            key={`source${i}`}
            className={programCounter === i ? "current-instruction" : ""}
          >
            {char}
          </span>
        ))
      }
    </pre>
  </Container>
);

export default connect(
  ({ interpreter, source }) => ({ programCounter: interpreter.programCounter, source }),
)(c);
