import React from "react";
import styled from "styled-components";

import { desktop, normal, navHeight } from "styles/size";
import { white, primary, textGray, linkHover } from "styles/color";

const Header = styled.header`
  & {
    align-items: stretch;
    background-color: ${white};
    display: flex;
    height: ${navHeight};
    position: relative;
    text-align: center;
    z-index: 10;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1);
  }
`;

const Container = styled.div`
  & {
    position: relative;
    margin: 0 auto;
    max-width: 1152px;
    align-items: stretch;
    display: flex;
    min-height: ${navHeight};
    width: 100%;
  }
`

const Left = styled.div`
  & {
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 100%;
    overflow: auto;
    flex-basis: 0;
    justify-content: flex-start;
    white-space: nowrap;
  }
`

const Title = styled.h1`
  & {
    align-items: center;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: ${normal};
    justify-content: center;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    font-weight: bold;
  }
`

const TabLink = styled.a`
  align-items: center;
  display: flex;
  flwx-grow: 0;
  flex-shrink: 0;
  font-size: ${normal};
  justify-content: center;
  line-height: 1.5;
  color: ${({ active }) => (active ? primary : textGray)};
  border-bottom: 1px solid transparent;
  ${({ active }) => (
    active ?
      `border-bottom: 3px solid ${primary};
      padding-bottom: calc(0.75rem - 3px);`
    :
      `border-bottom: 1px solid transparent;
      padding-bottom: calc(0.75rem - 1px);`
  )}
  border-top: 1px solid transparent;
  padding-bottom: calc(0.75rem - 1px);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: calc(0.75rem - 1px);

  &:hover {
    color: ${({ active }) => (active ? primary : linkHover)};
    border-bottom-color: ${primary};
  }
`

export default () => (
  <div>
    <Header>
      <Container>
        <Left>
          <Title>Brainf*ck Board</Title>
          <TabLink active>Board</TabLink>
          <TabLink>Ranking</TabLink>
        </Left>
      </Container>
    </Header>
  </div>
)
