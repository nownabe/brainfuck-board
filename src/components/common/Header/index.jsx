import React from "react";
import styled from "styled-components";

const Header = styled.nav`
  & {
    align-items: stretch;
    background-color: #fff;
    display: flex;
    height: 3.25rem;
    position: relative;
    text-align: center;
    z-index: 10;
  }
`;

export default () => (
  <Header>
    <div className="nav-center">
      <h1 className="nav-item">Brainf*ck Board</h1>
    </div>
  </Header>
)
