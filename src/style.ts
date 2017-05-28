import { injectGlobal } from "styled-components";

export const init = () => injectGlobal`
    textarea {
        font-family: monaco;
    }

    pre {
        font-family: monaco;
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
