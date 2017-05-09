import React from "react";
import { connect } from "react-redux";

import interpreter from "interpreter";
import { step } from "actions";

const c = (state) => {
  const onClick = () => {
    const ip = new interpreter(state);
    ip.tick();
    state.dispatch(step(ip.state()));
  };
  return (
    <button
      className="button is-primary"
      onClick={onClick}
    >
      Step
    </button>
  );
};

export default connect(
  (state) => (state),
  (dispatch) => ({ dispatch })
)(c);
