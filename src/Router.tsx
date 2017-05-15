import { History } from "history";
import * as React from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import Board from "components/Board";

export default ({ history }: { history: History }) => (
    <ConnectedRouter history={history}>
        <Route path="/" component={Board} />
    </ConnectedRouter>
);
