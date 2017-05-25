import { findColorInvert } from "bulma/utils";

// Colors
export const greyDarker = "#363636";
export const greyDark = "#494949";
export const grey = "#7a7a7a";
export const greyLight = "#b5b5b5";
export const greyLighter = "#dbdbdb";

export const whiteTer = "#f4f4f4";
export const white = "#fff";

export const turquoise = "#00d1b2";
export const turquoiseInvert = findColorInvert(turquoise);

// Primary colors
export const primary = turquoise;
export const primaryInvert = turquoiseInvert;

// General
export const background = whiteTer;

// Text
export const textLight = grey;

// Link
export const link = primary;
export const linkHover = greyDarker;
export const linkHoverBorder = greyLight;
export const linkFocus = greyDarker;
export const linkFocusBorder = primary;
export const linkActive = greyDarker;
export const linkActiveBorder = greyDark;

// -------- Elements -------- //

// Button
export const button = greyDarker;
export const buttonBackground = white;
export const buttonBorder = greyLighter;
export const buttonHover = linkHover;
export const buttonHoverBorder = linkHoverBorder;
export const buttonFocus = linkFocus;
export const buttonFocusBorder = linkFocusBorder;
export const buttonActive = linkActive;
export const buttonActiveBorder = linkActiveBorder;
export const buttonShadowInset = "inset 0 1px 2px rgba(0, 0, 0, 0.2)";

// Form
export const input = greyDarker;
export const inputBackground = white;
export const inputBorder = greyLighter;
export const inputHover = greyDarker;
export const inputHoverBorder = greyLight;
export const inputFocus = greyDarker;
export const inputFocusBorder = link;
export const inputDisabled = textLight;
export const inputDisabledBackground = background;
export const inputDisabledBorder = background;
