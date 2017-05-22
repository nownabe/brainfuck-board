import * as React from "react";
import styled from "styled-components";

import Nav, { Container, Item, Left, Link } from "bulma/components/Nav";

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
        </Left>
      </Container>
    </Nav>
  </div>
);
