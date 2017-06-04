import * as React from "react";
import styled from "styled-components";

import Content from "bulma/elements/Content";
import Icon from "bulma/elements/Icon";
import Container from "bulma/layout/Container";
import Footer from "bulma/layout/Footer";

const FooterBox = styled(Content)`
    text-align: center;
`;

export default () => (
    <Footer>
        <Container>
            <FooterBox>
                <p>Brainfuck Board by @nownabe</p>
                <p>
                    <a href="https://github.com/nownabe/brainfuck-board">
                        <Icon>github</Icon>
                    </a>
                </p>
            </FooterBox>
        </Container>
    </Footer>
);
