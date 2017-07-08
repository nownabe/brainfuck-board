import * as React from "react";
import styled from "styled-components";

import { Program } from "states";

import { inputBorder } from "bulma/color";
import { Danger, Primary } from "bulma/elements/Button/colors";
import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

interface Props {
    program: Program;
}

const Container = styled(Column)`
    display: flex;
    align-items: baseline;
    border-bottom: 1px solid ${inputBorder};
`;
const Buttons = styled.div`
    margin-right: 16px;
    display: flex;
    padding: 0 8px;
`;
const LoadButton = styled(Primary)`
    margin-right: 16px;
`;
const DeleteButton = styled(Danger)`
    margin: 0;
`;

export default ({ program }: Props) => (
    <Columns>
        <Container>
                <Buttons>
                    <LoadButton>Load</LoadButton>
                    <DeleteButton>Delete</DeleteButton>
                </Buttons>
                <p>{ program.title }</p>
        </Container>
    </Columns>
);
