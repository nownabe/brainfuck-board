import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import { reset } from "actions/interpreter";

const c = ({ dispatch }: { dispatch: Dispatch<Action>}) => {
  const onClick = () => {
    dispatch(reset())
  };
  return(
    <button
      className="button"
      onClick={onClick}
    >
      Reset
    </button>
  );
};

export default connect(
  ({}) => ({}),
  (dispatch) => ({ dispatch })
)(c);