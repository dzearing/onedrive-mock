import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";

import { initializeIcons } from "office-ui-fabric-react";

import "./reset.css";

initializeIcons();

performance.mark("render-start");

const rootElement = document.getElementById("root");
render(<App />, rootElement);

performance.mark("render-end");
performance.measure("render", "render-start", "render-end");
