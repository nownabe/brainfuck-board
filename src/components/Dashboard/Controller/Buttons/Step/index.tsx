import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import interpreter from "interpreter";
import { step } from "actions/interpreter";
import { State, Interpreter, Source } from "states";

type TStateProps = {
  interpreter: Interpreter;
  source: Source;
}
type TDispatchProps = {
  dispatch: Dispatch<Action>;
}
type TOwnProps = {};
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
  interpreter: state.interpreter,
  source: state.source,
})
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch })

class Step extends React.Component<Props, {}> {
  onClick() {
    const ip = new interpreter(this.props.interpreter, this.props.source);
    ip.tick();
    this.props.dispatch(step(ip.state()));
  }

  render() {
    return (
      <button
        className="button is-primary"
        onClick={this.onClick.bind(this)}
      >
        Step
      </button>
    )
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Step);