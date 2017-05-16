import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    margin: 1rem auto 0 auto;
    max-width: 1152px;
`;

const Columns = styled.div`
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
    display: flex;

    &:last-child {
        margin-bottom: -0.75rem;
    }
`;

export default ({ children }: { children: React.ReactNode }) => (
    <Container>
        <Columns>
            {children}
        </Columns>
    </Container>
);
