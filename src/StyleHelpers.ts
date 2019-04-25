import { styled as msStyled } from "./newStyled/styled";
import { ThemeProvider as msThemeProvider } from "./newStyled/ThemeProvider";
import { default as emStyled } from "@emotion/styled";
import { ThemeProvider as emThemeProvider } from "emotion-theming";
import { styled as lStyled } from "linaria/react";
import { createTheming } from "@callstack/react-theme-provider";

const lThemeProvider = createTheming({}).ThemeProvider;

import {
  default as scStyled,
  ThemeProvider as scThemeProvider
} from "styled-components";

export let StyleHelpers = {
  StyleMethod: "merge-styles 2 proto",
  styled: msStyled,
  ThemeProvider: msThemeProvider
};

console.log(document.location.search);

switch (document.location.search) {
  case "?linaria":
    StyleHelpers = {
      StyleMethod: "linaria",
      styled: lStyled,
      ThemeProvider: lThemeProvider as any
    };
    break;
  case "?emotion":
    StyleHelpers = {
      StyleMethod: "emotion",
      styled: emStyled,
      ThemeProvider: emThemeProvider
    };
    break;
  case "?styled-components":
    StyleHelpers = {
      StyleMethod: "styled-components",
      styled: scStyled,
      ThemeProvider: scThemeProvider as any
    };
    break;
}
