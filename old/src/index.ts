import App from "App";
import { createElement } from "react";
import { render } from "react-dom";

import { init } from "style";

init();

render(createElement(App), document.getElementById("app"));
