import { handleActions, Action } from 'redux-actions';
import { run, step, reset } from 'actions/interpreter';
import { Interpreter as State } from "states";

type Payload = State;

const initialState: State = {
  memory: new Array(16).fill(0),
  output: '',
  pointer: 0,
  programCounter: 0,
};

const next = (state: State, action: Action<Payload>) => (action.payload || initialState);

export default handleActions<State, Payload>({
    [run.toString()]: { next: next },
    [step.toString()]: { next: next },
    [reset.toString()]: { next: () => initialState },
}, initialState);