import { createAction } from "redux-actions";

export const changeSource = createAction("CHANGE_SOURCE");
export const run = createAction("RUN");
export const step = createAction("STEP");
export const reset = createAction("RESET");
