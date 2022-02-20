import { createAction } from "redux-actions";

const pass = <T>(payload: T) => (payload);

export const change = createAction<string, string>("SOURCE/CHANGE", pass);
export const load = createAction<string, string>("SOURCE/LOAD", pass);
