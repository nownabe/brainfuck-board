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
