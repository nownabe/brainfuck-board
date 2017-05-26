import styled from "styled-components";

import {
    buttonShadowInset,
    info,
    infoInvert,
    primary,
    primaryInvert,
} from "bulma/color";
import { color2rgba, darken } from "bulma/utils";

import Button from "./index";

const colorize = (color: string, invert: string) => {
    const hoverStyle = `
        background-color: ${darken(color, 2.5)};
        border-color: transparent;
        color: ${invert};
    `;
    const focusStyle = `
        border-color: transparent;
        box-shadow: 0 0 0.5em ${color2rgba(color, 0.25)};
        color: ${invert};
    `;
    const activeStyle = `
        background-color: ${darken(color, 5)};
        border-color: transparent;
        box-shadow: ${buttonShadowInset};
        color: ${invert};
    `;

    return styled(Button)`
        background-color: ${color};
        border-color: transparent;
        color: ${invert};

        &:hover { ${hoverStyle} }
        ${({ isHovered }: { isHovered?: boolean }) => (
            isHovered ? hoverStyle : ""
        )}

        &:focus { ${focusStyle} }
        ${({ isFocused }: { isFocused?: boolean }) => (
            isFocused ? hoverStyle : ""
        )}

        &:active { ${activeStyle} }
        ${({ isActive }: { isActive?: boolean }) => (
            isActive ? activeStyle : ""
        )}

        &[disabled] {
            background-color: ${color};
            border-color: transparent;
            box-shadow: none;
        }

        ${({ isInverted }: { isInverted?: boolean}) => (
            isInverted ? `
                background-color: ${invert};
                color: ${color};
                &:hover { background-color: ${darken(invert, 5)}; }
                &[disabled] {
                    background-color: ${invert};
                    border-color: transparent;
                    box-shadow: none;
                    color: ${color};
                }
            ` : ""
        )}

        // TODO: is-loading, is-outlined, ...
    `;
};

export const Primary = colorize(primary, primaryInvert);
export const Info = colorize(info, infoInvert);
