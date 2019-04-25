import * as React from "react";
import { getIcon } from "office-ui-fabric-react";
import { StyleHelpers } from "./StyleHelpers";
import * as ThemeVariables from "./themeVariables";

const { ThemeProvider, styled, StyleMethod } = StyleHelpers;

export const Icon = styled(props => {
  const { iconName } = props;
  const icon = getIcon(iconName);

  if (!icon) {
    throw new Error(`No icon named ${iconName}`);
  }

  return (
    <i
      {...props}
      data-icon-name={iconName}
      className={[props.className, icon.subset && icon.subset.className].join(
        " "
      )}
    >
      {icon.code}
    </i>
  );
})`
  color: var(${ThemeVariables.IconColor});
`;
