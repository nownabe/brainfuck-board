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
    onPublish: () => void;
    onCancel: () => void;
    onTitleChange: () => void;
    source: string;
    title: string;
}

export default (props: Props) => (
    <Container>
        <Columns>
            <Column>
                <h2 className="title">Publish</h2>
                <p>
                    Your program will be stored and published on Brainf*ck Board.
                    It won't be posted to anywhere except here.
                </p>
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
                <Primary onClick={props.onPublish} isFullwidth>Publish</Primary>
            </Column>
        </Columns>
    </Container>
);
