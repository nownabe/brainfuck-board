import App from "App";
import { createElement } from "react";
import { render } from "react-dom";

import { init as initFirebase } from "helpers/firebase";
import { init as initStyle } from "style";

initFirebase();
initStyle();

render(createElement(App), document.getElementById("app"));
