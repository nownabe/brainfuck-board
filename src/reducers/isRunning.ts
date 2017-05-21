import { Action, handleActions } from "redux-actions";
import { IsRunning as State } from "states";

import { finish, start } from "actions/isRunning";

const initialState: State = false;

export default handleActions<State, void>({
    [start.toString()]: {
        next: (state: State, action: Action<void>) => (true),
    },
    [finish.toString()]: {
        next: (state: State, action: Action<void>) => (false),
    },
}, initialState);
