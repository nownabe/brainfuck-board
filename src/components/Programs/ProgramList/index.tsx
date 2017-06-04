import * as React from "react";
import { connect } from "react-redux";

import { Programs, State, User } from "states";

import Item from "./Item";
import Warning from "./Warning";

interface TStateProps {
    programs: Programs;
    children?: React.ReactNode;
    user: User;
}
interface TDispatchProps {}
interface TOwnProps {}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
    programs: state.programs,
    user: state.user,
});
const mapDispatchToProps = () => ({});

class C extends React.Component<Props, {}> {
    public render() {
        if (!this.props.user) {
            return <Warning />;
        }

        return (
            <div>
                    {
                        Object.keys(this.props.programs).map((key, i) => (
                            <Item key={key} title={this.props.programs[key].title}/>
                        ))
                    }
            </div>
        );
    }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(C);
