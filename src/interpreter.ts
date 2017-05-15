const NEXT = ">";
const PREV = "<";
const INC = "+";
const DEC = "-";
const READ = ","; // Not implemented
const WRITE = ".";
const OPEN = "[";
const CLOSE = "]";

interface InterpreterState {
  memory: number[];
  output: string;
  pointer: number;
  programCounter: number;
}
interface Instructions { [key: string]: () => void; }

export default class {
  private memory: number[];
  private output: string;
  private pointer: number;
  private programCounter: number;
  private source: string;
  private instructions: Instructions;

  constructor(
    { memory, output, pointer, programCounter }: InterpreterState,
    source: string,
  ) {
    this.memory = memory.slice();
    this.output = output;
    this.pointer = pointer;
    this.programCounter = programCounter;
    this.source = source;

    this.instructions = {};
    this.instructions[NEXT] = this.next.bind(this);
    this.instructions[PREV] = this.prev.bind(this);
    this.instructions[INC] = this.inc.bind(this);
    this.instructions[DEC] = this.dec.bind(this);
    this.instructions[READ] = this.read.bind(this);
    this.instructions[WRITE] = this.write.bind(this);
    this.instructions[OPEN] = this.open.bind(this);
    this.instructions[CLOSE] = this.close.bind(this);
  }

  public tick() {
    const instruction = this.instructions[this.code()];
    if (instruction) { instruction(); }
    this.programCounter++;
  }

  public run() {
    while (this.programCounter <= this.source.length) { this.tick(); }
  }

  public isFinished() {
    return this.programCounter > this.source.length;
  }

  public state() {
    return ({
      memory: this.memory,
      output: this.output,
      pointer: this.pointer,
      programCounter: this.programCounter,
    });
  }

  private next(): void {
    this.pointer++;
  }

  private prev() {
    this.pointer--;
  }

  private inc() {
    this.memory[this.pointer] = this.value() + 1;
  }

  private dec() {
    this.memory[this.pointer] = this.value() - 1;
  }

  private read() {
    // Not Implemented
  }

  private write() {
    this.output += String.fromCharCode(this.value());
  }

  private open() {
    if (this.value() === 0) {
      let n = 0;
      while (true) {
        this.programCounter++;
        if (this.code() === OPEN) {
          n++;
        } else if (this.code() === CLOSE) {
          n--;
          if (n < 0) { break; }
        }
      }
    }
  }

  private close() {
    if (this.value() !== 0) {
      let n = 0;
      while (true) {
        this.programCounter--;
        if (this.code() === CLOSE) {
          n++;
        } else if (this.code() === OPEN) {
          n--;
          if (n < 0) { break; }
        }
      }
    }
  }

  private code() {
    return this.source[this.programCounter];
  }

  private value() {
    if (!this.memory[this.pointer]) { this.memory[this.pointer] = 0; }
    return this.memory[this.pointer];
  }
}
