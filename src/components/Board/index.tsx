import * as React from "react";

import Container from "components/common/Container";
import Header from "components/common/Header";
import Computer from "./Computer";
import Controller from "./Controller";

export default () => (
  <div>
    <Header />
    <Container>
      <Controller />
      <Computer />
    </Container>
  </div>
);
