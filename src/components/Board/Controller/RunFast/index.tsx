import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import PrimaryButton from "components/common/PrimaryButton";

import { step } from "actions/interpreter";
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

class RunFast extends React.Component<Props, {}> {
  private ip: interpreter;

  public render() {
    return (
      <PrimaryButton onClick={this.onClick.bind(this)}>
        Run Fast
      </PrimaryButton>
    );
  }

  private onClick() {
    this.ip = new interpreter(this.props.interpreter, this.props.source, this.props.input);
    this.cycle();
  }

  private async cycle() {
      setTimeout(() => {
        this.ip.tick();
        this.props.dispatch(step(this.ip.state()));
        if (!this.ip.isFinished()) { this.cycle(); }
      }, 10);
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(RunFast);
