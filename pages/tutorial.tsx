import { faExternalLink, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";

import Header from "../components/Header";

const commands = [
  {
    command: ">",
    meaning:
      "Increment the data pointer (to point to the next cell to the right).",
  },
  {
    command: "<",
    meaning:
      "Decrement the data pointer (to point to the next cell to the left).",
  },
  {
    command: "+",
    meaning: "Increment (increse by one) the byte at the data pointer.",
  },
  {
    command: "-",
    meaning: "Decrement (decrease by one) the byte at the data pointer.",
  },
  {
    command: ".",
    meaning: "Output the byte at the data pointer.",
  },
  {
    command: ",",
    meaning:
      "Accept one byte of input, storing its value in the byte at the data pointer.",
  },
  {
    command: "[",
    meaning:
      "If the byte at the data pointer is zero, then instead of moving the instruction pointer forward to the next command, jump it forward to the command after the matching ] command.",
  },
  {
    command: "]",
    meaning:
      "If the byte at the data pointer is nonzero, then instead of moving the instruction pointer forward to the next command, jump it back to the command after the matching [ command.",
  },
];

const Tutorial: NextPage = () => {
  return (
    <>
      <Header tab="tutorial" />
      <main>
        <section className="section">
          <div className="container">
            <div className="block">
              <h2 className="title is-2">Tutorial</h2>
              <p>
                <a
                  href="https://en.wikipedia.org/wiki/Brainfuck"
                  rel="noreferrer"
                  target="_blank"
                >
                  Brainfuck{" "}
                  <span className="icon">
                    <FontAwesomeIcon icon={faExternalLink} />
                  </span>
                </a>{" "}
                is an esoteric programming language. You can write programs with
                only 8 commands:{" "}
                {commands.map((command, i) => (
                  <span key={i}>
                    <code>{command.command}</code>
                    {i === commands.length - 1 ? "." : ", "}
                  </span>
                ))}
              </p>
            </div>
            <div className="block">
              <h3 className="title is-3">Commands</h3>
              <table className="table is-fullwidth">
                <thead>
                  <tr>
                    <th>Command</th>
                    <th>Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {commands.map((command, i) => (
                    <tr key={i}>
                      <td>
                        <code>{command.command}</code>
                      </td>
                      <td>{command.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="block">
              <article className="message is-warning">
                <div className="message-body">
                  <span className="icon">
                    <FontAwesomeIcon icon={faWarning} />
                  </span>
                  <span>
                    This Brainfuck environment has just 16 bytes memory.
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Tutorial;
