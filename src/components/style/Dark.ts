import { ComponentClass, StatelessComponent } from "react";
import styled from "styled-components";

import { black, grayDark, grayDarker, grayLighter, info } from "styles/color";

export default (component: StatelessComponent<any> | ComponentClass<any>) => (
    styled(component)`
        background-color: ${black};
        color: ${grayLighter};
        border-color: ${grayDarker};

        &:hover {
            border-color: ${grayDark};
        }

        &:focus {
            border-color: ${info};
        }
    `
);
