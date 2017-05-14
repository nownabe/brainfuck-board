import * as React from "react";

import Dashboard from "components/Dashboard";
import {Provider} from "react-redux";
import store from "store";

export default() => (
  <Provider store={store}>
    <Dashboard/>
  </Provider>
);
