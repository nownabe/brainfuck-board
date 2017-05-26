import { createAction } from "redux-actions";

import { User } from "states";

const pass = <T>(payload: T) => (payload);

export const signIn = createAction<User, User>("USER/SIGN_IN", pass);
export const signOut = createAction("USER/SIGN_OUT");
