import * as React from "react";
import styled from "styled-components";

import Nav from "bulma/components/Nav";
import Container from "bulma/components/Nav/Container";
import Item from "bulma/components/Nav/Item";
import Left from "bulma/components/Nav/Left";
import Link from "bulma/components/Nav/Link";

const Title = styled.h1`font-weight: bold;`;

export default () => (
  <div>
    <Nav hasShadow>
      <Container>
        <Left>
          <Item>
            <Title>Brainf*ck Board</Title>
          </Item>
          <Link isTab isActive>Board</Link>
          <Link isTab>Ranking</Link>
        </Left>
      </Container>
    </Nav>
  </div>
);
