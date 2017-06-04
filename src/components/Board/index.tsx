import * as React from "react";

import Header from "components/common/Header";

import Computer from "./Computer";
import Controller from "./Controller";
import Editor from "./Editor";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";
import Container from "bulma/layout/Container";
import Section from "bulma/layout/Section";
import Footer from "components/common/Footer";

export default () => (
  <div>
    <Header tab="board" />
    <Section>
      <Container>
        <Controller />
        <Columns>
          <Column><Editor /></Column>
          <Column><Computer /></Column>
        </Columns>
      </Container>
    </Section>
    <Footer />
  </div>
);
