import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Container from "components/common/MiniContainer";

const PointedAddress = styled.td`
  font-weight: bold;
  color: #d00;
`;

const c = ({ memory, pointer }: { memory: number[], pointer: number }) => (
  <Container>
    <h3>Memory</h3>
    <table className="table is-narrow is-striped">
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
              {
                pointer === i ?
                <PointedAddress>{i}*</PointedAddress>
                : <td>{i}</td>
              }
              <td>{v}</td>
              <td>{String.fromCharCode(v)}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </Container>
);

export default connect(
  ({ interpreter }) => ({
    memory: interpreter.memory,
    pointer: interpreter.pointer,
  }),
)(c);
