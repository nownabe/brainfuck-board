import { Action, handleActions } from "redux-actions";

import { User } from "states";

import { signIn, signOut } from "actions/user";

type State = User | null;

type Payload = User;

const initialState: State = null;

export default handleActions<State, Payload | {}>({
    [signIn.toString()]: {
        next: (state: State, action: Action<Payload>) => (action.payload || null),
    },
    [signOut.toString()]: {
        next: () => (null),
    },
}, initialState);
