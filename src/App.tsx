import createHistory from "history/createBrowserHistory";
import * as React from "react";
import { Provider } from "react-redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";

import reducers from "reducers";

import Router from "Router";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(middleware),
);

export default() => (
  <Provider store={store}>
    <Router history={history} />
  </Provider>
);
