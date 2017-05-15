import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { Input } from "states";

import { change } from "actions/input";

interface TStateProps {
    input: Input;
    dispatch: Dispatch<Action>;
}

const c = ({ dispatch, input}: TStateProps) => {
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(change(e.currentTarget.value));
    };

    return (
        <div id="input">
            <textarea
                className="textarea"
                value={input}
                onChange={onChange}
            />
        </div>
    );
};

export default connect(
    ({ input }) => ({ input }),
)(c);
