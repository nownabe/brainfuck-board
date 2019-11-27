import * as firebase from "firebase";
import { Action, Dispatch } from "redux";

import { add, remove as removeProgram } from "actions/programs";
import { signIn, signOut as createSignOut } from "actions/user";
import { Program, Source, User } from "states";

firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    appId: process.env.FIREBASE_APP_ID,
});

export const init = (dispatch: Dispatch<Action>) => {
    listenAuthStateChanged(dispatch);
};

const listenMyPrograms = (dispatch: Dispatch<Action>) => {
    const user = firebase.auth().currentUser;
    if (!user) { return; }

    const ref = firebase.database().ref("usersPrograms/" + user.uid);
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
    ref.on("child_removed", (snapshot: firebase.database.DataSnapshot | null) => {
        if (!snapshot) { return; }
        if (!snapshot.key) { return; }
        const program: Program = {
            ...snapshot.val(),
            id: snapshot.key,
        };
        dispatch(removeProgram(program));
    });
};

const listenAuthStateChanged = (dispatch: Dispatch<Action>) => {
    firebase.auth().onAuthStateChanged((fbUser: firebase.User | null) => {
        if (fbUser) {
            const name = localStorage.getItem(fbUser.uid) || "no name";
            const user = {
                id: fbUser.uid,
                name,
            };
            dispatch(signIn(user));
            listenMyPrograms(dispatch);
        } else {
            dispatch(createSignOut());
        }
    });
};

type Provider = firebase.auth.TwitterAuthProvider | firebase.auth.GithubAuthProvider;
const auth = async (provider: Provider, dispatch: Dispatch<Action>, callback: (user: User) => void) => {
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
        localStorage.setItem(user.id, user.name);
        callback(user);
    } catch (error) {
        console.error(error);
    }
};

export const authTwitter = async (dispatch: Dispatch<Action>, callback: (user: User) => void) => {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth(provider, dispatch, callback);
};

export const authGitHub = async (dispatch: Dispatch<Action>, callback: (user: User) => void) => {
    const provider = new firebase.auth.GithubAuthProvider();
    auth(provider, dispatch, callback);
};

export const signOut = async () => {
    try {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) { return; }
        await firebase.auth().signOut();
    } catch (error) {
        console.error(error);
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
        timestamp: new Date().getTime(),
        title,
    };

    const updates: { [key: string]: object | boolean } = {};
    updates[`/usersPrograms/${user.id}/${key}`] = true;
    updates[`/programs/${key}`] = data;
    return firebase.database().ref().update(updates);
};

export const remove = async (program: Program, user: User) => {
    const updates: { [key: string]: null } = {};
    updates[`/usersPrograms/${user.id}/${program.id}`] = null;
    updates[`/programs/${program.id}`] = null;
    console.log(updates)
    return firebase.database().ref().update(updates);
};
