import { change } from "actions/input";
import { Action, handleActions} from "redux-actions";
import { Input as State } from "states";

type Payload = State;

const initialState: State = "";

export default handleActions<State, Payload>({
    [change.toString()]: {
        next: (state: State, action: Action<Payload>) => (action.payload || initialState),
    },
}, initialState);
