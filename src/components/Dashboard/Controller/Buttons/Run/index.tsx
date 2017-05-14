import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { run } from "actions/interpreter";
import interpreter from "interpreter";
import { Interpreter, Source, State } from "states";

interface TStateProps {
  interpreter: Interpreter;
  source: Source;
}
interface TDispatchProps {
  dispatch: Dispatch<Action>;
}
interface TOwnProps {}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
  interpreter: state.interpreter,
  source: state.source,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch });

class Run extends React.Component<Props, {}> {
  public render() {
    return (
      <button
        className="button is-primary"
        onClick={this.onClick.bind(this)}
      >
        Run
      </button>
    );
  }

  private onClick() {
    const ip = new interpreter(this.props.interpreter, this.props.source);
    ip.run();
    this.props.dispatch(run(ip.state()));
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Run);
