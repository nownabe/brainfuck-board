import { Action, handleActions } from "redux-actions";
import { Source as State } from "states";
import { change } from "../actions/source";

type Payload = State;

const initialState: State = `+++++++++
[>++++++++>+++++++++++>+++++<<<-]
>.>++.+++++++..+++.>-.-----------
-.<++++++++.--------.+++.------.-
-------.>+.`;

export default handleActions<State, Payload>({
  [change.toString()]: {
    next: (state: State, action: Action<Payload>) => (action.payload || initialState),
  },
}, initialState);
