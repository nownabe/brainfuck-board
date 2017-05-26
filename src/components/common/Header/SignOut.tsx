import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import { signOut as createSignOut } from "actions/user";
import { signOut } from "helpers/firebase";

import Button from "bulma/elements/Button";

const c = ({ dispatch }: { dispatch: Dispatch<Action>}) => {
    const onClick = () => {
        signOut();
        dispatch(createSignOut());
    };
    return (
        <Button onClick={onClick}>
            Sign out
        </Button>
    );
};

export default connect(
    ({}) => ({}),
)(c);
