import { styled as msStyled } from "./newStyled/styled";
import { ThemeProvider as msThemeProvider } from "./newStyled/ThemeProvider";
import { default as emStyled } from "@emotion/styled";
import { ThemeProvider as emThemeProvider } from "emotion-theming";
import {
  default as scStyled,
  ThemeProvider as scThemeProvider
} from "styled-components";

export let StyleHelpers = {
  StyleMethod: "merge-styles 2 proto",
  styled: msStyled,
  ThemeProvider: msThemeProvider
};

switch (document.location.search) {
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
