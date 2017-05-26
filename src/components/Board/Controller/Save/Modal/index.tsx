import * as React from "react";
import styled from "styled-components";

import Button from "bulma/elements/Button";
import { Primary } from "bulma/elements/Button/colors";
import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";
import Container from "bulma/layout/Container";
import DarkTextarea from "components/common/DarkTextarea";

const Textarea = styled(DarkTextarea)`
    min-height: 600px;
`;

interface Props {
    onSave: () => void;
    onCancel: () => void;
    onTitleChange: () => void;
    source: string;
    title: string;
}

export default (props: Props) => (
    <Container>
        <Columns>
            <Column>
                <h2>Save Brainf*ck Program</h2>
            </Column>
        </Columns>
        <Columns>
            <Column>
                <input
                    className="input"
                    placeholder="title"
                    onChange={props.onTitleChange}
                    value={props.title}
                />
            </Column>
        </Columns>
        <Columns>
            <Column>
                <Textarea value={props.source} disabled />
            </Column>
        </Columns>
        <Columns>
            <Column>
                <Button onClick={props.onCancel} isFullwidth>Cancel</Button>
            </Column>
            <Column>
                <Primary onClick={props.onSave} isFullwidth>Save</Primary>
            </Column>
        </Columns>
    </Container>
);
