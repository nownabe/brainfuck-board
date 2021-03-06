import * as React from "react";
import styled from "styled-components";

import Button from "bulma/elements/Button";

interface Props {
    children?: React.ReactNode;
    className?: string;
}

const c = (props: Props) => (
    <span className={`${props.className} icon`}>
        <i className={`fa fa-${props.children}`} />
    </span>
);

export default styled(c)`
    ${ Button.toString() } {
        &{
            height: 1.5em;
            width: 1.5em;
        }

        &:first-child:not(:last-child) {
            margin-left: calc(-0.375em - 1px);
            margin-right: 0.1875em;
        }
        &:last-child:not(:first-child) {
            margin-left: 0.1875em;
            margin-right: calc(-0.375em - 1px);
        }
        &:first-child:last-child {
            margin-left: calc(-0.375em - 1px);
            margin-right: calc(-0.375em - 1px);
        }
    }
`;
