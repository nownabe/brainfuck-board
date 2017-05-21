import styled from "styled-components";

import media from "bulma/media";

import { normal } from "bulma/size";

export default styled.div`
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
`;
