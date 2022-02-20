import styled from "styled-components";

import media from "bulma/media";

import Container from "bulma/layout/Container";

import { navHeight } from "bulma/size";

export default styled(Container)`
    align-items: stretch;
    display: flex;
    min-height: ${navHeight};

    ${media.mobile`width: 100%;`}
`;
