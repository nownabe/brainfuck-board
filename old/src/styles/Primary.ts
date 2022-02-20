import * as React from "react";
import styled from "styled-components";

import { primary, white } from "styles/color";

export default (component: React.StatelessComponent<any> | React.ComponentClass<any>) => (
    styled(component)`
        background-color: ${primary};
        border-color: transparent;
        color: ${white};

        &:hover {
            background-color: #00c4a7;
            border-color: transparent;
            color: ${white};
        }

        &:focus {
            border-color: transparent;
            box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
            color: ${white};
        }

        &[disabled] {
            color: red;
        }
    `
);
