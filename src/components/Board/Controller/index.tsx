import * as React from "react";

import Buttons from "./Buttons";
import Editor from "./Editor";
import Input from "./Input";

export default () => (
  <div className="column">
    <Buttons />
    <Editor />
    <Input />
  </div>
);
