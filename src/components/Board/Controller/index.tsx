import * as React from "react";

import Column from "bulma/grid/Column";

import Buttons from "./Buttons";
import Editor from "./Editor";
import Input from "./Input";

export default () => (
  <Column>
    <Buttons />
    <Editor />
    <Input />
  </Column>
);
