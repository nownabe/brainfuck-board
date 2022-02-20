import styled from "styled-components";

import media from "bulma/media";
import { desktop, fullhd, widescreen } from "bulma/size";

const fluidDesktop = media.desktop`
    margin: 0 20px;
    max-width: none;
    width: auto;
`;
const fixedDesktop = media.desktop`
    margin: 0 auto;
    max-width: ${desktop - 40}px;
    width: ${desktop - 40}px;
`;

export default styled.div`
    position: relative;

    ${({ isFluid }: { isFluid?: boolean}) => (
        isFluid ? fluidDesktop : fixedDesktop
    )}

    ${media.widescreen`
        max-width: ${widescreen - 40}px;
        width: ${widescreen - 40}px;
    `}

    ${media.fullhd`
        max-width: ${fullhd - 40}px;
        width: ${fullhd - 40}px;
    `}
`;
