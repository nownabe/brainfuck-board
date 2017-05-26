import * as React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Nav, { Container, Item, Left, Link, Right } from "bulma/components/Nav";
import SignOut from "./SignOut";
import Twitter from "./Twitter";

import { User } from "states";

const Title = styled.h1`font-weight: bold;`;

const c = (props: { user: User }) => (
  <div>
    <Nav hasShadow>
      <Container>
        <Left>
          <Item>
            <Title>Brainf*ck Board</Title>
          </Item>
          <Link isTab isActive>Board</Link>
        </Left>
        {
          props.user ?
          <Right>
            <Item>{props.user.name}</Item>
            <Item><SignOut /></Item>
          </Right>
          :
          <Right>
            <Item><Twitter /></Item>
          </Right>
        }
      </Container>
    </Nav>
  </div>
);

export default connect(
  ({ user }) => ({ user }),
)(c);
