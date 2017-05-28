import { injectGlobal } from "styled-components";

export const init = () => injectGlobal`
    textarea {
        font-family: monaco, 'Inconsolata', monospace;
    }

    pre {
        font-family: monaco, 'Inconsolata', monospace;
    }
`;
