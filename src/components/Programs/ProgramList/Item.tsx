import * as React from "react";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { Action, Dispatch } from "redux";
import styled from "styled-components";

import { reset } from "actions/board";
import { load } from "actions/source";
import { remove } from "helpers/firebase";
import { Program, State, User } from "states";

import { inputBorder } from "bulma/color";
import { Danger, Primary } from "bulma/elements/Button/colors";
import Column from "bulma/grid/Column";
import Columns from "bulma/grid/Columns";

const Container = styled(Column)`
    display: flex;
    align-items: baseline;
    border-bottom: 1px solid ${inputBorder};
`;
const Buttons = styled.div`
    margin-right: 16px;
    display: flex;
    padding: 0 8px;
`;
const LoadButton = styled(Primary)`
    margin-right: 16px;
`;
const DeleteButton = styled(Danger)`
    margin: 0;
`;

interface TStateProps {
    user: User;
}
interface TDispatchProps {
    load: () => null;
}
interface TOwnProps {
    program: Program;
}
type Props = TStateProps & TDispatchProps & TOwnProps;

const mapStateToProps = (state: State) => ({
    user: state.user,
});
const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: TOwnProps) => ({
    load: () => {
        dispatch(reset());
        dispatch(load(ownProps.program.source));
        dispatch(push("/"));
    },
});

class Item extends React.Component<Props, {}> {
    public render() {
        return(
            <Columns>
                <Container>
                    <Buttons>
                        <LoadButton onClick={this.props.load}>Load</LoadButton>
                        <DeleteButton onClick={this.delete.bind(this)}>Delete</DeleteButton>
                    </Buttons>
                    <p>{ this.props.program.title }</p>
                </Container>
            </Columns>
        );
    }

    private delete() {
        remove(this.props.program, this.props.user);
    }
}

export default connect<TStateProps, TDispatchProps, TOwnProps>(mapStateToProps, mapDispatchToProps)(Item);