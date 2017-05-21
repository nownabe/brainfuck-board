import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import Button from "components/common/Button";

import { reset } from "actions/interpreter";

const c = ({ dispatch }: { dispatch: Dispatch<Action>}) => {
  const onClick = () => {
    dispatch(reset());
  };
  return(
    <Button onClick={onClick}>Reset</Button>
  );
};

export default connect(
  ({}) => ({}),
  (dispatch) => ({ dispatch }),
)(c);
