import { useCallback } from "react";

import { useSavedPrograms, useAuth } from "../../hooks/firebase";

export const usePrograms = () => {
  const { user } = useAuth();
  const { savedPrograms, deleteProgram } = useSavedPrograms();

  const onClickDelete = useCallback(
    (programId: string) => () => deleteProgram(programId),
    [deleteProgram]
  );

  return {
    user,
    programs: savedPrograms,
    onClickDelete,
  };
};
