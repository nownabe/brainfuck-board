import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { CSSProperties } from "react";
import { SavedProgram } from "../../hooks/firebase";

import IconButton from "../IconButton";
import { useLoadablePrograms } from "./hooks";

type Props = {
  programs: SavedProgram[];
  onClickDelete: (programId: string) => () => void;
};

const codeStyle: CSSProperties = {
  backgroundColor: "transparent",
  fontFamily: "'Inconsolata', monospace",
  padding: 0,
  fontSize: "1rem",
};

const LoadablePrograms = ({ programs, onClickDelete }: Props) => {
  const { onClickLoad } = useLoadablePrograms();

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
            />
          </div>
          <div className="message-body">
            <pre style={codeStyle}>
              <code>{program.program}</code>
            </pre>
            <div className="block mt-4">
              <IconButton
                className="button is-link"
                icon={faFileArrowDown}
                onClick={onClickLoad(program.program)}
              >
                Load
              </IconButton>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadablePrograms;
