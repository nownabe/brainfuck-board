import * as firebase from "firebase";

import { save, reset } from "helpers/user";

export const init = () => {
    firebase.initializeApp({
        apiKey: "AIzaSyCciAREjQ1UWkXGfzZ7XQYAYbbDQI70K7s",
        authDomain: "brainfuck-board.firebaseapp.com",
        databaseURL: "https://brainfuck-board.firebaseio.com",
        messagingSenderId: "319625377192",
        projectId: "brainfuck-board",
        storageBucket: "brainfuck-board.appspot.com",
    });
};

export const authTwitter = async (callback: (response: any) => void) => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
        await signOut();
    }

    const twitter = new firebase.auth.TwitterAuthProvider();
    try {
        const response = await firebase.auth().signInWithPopup(twitter);
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

export const signOut = async () => {
    try {
        const currentUser = firebase.auth().currentUser;
        if (!currentUser) { return; }
        await firebase.auth().signOut();
        reset();
    } catch (error) {
        console.error(error);
    }
};
