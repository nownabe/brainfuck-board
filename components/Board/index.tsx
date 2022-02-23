import Computer from "./Computer";
import Controller from "./Controller";
import Editor from "./Editor";

type Props = {};
const Board = ({}: Props) => {
  return (
    <div className="section">
      <div className="container">
        <Controller></Controller>
        <div className="columns">
          <div className="column">
            <Editor />
          </div>
          <div className="column">
            <Computer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
