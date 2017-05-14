export interface Interpreter {
    memory: number[];
    output: string;
    pointer: number;
    programCounter: number;
}

export type Source = string;

export interface State {
  interpreter: Interpreter;
  source: Source;
}
