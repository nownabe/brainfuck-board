import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { Primary as Button } from "bulma/elements/Button/colors";

import { step } from "actions/interpreter";
import { finish, start, stop } from "actions/isRunning";
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
interface TOwnProps {
  interval: number;
  children?: React.ReactNode;
}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
  input: state.input,
  interpreter: state.interpreter,
  isRunning: state.isRunning,
  source: state.source,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch });

class C extends React.Component<Props, {}> {
  private ip: interpreter;
  private unmounted: boolean;

  constructor(props: Props) {
    super(props);
    this.unmounted = false;
  }

  public render() {
    return (
      <Button onClick={this.onClick.bind(this)} disabled={this.props.isRunning} isFullwidth>
        {this.props.children}
      </Button>
    );
  }

  public componentWillUnmount() {
    this.unmounted = true;
    this.props.dispatch(stop());
  }

  private onClick() {
    this.props.dispatch(start());
    this.ip = new interpreter(this.props.interpreter, this.props.source, this.props.input);
    this.cycle();
  }

  private async cycle() {
      setTimeout(() => {
        if (!this.props.isRunning || this.unmounted) {
          return;
        }
        this.ip.tick();
        this.props.dispatch(step(this.ip.state()));
        if (this.ip.isFinished()) {
            this.props.dispatch(finish());
        } else {
            this.cycle();
        }
      }, this.props.interval);
  }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(C);
