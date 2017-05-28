import { History } from "history";
import * as React from "react";
import { Route } from "react-router";
import { ConnectedRouter } from "react-router-redux";

import Board from "components/Board";
import Programs from "components/Programs";

export default ({ history }: { history: History }) => (
    <ConnectedRouter history={history}>
        <div>
            <Route exact path="/" component={Board} />
            <Route path="/board" component={Board} />
            <Route path="/programs" component={Programs} />
        </div>
    </ConnectedRouter>
);
