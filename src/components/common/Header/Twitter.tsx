import * as React from "react";
import { connect } from "react-redux";
import { Action, Dispatch } from "redux";

import Button from "bulma/elements/Button";
import Icon from "bulma/elements/Icon";

import { User } from "states";

import { signIn as createSignIn } from "actions/user";
import { authTwitter } from "helpers/firebase";

const c = ({ dispatch }: { dispatch: Dispatch<Action>}) => {
    const callback = (user: User) => {
        dispatch(createSignIn(user));
    };
    const onClick = () => { authTwitter(callback); };
    return (
        <Button onClick={onClick}>
            <Icon>twitter</Icon>
            <span>Sign In</span>
        </Button>
    );
};

export default connect(
    ({}) => ({}),
)(c);
