export type Interpreter = {
    memory: Array<number>;
    output: string;
    pointer: number;
    programCounter: number;
};

export type Source = string;

export type State = {
  interpreter: Interpreter;
  source: Source;
};