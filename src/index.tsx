import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { initializeIcons } from "office-ui-fabric-react";
import { measureRender, Timing } from "./TimeTest";
import "./reset.css";

initializeIcons();

const rootElement = document.getElementById("root");

const options = {
  content: <App />,
  element: rootElement,
  instances: 1,
  iterations: 1
};

measureRender(options).then(timings =>
  render(
    <>
      <App>
        <Timing timings={timings} options={options} />
      </App>
    </>,
    rootElement
  )
);
