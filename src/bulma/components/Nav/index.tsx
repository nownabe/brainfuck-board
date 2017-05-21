import styled from "styled-components";

import { white } from "bulma/color";
import { navHeight } from "bulma/size";

export default styled.nav`
    align-items: stretch;
    background-color: ${white};
    display: flex;
    min-height: ${navHeight};
    position: relative;
    text-align: center;
    z-index: 2;

    ${({ hasShadow }: { hasShadow?: boolean}) => (
        hasShadow ? "box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1)" : ""
    )}
`;

import Container from "./Container";
import Item from "./Item";
import Left from "./Left";
import Link from "./Link";

export {
    Container,
    Item,
    Left,
    Link,
};
