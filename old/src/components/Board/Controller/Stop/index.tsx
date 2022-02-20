import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { stop } from "actions/isRunning";
import { IsRunning, State } from "states";

import { Warning as Button } from "bulma/elements/Button/colors";

interface TStateProps {
    isRunning: IsRunning;
}
interface TDispatchProps {
    dispatch: Dispatch<Action>;
}
interface TOwnProps {}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
    isRunning: state.isRunning,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ dispatch });

class C extends React.Component<Props, {}> {
    public render() {
        return (
            <Button onClick={this.onClick.bind(this)} disabled={!this.props.isRunning} isFullwidth>
                Stop
            </Button>
        );
    }

    private onClick() {
        this.props.dispatch(stop());
    }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(C);
