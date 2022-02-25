import { useRouter } from "next/router";
import { useCallback } from "react";

import { useSavedPrograms, useAuth } from "../../hooks/firebase";
import { useVm } from "../../hooks/vm";

export const usePrograms = () => {
  const router = useRouter();
  const { user } = useAuth();
  const { reset, setProgram } = useVm();
  const { savedPrograms, deleteProgram } = useSavedPrograms();

  const onClickDelete = useCallback(
    (programId: string) => () => deleteProgram(programId),
    [deleteProgram]
  );

  const onClickLoad = useCallback(
    (program: string) => () => {
      reset();
      setProgram(program);
      router.push("/");
    },
    [reset, setProgram, router]
  );

  return {
    user,
    programs: savedPrograms,
    onClickDelete,
    onClickLoad,
  };
};
