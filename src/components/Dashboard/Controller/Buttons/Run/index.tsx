import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";

import interpreter from "interpreter";
import { run } from "actions/interpreter";
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

class Run extends React.Component<Props, {}> {
  onClick() {
    const ip = new interpreter(this.props.interpreter, this.props.source);
    ip.run();
    this.props.dispatch(run(ip.state()))
  }

  render() {
    return (
      <button
        className="button is-primary"
        onClick={this.onClick.bind(this)}
      >
        Run
      </button>
    )
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Run)