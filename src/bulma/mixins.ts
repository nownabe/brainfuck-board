export const placeholder = (content: string) => (
    [":-moz", ":-webkit-input", "-moz", "-ms-input"].map((p) => (
        `&:${p}-placeholder { ${content} }`
    ))
);
