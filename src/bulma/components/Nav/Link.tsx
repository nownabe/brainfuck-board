import * as React from "react";
import styled from "styled-components";

import media from "bulma/media";

import { linkHover, primary, textLight } from "bulma/color";
import { normal } from "bulma/size";

interface Props {
    children: React.ReactNode;
    className?: string;
    isTab?: boolean;
    isActive?: boolean;
    isBrand?: boolean;
}

const A: React.StatelessComponent<Props> = (props) => (
    <a className={props.className}>{props.children}</a>
);

export default styled(A)`
    align-items: center;
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: ${normal};
    justify-content: center;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;

    a {
        flex-grow: 1;
        flex-shrink: 0;
    }

    img {
        max-height: 1.75rem;
    }

    ${media.mobile`justify-content: flex-start;`}

    color: ${textLight};

    &:hover { color: ${linkHover}; }

    ${({ isTab, isActive }: { isTab?: boolean, isActive?: boolean }) => (
        isTab ? `
            border-bottom: 1px solid transparent;
            border-top: 1px solid transparent;
            padding-bottom: calc(0.75rem - 1px);
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: calc(0.75rem - 1px);

            &:hover {
                border-bottom-color: ${primary};
                border-top-color: transparent;
            }

            ${ isActive ? `
                border-bottom: 3px solid ${primary};
                color: ${primary};
                padding-bottom: calc(0.75rem - 3px);
                &:hover { color: ${primary};}
            ` : ""}
        ` : ""

    )}

    ${({ isBrand }: { isBrand?: boolean}) => (
        isBrand ? media.desktop`padding-left: 0;` : ""
    )}
`;
