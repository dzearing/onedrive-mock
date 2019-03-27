import * as React from "react";
import { render } from "react-dom";
import { MergeStylesApp} from './MergeStylesApp';
import { EmotionApp} from './EmotionApp';
import { StyledComponentsApp } from './StyledComponentsApp';

import { initializeIcons,} from "office-ui-fabric-react";

import "./styles.css";

initializeIcons();

let App = MergeStylesApp;

switch (document.location.search) {
  case '?emotion': 
    App = EmotionApp;
    break;
  case '?styled-components':
    App = StyledComponentsApp;
    break;
}

performance.mark("render-start");

const rootElement = document.getElementById("root");
render(<App />, rootElement);

performance.mark("render-end");
performance.measure("render", "render-start", "render-end");
