import * as React from "react";

import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

interface Props {
    title: string;
}

export default ({ title }: Props) => (
    <Columns>
        <Column>
            <p>{ title }</p>
        </Column>
    </Columns>
);
