import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useCallback, useEffect, useMemo } from "react";
import { atom, useRecoilState } from "recoil";

import keys from "./atomKeys";

type User = {
  id: string;
  name: string;
};

type Provider = "twitter" | "github";

const DEFAULT_NAME = "no name";

try {
  const firebaseConfig = JSON.parse(
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG || ""
  );
  initializeApp(firebaseConfig);
} catch (error) {
  console.error("Failed to initialize Firebase", error);
}

const userAtom = atom<User | null>({
  key: keys.auth.user,
  default: null,
});

const isInitializingAtom = atom<boolean>({
  key: keys.auth.isInitializing,
  default: true,
});

export const useAuth = () => {
  const [isInitializing, setIsInitializing] =
    useRecoilState(isInitializingAtom);
  const [user, setUser] = useRecoilState(userAtom);

  const auth = useMemo(() => getAuth(), []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          id: firebaseUser.uid,
          name: firebaseUser.displayName || DEFAULT_NAME,
        });
      } else {
        setUser(null);
      }
      setIsInitializing(false);
    });

    return () => unsubscribe();
  }, [auth, setIsInitializing, setUser]);

  const signInWith = useCallback(
    async (providerName: Provider) => {
      const provider =
        providerName === "twitter"
          ? new TwitterAuthProvider()
          : new GithubAuthProvider();

      try {
        await setPersistence(auth, browserLocalPersistence);
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        const user = {
          id: result.user.uid,
          name: result.user.displayName || DEFAULT_NAME,
        };
        setUser(user);
      } catch (error) {
        console.error(error);
      }
    },
    [auth, setUser]
  );

  const signOut_ = useCallback(async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Failed to sign out.", error);
    }
  }, [auth, setUser]);

  return {
    isInitializing,
    user,
    signInWith,
    signOut: signOut_,
  };
};
