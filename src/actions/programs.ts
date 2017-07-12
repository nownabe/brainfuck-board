import { createAction } from "redux-actions";

import { Program } from "states";

const pass = <T>(payload: T) => (payload);

export const add = createAction<Program, Program>("PROGRAMS/ADD", pass);
