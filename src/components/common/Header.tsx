import * as React from "react";
import styled from "styled-components";

import Nav from "bulma/components/Nav";
import Container from "bulma/components/Nav/Container";

import { linkHover, primary, textGray } from "styles/color";
import { normal } from "styles/size";

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
`;

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
`;

interface TabLinkProps {
  active: boolean;
  className?: string;
  children: string;
}
const TabLink: React.StatelessComponent<TabLinkProps> = (props) => (
  <a className={props.className}>{props.children}</a>
);

const StyledTabLink = styled(TabLink)`
  align-items: center;
  display: flex;
  flwx-grow: 0;
  flex-shrink: 0;
  font-size: ${normal};
  justify-content: center;
  line-height: 1.5;
  color: ${({ active }: { active: boolean }) => (active ? primary : textGray)};
  border-bottom: 1px solid transparent;
  ${({ active }: { active: boolean }) => (
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
    color: ${({ active }: { active: boolean }) => (active ? primary : linkHover)};
    border-bottom-color: ${primary};
  }
`;

export default () => (
  <div>
    <Nav hasShadow>
      <Container>
        <Left>
          <Title>Brainf*ck Board</Title>
          <StyledTabLink active={true}>Board</StyledTabLink>
          <StyledTabLink active={false}>Ranking</StyledTabLink>
        </Left>
      </Container>
    </Nav>
  </div>
);
