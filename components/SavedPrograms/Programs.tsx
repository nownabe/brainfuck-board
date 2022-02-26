import LoadablePrograms from "../LoadablePrograms";
import { usePrograms } from "./hooks";

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

  return <LoadablePrograms onClickDelete={onClickDelete} programs={programs} />;
};

export default Programs;
