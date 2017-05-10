import { handleActions } from "redux-actions";
import { changeSource, step, run, reset } from "actions";

import interpreter from "interpreter";

const initialSource = `+++++++++
[>++++++++>+++++++++++>+++++<<<-]
>.>++.+++++++..+++.>-.-----------
-.<++++++++.--------.+++.------.-
-------.>+.`

const initialState = {
  memory: [],
  output: "",
  pointer: 0,
  programCounter: 0,
  source: initialSource
}

export default handleActions({
  [changeSource]: {
    next: (state, { payload }) => (
      Object.assign({}, state, { source: payload })
    )
  },
  [step]: { next: (state, { payload }) => (payload) },
  [run]: { next: (state, { payload }) => (payload) },
  [reset]: { next: () => (initialState) },
}, initialState)
