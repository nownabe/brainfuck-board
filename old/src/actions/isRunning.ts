import { createAction } from "redux-actions";

export const start = createAction("IS_RUNNING/START");
export const stop = createAction("IS_RUNNING/STOP");
export const finish = createAction("IS_RUNNING/FINISH");
