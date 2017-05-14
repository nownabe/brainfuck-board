import * as React from 'react';

import {Provider} from "react-redux";
import store from "store";
import Dashboard from "components/Dashboard";

export default() => (
  <Provider store={store}>
    <Dashboard/>
  </Provider>
);