import * as React from "react";
import { render } from "react-dom";
import { App } from "./App";
import { App as AppWithCSS } from "./withCSS/App";
import { initializeIcons } from "@fluentui/react";
import "./reset.css";

initializeIcons();

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
let RenderedApp = App;

if (document.location.search === "?css") {
  RenderedApp = AppWithCSS;
}

performance.mark("start");
render(<RenderedApp />, rootElement);
performance.mark("end");
performance.measure("render", "start", "end");

// const options = {
//   content: <App />,
//   element: rootElement,
//   instances: 1,
//   iterations: 1
// };

// measureRender(options).then(timings =>
//   render(
//     <>
//       <App>
//         <Timing timings={timings} options={options} />
//       </App>
//     </>,
//     rootElement
//   )
// );
