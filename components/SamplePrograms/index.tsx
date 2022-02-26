import LoadablePrograms from "../LoadablePrograms";
import { useSamplePrograms } from "./hooks";

const SamplePrograms = () => {
  const samplePrograms = useSamplePrograms();

  return (
    <div className="section">
      <div className="container">
        <LoadablePrograms programs={samplePrograms} />;
      </div>
    </div>
  );
};

export default SamplePrograms;
