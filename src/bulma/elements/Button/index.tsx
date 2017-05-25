import * as React from "react";
import styled from "styled-components";

import {
    button,
    buttonActive,
    buttonActiveBorder,
    buttonBackground,
    buttonBorder,
    buttonFocus,
    buttonFocusBorder,
    buttonHover,
    buttonHoverBorder,
    buttonShadowInset,
} from "bulma/color";

import { control } from "bulma/controls";
import { unselectable } from "bulma/mixins";

const hoverStyles = `
    border-color: ${buttonHoverBorder};
    color: ${buttonHover};
`;
const focusStyles = `
    border-color: ${buttonFocusBorder};
    box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
    color: ${buttonFocus}
`;
const activeStyles = `
    border-color: ${buttonActiveBorder};
    box-shadow: ${buttonShadowInset};
    color: ${buttonActive};
`;

interface Props {
    children?: React.ReactNode;
    style?: string;
    className?: string;
    isFocused?: boolean;
    isActive?: boolean;
    isHovered?: boolean;
    isFullwidth?: boolean;
    disabled?: boolean;
    onClick: () => void;
}
const Button: React.StatelessComponent<Props> = (props) => (
    <button
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default styled(Button)`
    ${({ isFocused, isActive }: { isFocused?: boolean, isActive?: boolean }) => (
        control({ isFocused, isActive })
    )}
    ${unselectable()}
    background-color: ${buttonBackground};
    border-color: ${buttonBorder};
    color: ${button};
    corsor: pointer;
    justify-content: center;
    padding-left: 0.75em;
    padding-right: 0.75em;
    text-align: center;
    white-space: nowrap;

    strong { color: inherit; }

    &:hover { ${hoverStyles} }
    ${({ isHovered }: { isHovered?: boolean }) => (isHovered ? hoverStyles : "")}

    &:focus { ${focusStyles} }
    ${({ isFocused }: { isFocused?: boolean }) => (isFocused ? focusStyles : "")}

    &:active { ${activeStyles} }
    ${({ isActive }: { isActive?: boolean }) => (isActive ? activeStyles : "")}

    // TODO: .is-link, .is-{color}, sizes

    &[disabled] {
        background-color: ${buttonBackground};
        border-color: ${buttonBorder};
        box-shadow: none;
        opacity: 0.5;
    }

    ${({ isFullwidth }: { isFullwidth?: boolean }) => (
        isFullwidth ? `
            display: flex;
            width: 100%;
        ` : ""
    )}

    // TODO: .is-loading

    line-height: 1;
    padding-bottom: 0.4em;
    padding-top: 0.35em;
`;
