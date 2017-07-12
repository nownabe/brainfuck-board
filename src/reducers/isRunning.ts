import { Action, handleActions } from "redux-actions";

import { reset } from "actions/board";
import { finish, start, stop } from "actions/isRunning";
import { IsRunning as State } from "states";

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
    [reset.toString()]: {
        next: () => initialState,
    },
}, initialState);
