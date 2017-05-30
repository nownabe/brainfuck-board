import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import styled from "styled-components";

import Nav, { Container, Item, Left, Right } from "bulma/components/Nav";
import GitHub from "./GitHub";
import Link from "./Link";
import SignOut from "./SignOut";

import { User } from "states";

const Title = styled.h1`font-weight: bold;`;

type Tab = "board" | "programs";

const c = (props: { dispatch: Dispatch<Action>, user: User, tab: Tab }) => (
  <div>
    <Nav hasShadow>
      <Container>
        <Left>
          <Item>
            <Title>Brainfuck Board</Title>
          </Item>
          <Link to="/" isTab isActive={props.tab === "board"}>Board</Link>
          <Link to="/programs" isTab isActive={props.tab === "programs"}>Programs</Link>
        </Left>
        {
          props.user ?
          <Right>
            <Item>{props.user.name}</Item>
            <Item><SignOut /></Item>
          </Right>
          :
          <Right>
            <Item><GitHub /></Item>
          </Right>
        }
      </Container>
    </Nav>
  </div>
);

export default connect(
  ({ user }, ownProps: { tab: Tab }) => ({ user, tab: ownProps.tab }),
)(c);
