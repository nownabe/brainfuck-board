import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import styled from "styled-components";

import { change } from "actions/input";
import { Input } from "states";

import DarkTextarea from "components/common/DarkTextarea";

const Container = styled.div`
    margin-top: 1rem;
`;

interface TStateProps {
    input: Input;
    dispatch: Dispatch<Action>;
}

const c = ({ dispatch, input}: TStateProps) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(change(e.currentTarget.value));
    };

    return (
        <Container>
            <h3>Input</h3>
            <DarkTextarea value={input} onChange={onChange} />
        </Container>
    );
};

export default connect(
    ({ input }) => ({ input }),
)(c);
