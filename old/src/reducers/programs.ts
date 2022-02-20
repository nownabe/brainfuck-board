import { Action, handleActions } from "redux-actions";

import { add, remove } from "actions/programs";
import { signOut } from "actions/user";
import { Program } from "states";

interface State {
    [key: string]: Program;
}

type Payload = Program;

const initialState: State = {};

export default handleActions<State, Payload>({
    [add.toString()]: {
        next: (state: State, action: Action<Payload>) => {
            const next = JSON.parse(JSON.stringify(state));
            if (action.payload) {
                next[action.payload.id] = action.payload;
            }
            return next;
        },
    },
    [signOut.toString()]: {
        next: () => (initialState),
    },
    [remove.toString()]: {
        next: (state: State, action: Action<Payload>) => {
            const next = JSON.parse(JSON.stringify(state));
            if (action.payload) {
                delete next[action.payload.id];
            }
            return next;
        },
    },
}, initialState);
