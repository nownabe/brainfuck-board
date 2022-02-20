import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { change } from "actions/input";
import { Input, IsRunning } from "states";

import Textarea from "bulma/elements/Textarea";
import Container from "components/common/MiniContainer";

interface TStateProps {
    input: Input;
    isRunning: IsRunning;
    dispatch: Dispatch<Action>;
}

const c = ({ dispatch, input, isRunning }: TStateProps) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(change(e.currentTarget.value));
    };

    return (
        <Container>
            <h3>Input</h3>
            <Textarea value={input} onChange={onChange} disabled={isRunning} />
        </Container>
    );
};

export default connect(
    ({ input, isRunning }) => ({ input, isRunning }),
)(c);
