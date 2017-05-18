import styled from "styled-components";

import { grayDarker, grayLight, grayLighter, primary, white } from "styles/color";

export default styled.textarea`
    display: block;
    max-height: 600px;
    max-width: 100%;
    min-height: 120px;
    min-width: 100%;
    padding: 0.625em;
    resize: vertical;
    appearance: none;
    align-items; center;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 1rem;
    height: 2.25em;
    box-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    position: relative;
    vertical-align: top;
    background-color: ${white};
    border-color: ${grayLighter};
    color: ${grayDarker};
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
    width: 100%;
    font-family: monaco;

    &:hover {
        border-color: ${grayLight};
    }

    &:focus {
        border-color: ${primary};
        outline: 0;
    }
`;
