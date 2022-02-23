import { initializeApp, FirebaseApp } from "firebase/app";
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
import {
  Database,
  get,
  getDatabase,
  onChildAdded,
  onChildRemoved,
  push,
  ref,
  update,
} from "firebase/database";
import { useCallback, useEffect, useMemo } from "react";
import { atom, useRecoilState } from "recoil";

import keys from "./atomKeys";
import { useVm } from "./vm";

type User = {
  id: string;
  name: string;
};

type Provider = "twitter" | "github";

const DEFAULT_NAME = "no name";

let app: FirebaseApp;

try {
  const firebaseConfig = JSON.parse(
    process.env.NEXT_PUBLIC_FIREBASE_CONFIG || ""
  );
  app = initializeApp(firebaseConfig);
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

type SavedProgram = {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  program: string;
  created: number;
};

const savedProgramsAtom = atom<Record<string, SavedProgram>>({
  key: keys.savedPrograms,
  default: {},
});

const listenSavedPrograms = (
  db: Database,
  user: User,
  addProgram: (program: SavedProgram) => void,
  removeProgram: (programId: string) => void
) => {
  const programsRef = ref(db, `usersPrograms/${user.id}`);

  const unsubscribeAdded = onChildAdded(programsRef, (snapshot) => {
    const programId = snapshot.key;
    if (!programId) {
      return;
    }
    const programRef = ref(db, `programs/${programId}`);
    get(programRef).then((programSnapshot) => {
      addProgram({ ...programSnapshot.val(), id: programId });
    });
  });

  const unsubscribeRemoved = onChildRemoved(programsRef, (snapshot) => {
    const programId = snapshot.key;
    if (!programId) {
      return;
    }
    removeProgram(programId);
  });

  return () => {
    unsubscribeAdded();
    unsubscribeRemoved();
  };
};

export const useSavedPrograms = () => {
  const { user } = useAuth();
  const { vm } = useVm();
  const [savedPrograms, setSavedPrograms] = useRecoilState(savedProgramsAtom);

  const db = useMemo(() => getDatabase(app), []);

  const addProgram = useCallback(
    (program: SavedProgram) => {
      setSavedPrograms((programs) => ({ [program.id]: program, ...programs }));
    },
    [setSavedPrograms]
  );

  const removeProgram = useCallback(
    (programId: string) => {
      setSavedPrograms((programs) => {
        const { [programId]: _, ...newPrograms } = programs;
        return newPrograms;
      });
    },
    [setSavedPrograms]
  );

  useEffect(() => {
    if (!user) {
      return;
    }

    const unsubscribe = listenSavedPrograms(
      db,
      user,
      addProgram,
      removeProgram
    );

    return () => unsubscribe();
  }, [user, db, addProgram, removeProgram]);

  const saveProgram = useCallback(
    async (title: string) => {
      if (!user) {
        return;
      }

      const key = push(ref(db, `programs`)).key;
      if (!key) {
        console.error("Failed to get a new key.");
        return;
      }

      const program = {
        authorId: user.id,
        authorName: user.name,
        title: title,
        program: vm.program,
        created: new Date().getTime(),
      };

      const updates: Record<string, object | boolean> = {};
      updates[`/usersPrograms/${user.id}/${key}`] = true;
      updates[`/programs/${key}`] = program;
      await update(ref(db), updates);
    },
    [user, vm, db]
  );

  const deleteProgram = useCallback(
    async (programId: string) => {
      if (!user) {
        return;
      }
      const updates: Record<string, null> = {};
      updates[`/usersPrograms/${user.id}/${programId}`] = null;
      updates[`/programs/${programId}`] = null;
      await update(ref(db), updates);
    },
    [user, db]
  );

  return {
    savedPrograms: Object.values(savedPrograms),
    saveProgram,
    deleteProgram,
  };
};
