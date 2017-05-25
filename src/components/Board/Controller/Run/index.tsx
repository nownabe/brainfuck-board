import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { Primary as Button } from "bulma/elements/Button/colors";

import { run } from "actions/interpreter";
import { finish, start } from "actions/isRunning";
import interpreter from "interpreter";
import { Input, Interpreter, IsRunning, Source, State } from "states";

interface TStateProps {
  input: Input;
  interpreter: Interpreter;
  isRunning: IsRunning;
  source: Source;
}
interface TDispatchProps {
  dispatch: Dispatch<Action>;
}
interface TOwnProps {}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
  input: state.input,
  interpreter: state.interpreter,
  isRunning: state.isRunning,
  source: state.source,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch });

class Run extends React.Component<Props, {}> {
  public render() {
    return (
      <Button onClick={this.onClick.bind(this)} disabled={this.props.isRunning}>
        Run
      </Button>
    );
  }

  private onClick() {
    this.props.dispatch(start());
    const ip = new interpreter(this.props.interpreter, this.props.source, this.props.input);
    ip.run();
    this.props.dispatch(run(ip.state()));
    this.props.dispatch(finish());
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Run);
