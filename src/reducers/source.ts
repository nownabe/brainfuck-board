import { handleActions, Action } from 'redux-actions';
import { change } from '../actions/source';
import { Source as State } from "states";

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