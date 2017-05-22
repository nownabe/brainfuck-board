import {
    input as inputColor,
    inputBackground,
    inputBorder,
    inputDisabled,
    inputDisabledBackground,
    inputDisabledBorder,
    inputFocusBorder,
    inputHoverBorder,
} from "bulma/color";
import { placeholder } from "bulma/mixins";
import { controlRadius, normal } from "bulma/size";

const controlPaddingVertical = "calc(0.375em - 1px)";
const controlPaddingHorizontal = "calc(0.625em - 1px)";

export const control = ({ isFocused, isActive }: { isFocused?: boolean, isActive?: boolean }) => (`
    appearance: none;
    align-items: center;
    border: 1px solid transparent;
    border-radius: ${controlRadius};
    box-shadow: none;
    display: inline-flex;
    font-size: ${normal};
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: ${controlPaddingVertical};
    padding-left: ${controlPaddingHorizontal};
    padding-right: ${controlPaddingHorizontal};
    padding-top: ${controlPaddingVertical};
    position: relative;
    vertical-align: top;

    &:focus, &:active { outline: none; }

    ${isFocused || isActive ? "outline: none;" : ""}

    &[disabled] { cursor: not-allowed; }
`);

export const input = ({
    isFocused,
    isActive,
    isHovered,
}: {
    isFocused?: boolean,
    isActive?: boolean,
    isHovered?: boolean,
}) => (`
    ${control({ isFocused, isActive })}

    background-color: ${inputBackground};
    border-color: ${inputBorder};
    color: ${inputColor};

    &:hover { border-color: ${inputHoverBorder}; }
    ${isHovered ? "border-color: ${inputHoverBorder};" : ""}

    &:forcus, &:active { border-color: ${inputFocusBorder}; }
    ${isFocused || isActive ? "border-color: ${inputFocusBorder};" : "" }

    &[disabled] {
        background-color: ${inputDisabledBackground};
        border-color: ${inputDisabledBorder};
        box-shadow: none;
        color: ${inputDisabled};
        ${placeholder("color: rgba(54, 54, 54, 0.3);")}
    }
`);
