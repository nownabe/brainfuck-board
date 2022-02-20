import styled from "styled-components";

import media from "bulma/media";

export default styled.div`
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;

    &:last-child { margin-bottom: -0.75rem; }
    &:not(:last-child) { margin-bottom: 0.75rem; }

    ${({ isCentered }: { isCentered?: boolean }) => (
        isCentered ? "justify-content: center;" : ""
    )}

    ${({ isGapless }: { isGapless?: boolean}) => (
        isGapless ?
        `
            margin-left: 0;
            margin-right: 0;
            margin-top: 0;
            &:last-child { margin-bottom: 0; }
            &:not(:last-child) { margin-bottom: 1.5rem; }
            & > .column {
                margin: 0;
                padding: 0;
            }
        `
        : ""
    )}

    ${({ isGrid }: { isGrid?: boolean }) => (
        isGrid ? media.tablet`
            flex-wrap: wrap;
            & > .column {
                max-width: 33.3333%;
                padding: 0.75rem;
                width: 33.3333%
                & + .column { margin-left: 0; }
            }
        ` : ""
    )}

    ${({ isMobile }: { isMobile?: boolean }) => (
        isMobile ? "display: flex;" : ""
    )}

    ${({ isMultiline }: { isMultiline?: boolean }) => (
        isMultiline ? "flex-wrap: wrap;" : ""
    )}

    ${({ isVcentered }: { isVcentered?: boolean }) => (
        isVcentered ? "align-items: center;" : ""
    )}

    ${({ isDesktop }: { isDesktop?: boolean}) => (
        isDesktop ?
        media.desktop`display: flex;`
        :
        media.tablet`display: flex;`
    )}
`;
