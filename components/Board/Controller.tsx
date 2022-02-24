import {
  faAngleRight,
  faAnglesRight,
  faForwardStep,
  faPlay,
  faRotateLeft,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickRun}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span>Run</span>
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickRunSlowly}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faAnglesRight} />
          </span>
          <span>Run Slowly</span>
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickRunSteply}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
          <span>Run Steply</span>
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickStep}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faForwardStep} />
          </span>
          <span>Step</span>
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-warning"
          disabled={!isRunning}
          onClick={onClickStop}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faStop} />
          </span>
          <span>Stop</span>
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-warning"
          disabled={isRunning}
          onClick={onClickReset}
        >
          <span className="icon">
            <FontAwesomeIcon icon={faRotateLeft} />
          </span>
          <span>Reset</span>
        </button>
      </div>
      <div className="column">
        <SaveButton />
      </div>
    </div>
  );
};

export default Controller;
