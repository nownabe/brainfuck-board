import {
  faAngleRight,
  faAnglesRight,
  faForwardStep,
  faPlay,
  faRotateLeft,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

import IconButton from "../IconButton";
import SaveButton from "./SaveButton";
import { useBoard } from "./hooks";

type Props = {};

const Controller = ({}: Props) => {
  const {
    isRunning,
    onClickRun,
    onClickRunSlowly,
    onClickRunSteply,
    onClickStep,
    onClickStop,
    onClickReset,
  } = useBoard();

  return (
    <div className="columns">
      <div className="column">
        <IconButton
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          icon={faPlay}
          onClick={onClickRun}
        >
          Run
        </IconButton>
      </div>
      <div className="column">
        <IconButton
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          icon={faAnglesRight}
          onClick={onClickRunSlowly}
        >
          Run Slowly
        </IconButton>
      </div>
      <div className="column">
        <IconButton
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          icon={faAngleRight}
          onClick={onClickRunSteply}
        >
          Run Steply
        </IconButton>
      </div>
      <div className="column">
        <IconButton
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          icon={faForwardStep}
          onClick={onClickStep}
        >
          Step
        </IconButton>
      </div>
      <div className="column">
        <IconButton
          className="button is-fullwidth is-warning"
          disabled={!isRunning}
          icon={faStop}
          onClick={onClickStop}
        >
          Stop
        </IconButton>
      </div>
      <div className="column">
        <IconButton
          className="button is-fullwidth is-warning"
          disabled={isRunning}
          icon={faRotateLeft}
          onClick={onClickReset}
        >
          Reset
        </IconButton>
      </div>
      <div className="column">
        <SaveButton />
      </div>
    </div>
  );
};

export default Controller;
