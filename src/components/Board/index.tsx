import * as React from "react";

import Header from "components/common/Header";

import Computer from "./Computer";
import Controller from "./Controller";
import Editor from "./Editor";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";
import Container from "bulma/layout/Container";
import Section from "bulma/layout/Section";

export default () => (
  <div>
    <Header />
    <Section>
      <Container>
        <Controller />
        <Columns>
          <Column><Editor /></Column>
          <Column><Computer /></Column>
        </Columns>
      </Container>
    </Section>
  </div>
);
