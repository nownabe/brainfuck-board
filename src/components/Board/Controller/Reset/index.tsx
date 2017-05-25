import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import Button from "bulma/elements/Button";

import { reset } from "actions/interpreter";

const c = ({ isRunning, dispatch }: { isRunning: boolean, dispatch: Dispatch<Action>}) => {
  const onClick = () => {
    dispatch(reset());
  };
  return(
    <Button onClick={onClick} disabled={isRunning}>Reset</Button>
  );
};

export default connect(
  ({ isRunning }) => ({ isRunning }),
  (dispatch) => ({ dispatch }),
)(c);
