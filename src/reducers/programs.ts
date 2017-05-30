import { Action, handleActions } from "redux-actions";

import { add } from "actions/programs";
import { Program } from "states";

interface State {
    [key: string]: Program;
}

type Payload = Program;

const initialState: State = {};

export default handleActions<State, Payload>({
    [add.toString()]: {
        next: (state: State, action: Action<Payload>) => {
            const next = { ...state };
            if (action.payload) {
                next[action.payload.id] = action.payload;
            }
            return next;
        },
    },
}, initialState);
