// brainfuck interpreter

const NEXT  = ">";
const PREV  = "<";
const INC   = "+";
const DEC   = "-";
const READ  = ","; // Not implemented
const WRITE = ".";
const OPEN  = "[";
const CLOSE = "]";

export default class {
  constructor({ memory, output, pointer, programCounter, source }) {
    this.memory = memory;
    this.output = output;
    this.pointer = pointer;
    this.programCounter = programCounter;
    this.source = source;

    this.ops = {};
    this.ops[NEXT]  = this.next.bind(this);
    this.ops[PREV]  = this.prev.bind(this);
    this.ops[INC]   = this.inc.bind(this);
    this.ops[DEC]   = this.dec.bind(this);
    this.ops[READ]  = this.read.bind(this);
    this.ops[WRITE] = this.write.bind(this);
    this.ops[OPEN]  = this.open.bind(this);
    this.ops[CLOSE] = this.close.bind(this);
  }

  next() {
    this.pointer++;
  }

  prev() {
    this.pointer--;
  }

  inc() {
    this.memory[this.pointer] = this.value() + 1;
  }

  dec() {
    this.memory[this.pointer] = this.value() - 1;
  }

  read() {
    console.error("Read operation is not implemented yet.");
  }

  write() {
    this.output += String.fromCharCode(this.value());
  }

  open() {
    if(this.value() === 0) {
      let n = 0;
      while(true) {
        this.programCounter++;
        if(this.opcode() === OPEN) {
          n++;
        } else if (this.opcode() === CLOSE) {
          n--;
          if(n < 0) break;
        }
      }
    }
  }

  close() {
    if(this.value() !== 0) {
      let n = 0;
      while(true) {
        this.programCounter--;
        if(this.opcode() === CLOSE) {
          n++;
        } else if (this.opcode() === OPEN) {
          n--;
          if(n < 0) break;
        }
      }
    }
  }

  opcode() {
    return this.source[this.programCounter];
  }

  value() {
    if(!this.memory[this.pointer]) this.memory[this.pointer] = 0;
    return this.memory[this.pointer];
  }

  tick() {
    let op = this.ops[this.opcode()]
    if(op) op()
    this.programCounter++;
  }

  run() {
    while(this.programCounter <= this.source.length) this.tick()
  }

  state() {
    return({
      memory: this.memory,
      output: this.output,
      pointer: this.pointer,
      programCounter: this.programCounter,
      source: this.source
    })
  }
};
