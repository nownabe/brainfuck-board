import { createAction } from "redux-actions";

import { Program } from "states";

const pass = <T>(payload: T) => (payload);

export const add = createAction<Program, Program>("PROGRAMS/ADD", pass);
export const remove = createAction<Program, Program>("PROGRAMS/REMOVE", pass);
