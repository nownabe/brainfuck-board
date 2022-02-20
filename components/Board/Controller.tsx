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
          Run
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickRunSlowly}
        >
          Run Slowly
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickRunSteply}
        >
          Run Steply
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-primary"
          disabled={isRunning}
          onClick={onClickStep}
        >
          Step
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-warning"
          disabled={!isRunning}
          onClick={onClickStop}
        >
          Stop
        </button>
      </div>
      <div className="column">
        <button
          className="button is-fullwidth is-warning"
          disabled={isRunning}
          onClick={onClickReset}
        >
          Reset
        </button>
      </div>
      <div className="column">
        <button className="button is-fullwidth is-link">Save</button>
      </div>
    </div>
  );
};

export default Controller;
