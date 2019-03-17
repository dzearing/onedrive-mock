import { getStyleElement } from "./getStyleElement";
import { parseSelectors } from "./parseSelectors";

const _rules: {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
} = {};

export function css(rulesString) {
  const classNames = [];
  const selectors = parseSelectors(rulesString);
  // console.log(rulesString, selectors);
  for (const selector in selectors) {
    const rules = selectors[selector];

    for (let name in rules) {
      const value = rules[name];

      classNames.push(
        _findClass(selector, name, value) || _addClass(selector, name, value)
      );
    }
  }

  return classNames.join(" ");
}

function _findClass(selector, name, value) {
  const names = (_rules[selector] = _rules[selector] || {});
  const values = (names[name] = names[name] || {});

  return values[value];
}

function _addClass(selector: string, name: string, value: string): string {
  const className = (_rules[selector][name][value] = getClassName());

  _insertRule(selector.replace(/&/g, "." + className), name, value);

  return className;
}

let _id = 0;

function _insertRule(selector, name, value) {
  const style = getStyleElement();
  const rule = `${selector}{${name}:${value};}`;

  (style.sheet as any).insertRule(rule);
}

const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let _counter = 0;

function getClassName(): string {
  return "a" + _counter++;
}
