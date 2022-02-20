import { border } from "bulma/color";

export const block = () => (`
    &:not(:last-child) {
        margin-bottom: 1.5rem;
    }
`);

export const center = (width: string, height: string = "0") => (`
    position: absolute;
    ${height === "0" ? `
        left: calc(50% - (${width} / 2));
        top: calc(50% - (${width} / 2));
    ` : `
        left: calc(50% - (${width} / 2));
        top: calc(50% - (${height} / 2));
    `}
`);

export const placeholder = (content: string) => (
    [":-moz", ":-webkit-input", "-moz", "-ms-input"].map((p) => (
        `&:${p}-placeholder { ${content} }`
    ))
);

export const unselectable = () => (`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`);

export const loader = () => (`
    animation: spinAround 500ms infinite linear;
    border: 2px solid ${border};
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    position: relative;
    width: 1em;
`);
