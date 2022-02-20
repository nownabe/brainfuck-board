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

    ${media.widescreen`flex-basis: 0;`}

    justify-content: flex-end;
`;
