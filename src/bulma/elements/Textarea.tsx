import styled from "styled-components";

import { input } from "bulma/controls";

export default styled.textarea`
    ${({
        isHovered,
        isFocused,
        isActive,
    }: {
        isHovered?: boolean,
        isFocused?: boolean,
        isActive?: boolean,
    }) => (
        input({ isHovered, isFocused, isActive })
    )}

    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    width: 100%;
    &[type="search"] { border-radius: 290486px; }

    // TODO: is-{color}
    // TODO: is-small, ..., is-fullwidth, is-inline

    display: block;
    max-height: 600px;
    max-width: 100%;
    min-height: 120px;
    min-width: 100%;
    padding: 0.625em;
    resize: vertical;
`;
