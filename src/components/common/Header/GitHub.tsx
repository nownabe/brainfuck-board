import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import Button from "bulma/elements/Button";
import Icon from "bulma/elements/Icon";

import { User } from "states";

import { signIn as createSignIn } from "actions/user";
import { authGitHub } from "helpers/firebase";

const c = ({ dispatch }: { dispatch: Dispatch<Action>}) => {
    const callback = (user: User) => {
        dispatch(createSignIn(user));
    };
    const onClick = () => { authGitHub(callback); };
    return (
        <Button onClick={onClick}>
            <Icon>github</Icon>
            <span>Sign In</span>
        </Button>
    );
};

export default connect(
    ({}) => ({}),
)(c);
