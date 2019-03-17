import * as ThemeVariables from "./themeVariables";

const ApplyThemeStyle = `
  transition: background-color .1s linear;
  background-color: var(${ThemeVariables.BackgroundColor});
  color: var(${ThemeVariables.TextColor});
`;

const LightScheme = `
  ${ThemeVariables.BackgroundColor}: white;
  ${ThemeVariables.BackgroundHoverColor}: #EEE;
  ${ThemeVariables.BackgroundPressedColor}: #CCC;
  ${ThemeVariables.FocusBorderColor}: black;
  ${ThemeVariables.SubTextColor}: #888;
  ${ThemeVariables.TextColor}: #333;
  ${ThemeVariables.IconColor}: rgb(16, 110, 190);
  ${ThemeVariables.BorderColor}: #eaeaea;
  ${ApplyThemeStyle}
`;

const StrongScheme = `
  ${ThemeVariables.BackgroundColor}: #0078d4;
  ${ThemeVariables.BackgroundHoverColor}: #2b88d8;
  ${ThemeVariables.BackgroundPressedColor}: #71afe5;
  ${ThemeVariables.FocusBorderColor}: #c7e0f4;
  ${ThemeVariables.SubTextColor}: #888;
  ${ThemeVariables.TextColor}: #fff;
  ${ThemeVariables.IconColor}: #ff;
  ${ThemeVariables.BorderColor}: #eaeaea;
  ${ApplyThemeStyle}
`;

const DarkScheme = `
  ${ThemeVariables.BackgroundColor}: #484644;
  ${ThemeVariables.BackgroundHoverColor}: #323130;
  ${ThemeVariables.BackgroundPressedColor}: #222120;
  ${ThemeVariables.FocusBorderColor}: white;
  ${ThemeVariables.SubTextColor}: #aaa;
  ${ThemeVariables.TextColor}: white;
  ${ThemeVariables.IconColor}: white;
  ${ThemeVariables.BorderColor}: #585654;
  ${ApplyThemeStyle}
`;

const DarkerScheme = `
  ${ThemeVariables.BackgroundColor}: #383634;
  ${ThemeVariables.BackgroundHoverColor}: #222120;
  ${ThemeVariables.BackgroundPressedColor}: #121110;
  ${ThemeVariables.FocusBorderColor}: white;
  ${ThemeVariables.SubTextColor}: #aaa;
  ${ThemeVariables.TextColor}: white;
  ${ThemeVariables.IconColor}: white;
  ${ThemeVariables.BorderColor}: #585654;
  ${ApplyThemeStyle}
`;

const NeutralScheme = `
  ${ThemeVariables.BackgroundColor}: rgb(244,244,244);  
  ${ThemeVariables.BackgroundHoverColor}: rgb(234, 234, 234);
  ${ThemeVariables.BackgroundPressedColor}: rgb(218, 218, 218);
  ${ThemeVariables.FocusBorderColor}: black;
  ${ThemeVariables.SubTextColor}: #666;
  ${ThemeVariables.TextColor}: black;
  ${ThemeVariables.IconColor}: rgb(16, 110, 190);
  ${ThemeVariables.BorderColor}: rgb(244,244,244);
  ${ApplyThemeStyle}
`;

export const LightTheme = {
  default: LightScheme,
  strong: StrongScheme,
  neutral: NeutralScheme,
  dark: DarkScheme
};

export const DarkTheme = {
  default: DarkScheme,
  strong: DarkerScheme,
  neutral: DarkScheme,
  dark: DarkerScheme
};
