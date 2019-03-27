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

const USE_CACHED_RESULTS = true;

export const styled: any = (
  Component: ComponentType,
  options?: { displayName: string }
) => {
  return function() {
    const styles = arguments;
    const parentStyles = Component.__styles;
    const argCache = new Map();

    Component = Component.__component || Component;

    const result = allProps => {
      const { as, ...props } = allProps;
      const Resolved = as || Component;
      const theme = React.useContext(ThemeContext);
      const className = resolveClass(
        argCache,
        { ...props, theme, displayName: options && options.displayName },
        parentStyles,
        styles
      );

      return <Resolved {...props} className={className} />;
    };

    (result as any).__component = Component;
    (result as any).__styles = styles;

    return result;
  };
};

function resolveClass(argCache, props, ...argSets) {
  const input = [];

  // First resolve args.
  for (const args of argSets) {
    if (args) {
      for (let i = 1; i < args.length; i++) {
        const part = args[i];

        input.push(typeof part === "function" ? part(props) : part);
      }
    }
  }

  // Next identify if the input has a cached result by walking a graph until we find the result.
  for (let i = 0; i < input.length; i++) {
    const inputValue = _scrub(input[i]);

    if (!argCache.has(inputValue)) {
      argCache.set(inputValue, new Map());
    }

    argCache = argCache.get(inputValue);
  }

  // Resolve as needed.
  if (!argCache.__retVal) {
    const cssStringArray = [];

    for (const args of argSets) {
      if (args) {
        const parts = args[0];
        for (let i = 0; i < parts.length; i++) {
          cssStringArray.push(parts[i]);
          if (i < parts.length - 1) {
            const inputValue = input.shift();
            if (inputValue !== undefined) {
              cssStringArray.push(inputValue);
            }
          }
        }
      }
    }
    argCache.__retVal = css(cssStringArray.join(""));
  }
  
  return argCache.__retVal;
}

function _scrub(input) {
  switch (input) {
    case undefined:
      return "__undefined__";
    case null:
      return "__null__";
    default:
      return input;
  }
}

const createFactory = type => {
  (styled as any)[type] = styled(type);
};

ElementTypes.forEach(type => (styled[type] = styled(type)));
