import { CSSProperties } from "react";
import { usePrograms } from "./hooks";

const codeStyle: CSSProperties = {
  backgroundColor: "transparent",
  fontFamily: "'Inconsolata', monospace",
  padding: 0,
  fontSize: "1rem",
};

const Programs = () => {
  const { user, programs, onClickDelete } = usePrograms();

  if (!user) {
    return (
      <div className="block">
        <div className="message is-danger">
          <div className="message-body">Please sign in.</div>
        </div>
      </div>
    );
  }

  return (
    <>
      {programs.map((program) => (
        <div key={program.id} className="message">
          <div className="message-header">
            <p>{program.title}</p>
            <button
              aria-label="delete"
              className="delete"
              onClick={onClickDelete(program.id)}
            ></button>
          </div>
          <div className="message-body">
            <pre style={codeStyle}>
              <code>{program.program}</code>
            </pre>
          </div>
        </div>
      ))}
    </>
  );
};

export default Programs;
