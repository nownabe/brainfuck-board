import { useRouter } from "next/router";
import { useCallback } from "react";

import { useVm } from "../../hooks/vm";

export const useLoadablePrograms = () => {
  const router = useRouter();
  const { reset, setProgram } = useVm();

  const onClickLoad = useCallback(
    (program: string) => () => {
      reset();
      setProgram(program);
      router.push("/");
    },
    [reset, setProgram, router]
  );

  return { onClickLoad };
};
