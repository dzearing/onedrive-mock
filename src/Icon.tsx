import * as React from "react";
import { getIcon } from "@fluentui/react/lib/Styling";
import cx from "classnames";
import { IComponentProps } from "./withCSS/create";

export interface IIconProps extends IComponentProps {
  iconName: string;
}

export const Icon = React.memo<IIconProps>((props) => {
  const { iconName, ...p } = props;
  const icon = getIcon(iconName);

  if (!icon) {
    throw new Error(`No icon named ${iconName}`);
  }

  return (
    <i
      {...p}
      data-icon-name={iconName}
      className={cx(icon.subset && icon.subset.className, p.className)}
    >
      {icon.code}
    </i>
  );
});
