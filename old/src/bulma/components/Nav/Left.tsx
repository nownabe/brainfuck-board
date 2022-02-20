import styled from "styled-components";

import media from "bulma/media";

export default styled.div`
    overflow-scrolling: touch;
    align-items: stretch;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    max-width: 100%;
    overflow: auto;

    justify-content: flex-start;
    white-space: nowrap;

    ${media.widescreen`flex-basis: 0;`}
`;
