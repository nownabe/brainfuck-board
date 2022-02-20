import React, { useCallback, useEffect, useRef, useState } from "react";

import { useVm } from "./../../hooks/vm";

export const useBoard = () => {
  const { vm, isTerminated, setProgram, setInput, run, step, reset } = useVm();
  const [isRunning, setIsRunning] = useState(false);
  const isAutoStepInterrupted = useRef(false);
  const isTerminatedRef = useRef(true);

  useEffect(() => {
    isTerminatedRef.current = isTerminated;
  }, [isTerminated]);

  useEffect(() => {
    return () => {
      isAutoStepInterrupted.current = true;
      setIsRunning(false);
    };
  }, []);

  const onChangeProgram = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setProgram(e.currentTarget.value),
    [setProgram]
  );
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) =>
      setInput(e.currentTarget.value),
    [setInput]
  );
  const onClickRun = useCallback(() => {
    setIsRunning(true);
    run();
    setIsRunning(false);
  }, [run, setIsRunning]);
  const onClickStep = useCallback(() => {
    setIsRunning(true);
    step();
    setIsRunning(false);
  }, [setIsRunning, step]);
  const onClickStop = useCallback(() => {
    isAutoStepInterrupted.current = true;
    setIsRunning(false);
  }, [setIsRunning]);
  const onClickReset = useCallback(() => {
    reset();
  }, [reset]);

  const autoStep = useCallback(
    (interval: number) => () => {
      if (isAutoStepInterrupted.current) {
        isAutoStepInterrupted.current = false;
        return;
      }
      step();
      if (isTerminatedRef.current) {
        setIsRunning(false);
      } else {
        setTimeout(autoStep(interval), interval);
      }
    },
    [setIsRunning, step]
  );

  const onClickRunSlowly = useCallback(() => {
    setIsRunning(true);
    autoStep(5)();
  }, [setIsRunning, autoStep]);

  const onClickRunSteply = useCallback(() => {
    setIsRunning(true);
    autoStep(20)();
  }, [setIsRunning, autoStep]);

  return {
    isRunning,
    vm,
    isTerminated,
    onChangeProgram,
    onChangeInput,
    onClickRun,
    onClickRunSlowly,
    onClickRunSteply,
    onClickStep,
    onClickStop,
    onClickReset,
  };
};
