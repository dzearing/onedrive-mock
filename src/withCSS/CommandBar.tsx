import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Button } from "./Button";
import cx from "classnames";
import { Icon } from "../Icon";

import "./CommandBar.scss";

interface ICommandButtonProps extends IComponentProps {
  iconName: string;
  text?: string;
  isMenu?: boolean;
  onClick?: () => void;
}

const IconSmallSize = { fontSize: 12 };
const IconLargeSize = { fontSize: 16 };

const CommandButton = createPure<ICommandButtonProps>(
  "CommandButton",
  props => {
    const { as: C = Button, iconName, text, isMenu, ...p } = props;

    return (
      <C {...p}>
        {iconName && <Icon iconName={iconName} style={IconLargeSize} />}
        {text && <span>{text}</span>}
        {isMenu && <Icon iconName="chevrondown" style={IconSmallSize} />}
      </C>
    );
  }
);

export interface ICommandBarProps extends IComponentProps {
  isDark: boolean;
  setDark: (val: boolean) => void;
  isListView: boolean;
  setListView: (val: boolean) => void;
}

export const CommandBar = createPure<ICommandBarProps>("CommandBar", props => {
  const {
    as: C = "div",
    className,
    isDark,
    setDark,
    isListView,
    setListView,
    ...p
  } = props;

  return (
    <C {...p} className={cx(className, "ms-scheme-neutral")}>
      <div style={{ display: "flex", flexGrow: 1 }}>
        <CommandButton iconName="add" text="New" isMenu />
        <CommandButton iconName="upload" text="Upload" isMenu />
        <CommandButton
          iconName="brush"
          text={isDark ? "Light mode" : "Dark mode"}
          onClick={() => setDark(!isDark)}
        />
      </div>

      <CommandButton iconName="sortlines" text="Sort" isMenu />
      <CommandButton
        iconName={isListView ? "list" : "viewall"}
        onClick={() => setListView(!isListView)}
      />
      <CommandButton iconName="info" />
    </C>
  );
});
