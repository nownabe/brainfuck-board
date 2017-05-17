import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import PrimaryButton from "components/common/PrimaryButton";

import { run } from "actions/interpreter";
import interpreter from "interpreter";
import { Input, Interpreter, Source, State } from "states";

interface TStateProps {
  input: Input;
  interpreter: Interpreter;
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
  source: state.source,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch });

class Run extends React.Component<Props, {}> {
  public render() {
    return (
      <PrimaryButton onClick={this.onClick.bind(this)}>Run</PrimaryButton>
    );
  }

  private onClick() {
    const ip = new interpreter(this.props.interpreter, this.props.source, this.props.input);
    ip.run();
    this.props.dispatch(run(ip.state()));
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Run);
