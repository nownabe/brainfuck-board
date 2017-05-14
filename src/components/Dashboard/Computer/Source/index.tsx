import * as React from "react";

import { connect } from "react-redux";

const c = ({ programCounter, source }: { programCounter: number, source: string }) => (
  <div id="source">
    <pre>
      {
        source.split("").map((c, i) => (
          <span
            key={`source${i}`}
            className={programCounter === i ? "current-instruction" : ""}
          >
            {c}
          </span>
        ))
      }
    </pre>
  </div>
);

export default connect(
  ({ programCounter, source }) => ({ programCounter, source })
)(c);
