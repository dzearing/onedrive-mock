import { getStyleElement } from "./getStyleElement";
import { parseSelectors } from "./parseSelectors";

let _rules: {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
} = {};

export function css(rulesString) {
  const classNames = [];
  const selectors = parseSelectors(rulesString);

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

function _insertRule(selector, name, value) {
  const style = getStyleElement();
  const rule = `${selector}{${name}:${value};}`;

  console.log("inserted", { selector, name, value });

  style.sheet.insertRule(rule, style.sheet.rules.length);
}

const Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let _counter = 0;

function getClassName(): string {
  return "a" + _counter++;
}

document.getRules = () => {
  const ruleStrings = [];

  ruleStrings.push('<style data-ms="1">');

  const styles = document.querySelectorAll("style[data-ms]");

  for (const style of styles) {
    const rules = style.sheet.rules;

    for (const rule of rules) {
      ruleStrings.push(rule.cssText);
    }
  }

  ruleStrings.push("</style>");

  ruleStrings.push('<script data-ms-hydrate="1">');
  ruleStrings.push(JSON.stringify({ rules: _rules, counter: _counter }));
  ruleStrings.push("</script>");

  return ruleStrings.join("\n");
};

export const parseStyles = () => {
  const styles = document.querySelector("[data-ms-hydrate]");

  if (styles) {
    const { rules, counter } = JSON.parse(styles.innerHTML);

    _rules = rules;
    _counter = counter;
  }

  // for (const style of styles) {
  //   const rules = style.sheet.rules;

  //   for (const rule of rules) {
  //     const ruleString = rule.cssText;
  //     const firstIndex = ruleString.indexOf("{");
  //     const secondIndex = ruleString.indexOf(":");
  //     const thirdIndex = ruleString.indexOf(";");

  //     let selector = ruleString.substring(0, firstIndex).trim();
  //     const className = selector.match(/\.a[0-9]+/g)[0].substring(1);
  //     selector = selector.replace(/\.a[0-9]+/g, "&");
  //     const name = ruleString.substring(firstIndex + 1, secondIndex).trim();
  //     const value = ruleString.substring(secondIndex + 1, thirdIndex).trim();

  //     if (selector && name && value) {
  //       _rules[selector] = _rules[selector] || {};
  //       _rules[selector][name] = _rules[selector][name] || {};

  //       if (_rules[selector][name][value] === undefined) {
  //         _rules[selector][name][value] = className;
  //         _counter++;
  //         console.log("cache", { selector, name, value, className });
  //       }
  //     }
  //   }
  // }
};
