import * as React from "react";
import styled from "styled-components";

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
    background-color: #fff;
    border-color: #dbdbdb;
    color: #363636;
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
        border-color: #b5b5b5;
        color: #363636;
    }

    &:focus {
        outline: 0;
    }


    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`;
