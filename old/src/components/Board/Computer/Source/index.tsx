import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/common/MiniContainer";

const CurrentInstruction = styled.span`
  font-weight: bold;
  color: #fff;
  background-color: #000;
`;

const c = ({ programCounter, source }: { programCounter: number, source: string }) => (
  <Container>
    <h3>Next Instruction</h3>
    <pre>
      {
        source.split("").map((char, i) => (
          programCounter === i ?
          <CurrentInstruction key={`source${i}`}>{char}</CurrentInstruction>
          : <span key={`source${i}`}>{char}</span>
        ))
      }
    </pre>
  </Container>
);

export default connect(
  ({ interpreter, source }) => ({ programCounter: interpreter.programCounter, source }),
)(c);
