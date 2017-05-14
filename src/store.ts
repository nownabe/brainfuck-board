import reducer from "reducers";
import {applyMiddleware, createStore} from "redux";

export default createStore(reducer, applyMiddleware());
