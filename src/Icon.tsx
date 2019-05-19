import * as React from "react";
import { getIcon } from "office-ui-fabric-react";

export const Icon = props => {
  const { iconName, ...p } = props;
  const icon = getIcon(iconName);

  if (!icon) {
    throw new Error(`No icon named ${iconName}`);
  }

  return (
    <i
      {...p}
      data-icon-name={iconName}
      className={icon.subset && icon.subset.className}
    >
      {icon.code}
    </i>
  );
};
