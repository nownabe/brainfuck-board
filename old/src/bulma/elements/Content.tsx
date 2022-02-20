import styled from "styled-components";

import { text, textStrong } from "bulma/color";
import { block } from "bulma/mixins";
import { weightNormal } from "bulma/size";

export default styled.div`
    ${block()}
    color: ${text};

    li + li {
        margin-top: 0.25em;
    }

    p, dl, ol, ul, blockquote, pre, table {
        &:not(:last-child) {
            margin-bottom: 1em;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${textStrong};
        font-weight: ${weightNormal};
        line-height: 1.125;
    }

    // TODO: others
`;
