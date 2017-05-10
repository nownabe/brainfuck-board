import React from "react";
import { connect } from "react-redux";

import { reset } from "actions";

const c = ({ dispatch }) => {
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
