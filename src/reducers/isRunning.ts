import { Action, handleActions } from "redux-actions";
import { IsRunning as State } from "states";

import { finish, start, stop } from "actions/isRunning";

const initialState: State = false;

export default handleActions<State, void>({
    [start.toString()]: {
        next: (state: State, action: Action<void>) => (true),
    },
    [stop.toString()]: {
        next: () => (false),
    },
    [finish.toString()]: {
        next: (state: State, action: Action<void>) => (false),
    },
}, initialState);
