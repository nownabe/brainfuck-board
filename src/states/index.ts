export interface Interpreter {
    inputPointer: number;
    memory: number[];
    output: string;
    pointer: number;
    programCounter: number;
}

export type Source = string;

export type Input = string;

export type IsRunning = boolean;

export interface State {
  interpreter: Interpreter;
  source: Source;
  input: Input;
  isRunning: IsRunning;
}
