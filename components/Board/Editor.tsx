import { useBoard } from "./hooks";

const textareaStyle = {
  fontFamily: "'Inconsolata', monospace",
};

const Editor = () => {
  const { vm, isRunning, onChangeProgram, onChangeInput } = useBoard();

  return (
    <div>
      <div>
        <h3 className="title is-5">Source Code</h3>
        <textarea
          className="textarea"
          disabled={isRunning}
          onChange={onChangeProgram}
          style={{ minHeight: "480px", ...textareaStyle }}
          value={vm.program}
        ></textarea>
      </div>
      <div className="mt-5">
        <h3 className="title is-5">Input</h3>
        <textarea
          className="textarea"
          disabled={isRunning}
          onChange={onChangeInput}
          style={textareaStyle}
          value={vm.inputStream}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
