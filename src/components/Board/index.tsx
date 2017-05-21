import * as React from "react";

import Header from "components/common/Header";
import Computer from "./Computer";
import Controller from "./Controller";

import Columns from "bulma/grid/columns";
import Container from "bulma/layout/Container";
import Section from "bulma/layout/Section";

export default () => (
  <div>
    <Header />
    <Section>
      <Container>
        <Columns>
          <Controller />
          <Computer />
        </Columns>
      </Container>
    </Section>
  </div>
);
