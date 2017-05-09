import React from "react";
import { connect } from "react-redux";

import interpreter from "interpreter";
import { run } from "actions";

const c = (state) => {
  const onClick = () => {
    const ip = new interpreter(state);
    ip.run();
    state.dispatch(run(ip.state()));
  };
  return(
    <button
      className="button is-primary"
      onClick={onClick}
    >
      Run
    </button>
  );
};

export default connect(
  (state) => (state),
  (dispatch) => ({ dispatch })
)(c);
