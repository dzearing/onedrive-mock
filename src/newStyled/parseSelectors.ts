const DefaultSelector = "&";

export type SelectorsMap = {
  [key: string]: {
    [key: string]: string;
  };
};

export function parseSelectors(rules: string): SelectorsMap {
  const selectors = {};

  let tokenIndex = 0;
  let selector = DefaultSelector;
  let name = "";
  let remainingString = rules;
  let i = 0;

  while (i < 100 && rules.length > 0 && tokenIndex > -1) {
    i++;
    // Feels bad
    tokenIndex = rules.search(/{|;|}/);

    const section = rules.slice(0, tokenIndex).trim();

    switch (rules[tokenIndex]) {
      case ";":
        // Name value pair
        const pair = section.split(":");
        const name = pair[0].trim();
        const value = pair[1].trim();
        selectors[selector] = selectors[selector] || {};
        selectors[selector][name] = value;
        break;

      case "{":
        // Start of new selector
        const newSelector = section.slice(0, section.length);

        selector = (newSelector.indexOf("&") === -1) ? (selector + newSelector) : newSelector;                 
        break;

      case "}":
        selector = DefaultSelector;
        break;
    }

    rules = rules.substring(tokenIndex + 1);
  }

if (i === 100) {
  console.log('WHAT');
}
  return selectors;
}
