import * as React from "react";
import { css } from "./css";
import { ThemeContext } from "./ThemeProvider";

export const ElementTypes = ["div", "button", "h1", "h2", "h3", "a"];
export type ComponentType = any;
export type StyledFunction = (
  component: ComponentType
) => React.StatelessComponent;
export interface StyledType extends StyledFunction {
  div: StyledFunction;
}

export const styled: any = (
  Component: ComponentType,
  options?: { displayName: string }
) => {
  return function() {
    const styles = arguments;
    const parentStyles = Component.__styles;

    Component = Component.__component || Component;

    const result = props => {
      const theme = React.useContext(ThemeContext);
      const className = css(
        resolveWith(
          { ...props, theme, displayName: options && options.displayName },
          parentStyles,
          styles
        )
      );

      return <Component {...props} className={className} />;
    };

    (result as any).__component = Component;
    (result as any).__styles = styles;

    return result;
  };
};

function resolveWith(props, ...argSets) {
  const result = [];

  for (const args of argSets) {
    if (args) {
      const parts = args[0];

      for (let i = 0; i < parts.length; i++) {
        result.push(parts[i]);

        const part = args[i + 1];

        if (part) {
          result.push(typeof part === "function" ? part(props) : part);
        }
      }
    }
  }

  return result.join("");
}

const createFactory = type => {
  (styled as any)[type] = styled(type);
};

ElementTypes.forEach(type => (styled[type] = styled(type)));
