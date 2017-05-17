import * as React from "react";
import styled from "styled-components";

import { grayDarker, grayLight, grayLighter, white } from "styles/color";

interface Props {
    className?: string;
    children: string;
    onClick: () => void;
}

const Button: React.StatelessComponent<Props> = (props) => (
    <button className={props.className} onClick={props.onClick}>
        {props.children}
    </button>
);

export default styled(Button)`
    appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: 3px;
    box-shadow: none;
    display: inline-flex;
    font-size: 1rem;
    height: 2.25em;
    position: relative;
    vertical-align: top;
    user-select: none;
    background-color: ${white};
    border-color: ${grayLighter};
    color: ${grayDarker};
    cursor: pointer;
    box-pack: center;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;
    line-height: 1;
    padding-bottom: 0.4em;
    padding-top: 0.35em;

    &:hover {
        border-color: ${grayLight};
        color: ${grayDarker};
    }

    &:focus {
        outline: 0;
    }

    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`;
