import * as React from "react";
import styled from "styled-components";

export default (component: React.StatelessComponent<any> | React.ComponentClass<any>) => (
    styled(component)`
        background-color: #00d1b2;
        border-color: transparent;
        color: #fff;

        &:hover {
            background-color: #00c4a7;
            border-color: transparent;
            color: #fff;
        }

        &:focus {
            border-color: transparent;
            box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
            color: #fff;
        }
    `
);
