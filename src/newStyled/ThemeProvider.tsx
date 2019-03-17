import * as React from "react";

export const ThemeContext = React.createContext({ default: {} });

export const ThemeProvider = props => (
  <ThemeContext.Provider value={props.theme}>
    {props.children}
  </ThemeContext.Provider>
);
