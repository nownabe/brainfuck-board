import { useCallback, useState } from "react";

import { useAuth } from "../../hooks/firebase";

export const useUser = () => {
  const { isInitializing, user, signInWith, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const signInWithTwitter = useCallback(async () => {
    setIsLoading(true);
    await signInWith("twitter");
    setIsLoading(false);
  }, [setIsLoading, signInWith]);

  const signInWithGithub = useCallback(async () => {
    setIsLoading(true);
    await signInWith("github");
    setIsLoading(false);
  }, [setIsLoading, signInWith]);

  const onClickSignOut = useCallback(async () => {
    setIsLoading(true);
    await signOut();
    setIsLoading(false);
  }, [setIsLoading, signOut]);

  return {
    isLoading: isInitializing || isLoading,
    user,
    signInWithTwitter,
    signInWithGithub,
    onClickSignOut,
  };
};
