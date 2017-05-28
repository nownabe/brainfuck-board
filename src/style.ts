import { injectGlobal } from "styled-components";

export const init = () => injectGlobal`
    textarea {
        font-family: monaco, 'Inconsolata', monospace;
    }

    pre {
        font-family: monaco, 'Inconsolata', monospace;
    }

    // TODO: DELETE
    .pointed {
        font-weight: bold;
        color: #d00;
    }

    // TODO: DELETE
    .current-instruction {
        font-weight: bold;
        color: #fff;
        background-color: #000;
    }
`;
