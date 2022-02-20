import styled from "styled-components";

import media from "bulma/media";

import { white } from "bulma/color";

export default styled.section`
    background-color: ${white};
    padding: 3rem 1.5rem;

    ${({ isMedium }: { isMedium?: boolean }) => (
        isMedium ? media.desktop`padding 9rem 1.5rem;` : ""
    )}

    ${({ isLarge }: { isLarge?: boolean }) => (
        isLarge ? media.desktop`padding 18rem 1.5rem;` : ""
    )}
`;
