import { Action, handleActions} from "redux-actions";

import { change } from "actions/input";
import { reset } from "actions/board";
import { Input as State } from "states";

type Payload = State;

const initialState: State = "";

export default handleActions<State, Payload>({
    [change.toString()]: {
        next: (state: State, action: Action<Payload>) => (action.payload || initialState),
    },
    [reset.toString()]: {
        next: () => initialState,
    },
}, initialState);
