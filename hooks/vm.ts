import { useCallback } from "react";
import { atom, useRecoilState } from "recoil";

import atomKeys from "./atomKeys";

type VM = {
  program: string;
  memory: number[];
  dataPointer: number;
  instructionPointer: number;
  inputStream: string;
  inputPointer: number;
  outputStream: string;
};

type Instruction = (vm: VM) => VM;

type Command = ">" | "<" | "+" | "-" | "," | "." | "[" | "]" | "?";

const memorySize = 16;

const NEXT: Command = ">";
const PREV: Command = "<";
const INC: Command = "+";
const DEC: Command = "-";
const READ: Command = ",";
const WRITE: Command = ".";
const OPEN: Command = "[";
const CLOSE: Command = "]";
const UNKNOWN: Command = "?";
const COMMANDS: string[] = [
  NEXT,
  PREV,
  INC,
  DEC,
  READ,
  WRITE,
  OPEN,
  CLOSE,
  UNKNOWN,
];

const INITIAL_PROGRAM = `+++++++++
[>++++++++>+++++++++++>+++++<<<-]
>.>++.+++++++..+++.>-.-----------
-.<++++++++.--------.+++.------.-
-------.>+.`;

const INITIAL_VM: VM = {
  program: INITIAL_PROGRAM,
  memory: new Array(memorySize).fill(0),
  dataPointer: 0,
  instructionPointer: 0,
  inputStream: "",
  inputPointer: 0,
  outputStream: "",
};

const vmState = atom<VM>({
  key: atomKeys.vm,
  default: INITIAL_VM,
});

const isCommand = (command: string): command is Command => {
  return COMMANDS.includes(command);
};

const isTerminated = (vm: VM): boolean =>
  vm.instructionPointer >= vm.program.length;

const getCommand = (vm: VM): Command => {
  const command = vm.program[vm.instructionPointer];
  if (isCommand(command)) {
    return command;
  }
  return UNKNOWN;
};

const instructions = {
  [NEXT]: (vm: VM): VM => {
    vm.dataPointer++;
    return vm;
  },
  [PREV]: (vm: VM): VM => {
    vm.dataPointer--;
    return vm;
  },
  [INC]: (vm: VM): VM => {
    vm.memory[vm.dataPointer]++;
    return vm;
  },
  [DEC]: (vm: VM): VM => {
    vm.memory[vm.dataPointer]--;
    return vm;
  },
  [READ]: (vm: VM): VM => {
    vm.memory[vm.dataPointer] = vm.inputStream[vm.inputPointer++].charCodeAt(0);
    return vm;
  },
  [WRITE]: (vm: VM): VM => {
    vm.outputStream += String.fromCharCode(vm.memory[vm.dataPointer]);
    return vm;
  },
  [OPEN]: (vm: VM): VM => {
    if (vm.memory[vm.dataPointer] === 0) {
      let n = 0;
      while (true) {
        vm.instructionPointer++;
        if (getCommand(vm) === OPEN) {
          n++;
        } else if (getCommand(vm) === CLOSE) {
          n--;
          if (n < 0) {
            break;
          }
        }
      }
    }
    return vm;
  },
  [CLOSE]: (vm: VM): VM => {
    if (vm.memory[vm.dataPointer] !== 0) {
      let n = 0;
      while (true) {
        vm.instructionPointer--;
        if (getCommand(vm) === CLOSE) {
          n++;
        } else if (getCommand(vm) === OPEN) {
          n--;
          if (n < 0) {
            break;
          }
        }
      }
    }
    return vm;
  },
  [UNKNOWN]: (vm: VM): VM => vm,
};

const getInstruction = (vm: VM): Instruction => instructions[getCommand(vm)];

const tickVm = (vm: VM): VM => {
  const instruction = getInstruction(vm);
  instruction(vm);
  vm.instructionPointer++;
  return vm;
};

const runVm = (vm: VM): VM => {
  while (!isTerminated(vm)) {
    tickVm(vm);
  }
  return vm;
};

export const useVm = () => {
  const [vm, setVm] = useRecoilState(vmState);

  const setProgram = useCallback(
    (program: string) => {
      setVm((vm: VM) => ({ ...vm, memory: [...vm.memory], program }));
    },
    [setVm]
  );
  const setInput = useCallback(
    (input: string) => {
      setVm((vm: VM) => ({
        ...vm,
        memory: [...vm.memory],
        inputStream: input,
      }));
    },
    [setVm]
  );
  const run = useCallback(
    () => setVm((vm) => runVm({ ...vm, memory: [...vm.memory] })),
    [setVm]
  );
  const step = useCallback(
    () => setVm((vm) => tickVm({ ...vm, memory: [...vm.memory] })),
    [setVm]
  );
  const reset = useCallback(
    () =>
      setVm((vm) => ({
        ...INITIAL_VM,
        inputStream: vm.inputStream,
        program: vm.program,
      })),
    [setVm]
  );

  return {
    vm,
    isTerminated: isTerminated(vm),
    setProgram,
    setInput,
    run,
    step,
    reset,
  };
};
