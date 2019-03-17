import { parseSelectors } from "./parseSelectors";

describe("parseSelectors", () => {
  it("can parse a basic selector", () => {
    expect(
      parseSelectors(`
        background-color: red;
        color: black;
      `)
    ).toEqual({
      "&": {
        "background-color": "red",
        color: "black"
      }
    });
  });

  it("can parse a basic selector and a hover", () => {
    expect(
      parseSelectors(`
        background-color: red;
        :hover {
          color: black;
        }
      `)
    ).toEqual({
      "&": {
        "background-color": "red"
      },
      "&:hover": {
        color: "black"
      }
    });
  });

  it("can parse a css grid template", () => {
    expect(
      parseSelectors(`
        grid-template:
          "a b" "c d";
      `)
    ).toEqual({
      "&": {
        "grid-template": '"a b" "c d"'
      }
    });
  });

  it("can resolve specificity", () => {
    expect(
      parseSelectors(`
        background: red;
        background: green;
      `)
    ).toEqual({
      "&": {
        background: "green"
      }
    });
  });

  it("can resolve specificity within selectors", () => {
    expect(
      parseSelectors(`
      :hover {
        background: red;
      }
      :hover {
        background: green;
      }
      `)
    ).toEqual({
      "&:hover": {
        background: "green"
      }
    });
  });

  // it("can deal with small differences in selectors", () => {
  //   expect(
  //     parseSelectors(`
  //     > * {
  //       background: red;
  //     }
  //     >* {
  //       background: green;
  //     }
  //     `)
  //   ).toEqual({
  //     "&>*": {
  //       background: "green"
  //     }
  //   });
  // });
});
