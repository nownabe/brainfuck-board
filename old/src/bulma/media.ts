import { css, SimpleInterpolation } from "styled-components";

import { desktop, fullhd, tablet, widescreen } from "bulma/size";

export default {
    desktop: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${desktop}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    desktopOnly: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${desktop}px) and (max-width: ${widescreen - 1}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    fullhd: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${fullhd}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    mobile: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (max-width: ${tablet - 1}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    tablet: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${tablet}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    tabletOnly: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${tablet}px) and (max-width: ${desktop - 1}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    touch: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (max-width: ${desktop - 1}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    widescreen: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${widescreen}px) {
            ${css(strings, ...interpolations)}
        }
    `,
    widescreenOnly: (strings: TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
        @media screen and (min-width: ${widescreen}px) and (max-width: ${fullhd - 1}px) {
            ${css(strings, ...interpolations)}
        }
    `,
};
