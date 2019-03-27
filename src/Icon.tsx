import * as React from "react";
import { getIcon } from "office-ui-fabric-react";

export const Icon = props => {
  const { iconName } = props;
  const icon = getIcon(iconName);

  return (
    <i data-icon-name={iconName} className={icon.subset.className}>
      {icon.code}
    </i>
  );
};
