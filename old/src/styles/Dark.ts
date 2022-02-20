import { ComponentClass, StatelessComponent } from "react";
import styled from "styled-components";

import { grayDark, grayDarker, info, white } from "styles/color";

export default (component: StatelessComponent<any> | ComponentClass<any>) => (
    styled(component)`
        background-color: ${grayDarker};
        color: ${white};
        border-color: ${grayDarker};

        &:hover {
            border-color: ${grayDark};
        }

        &:focus {
            border-color: ${info};
        }
    `
);
