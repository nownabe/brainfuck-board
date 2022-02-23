import { grayDark, grayDarker, info, white } from "../../styles/color";
import { useBoard } from "./hooks";

const outputStyle = {
  backgroundColor: grayDarker,
  color: white,
  borderColor: grayDarker,
  "&:hover": {
    borderColor: grayDark,
  },
  "&:focus": {
    borderColor: info,
  },
};

const nextInstructionStyle = {
  padding: 0,
  fontFamily: "'Inconsolata', monospace",
};

const currentCommandStyle = {
  fontWeight: "bold",
  color: white,
  backgroundColor: grayDarker,
};

const Computer = () => {
  const { vm } = useBoard();

  return (
    <div>
      <div>
        <h3 className="title is-5">Output</h3>
        <textarea
          className="textarea"
          disabled
          style={outputStyle}
          value={vm.outputStream}
        ></textarea>
      </div>
      <div className="mt-5">
        <h3 className="title is-5">Next Instruction</h3>
        <pre style={nextInstructionStyle}>
          {vm.program.split("").map((c, i) => (
            <span
              key={i}
              style={i === vm.instructionPointer ? currentCommandStyle : {}}
            >
              {c}
            </span>
          ))}
        </pre>
      </div>
      <div className="mt-5">
        <h3 className="title is-5">Memory</h3>
        <table className="table is-narrow is-striped is-fullwidth is-hoverable">
          <thead>
            <tr>
              <th>Address</th>
              <th>Value</th>
              <th>Letter</th>
            </tr>
          </thead>
          <tbody>
            {vm.memory.map((v, i) => (
              <tr key={i}>
                {i === vm.dataPointer ? (
                  <td style={{ fontWeight: "bold", color: "#d00" }}>{i}*</td>
                ) : (
                  <td>{i}</td>
                )}
                <td>{v}</td>
                <td>{String.fromCharCode(v)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Computer;
