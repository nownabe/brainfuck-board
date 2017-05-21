import * as React from "react";
import styled from "styled-components";

import Nav from "bulma/components/Nav";
import Container from "bulma/components/Nav/Container";
import Left from "bulma/components/Nav/Left";

const Title = styled.h1`font-weight: bold;`;

export default () => (
  <div>
    <Nav hasShadow>
      <Container>
        <Left>
          <div className="nav-item">
            <Title>Brainf*ck Board</Title>
          </div>
          <a href="" className="nav-item is-tab is-active">Board</a>
          <a href="" className="nav-item is-tab">Ranking</a>
        </Left>
      </Container>
    </Nav>
  </div>
);
