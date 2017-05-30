import * as firebase from "firebase";
import { Action, Dispatch } from "redux";

import { add } from "actions/programs";
import { get, reset, save } from "helpers/user";
import { Program, Source, User } from "states";

export const init = (dispatch: Dispatch<Action>) => {
    firebase.initializeApp({
        apiKey: "AIzaSyCciAREjQ1UWkXGfzZ7XQYAYbbDQI70K7s",
        authDomain: "brainfuck-board.firebaseapp.com",
        databaseURL: "https://brainfuck-board.firebaseio.com",
        messagingSenderId: "319625377192",
        projectId: "brainfuck-board",
        storageBucket: "brainfuck-board.appspot.com",
    });

    listenMyPrograms(dispatch);
};

const listenMyPrograms = (dispatch: Dispatch<Action>) => {
    const user = get();
    if (!user) { return; }

    const ref = firebase.database().ref("usersPrograms/" + user.id);
    ref.on("child_added", (snapshot: firebase.database.DataSnapshot | null) => {
        if (!snapshot) { return; }
        const programID = snapshot.key;
        firebase.database().ref(`programs/${programID}`).once("value").
            then((programSnapshot: firebase.database.DataSnapshot | null) => {
            if (!programSnapshot) { return; }
            const program: Program = {
                ...programSnapshot.val(),
                id: programID,
            };
            dispatch(add(program));
        });
    });
};

type Provider = firebase.auth.TwitterAuthProvider | firebase.auth.GithubAuthProvider;
const auth = async (provider: Provider, callback: (user: User) => void) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        await signOut();
    }

    try {
        const response = await firebase.auth().signInWithPopup(provider);
        const user = {
            id: response.user.uid,
            name: response.additionalUserInfo.username,
        };
        save(user);
        callback(user);
    } catch (error) {
        console.error(error);
    }
};

export const authTwitter = async (callback: (user: User) => void) => {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth(provider, callback);
};

export const authGitHub = async (callback: (user: User) => void) => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth(provider, callback);
};

export const signOut = async () => {
    try {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) { return; }
        await firebase.auth().signOut();
    } catch (error) {
        console.error(error);
    } finally {
        reset();
    }
};

export const publish = async (title: string, source: Source, user: User) => {
    const key = firebase.database().ref().child("programs").push().key;

    if (!key) {
        console.error("Failed to get key");
        return;
    }

    const data = {
        authorID: user.id,
        authorName: user.name,
        source,
        title,
        timestamp: new Date().getTime(),
    };

    const updates: { [key: string]: object | boolean } = {};
    updates[`/usersPrograms/${user.id}/${key}`] = true;
    updates[`/programs/${key}`] = data;
    return firebase.database().ref().update(updates);
};
