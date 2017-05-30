export interface Interpreter {
    inputPointer: number;
    memory: number[];
    output: string;
    pointer: number;
    programCounter: number;
}

export interface Program {
  id: string;
  authorID: string;
  authorName: string;
  source: string;
  title: string;
  timestamp: number;
}

export interface Programs {
  [key: string]: Program;
}

export type Source = string;

export type Input = string;

export type IsRunning = boolean;

export interface User {
  id: string;
  name: string;
}

export interface State {
  interpreter: Interpreter;
  programs: Programs;
  source: Source;
  input: Input;
  isRunning: IsRunning;
  user: User;
}
