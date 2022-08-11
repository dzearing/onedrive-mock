import * as React from "react";
import { Icon } from "./Icon";

export const FolderIcon = () => (
  <img
    alt=""
    src="https://az742526.vo.msecnd.net/files/odsp-next-release-odc_2019-03-15_20190322.001/odsp-media/images/itemtypes/20/folder.svg"
    style={{ width: 20, height: 20 }}
  />
);

export const Columns = [
  {
    key: "type",
    style: {
      minWidth: 32,
      maxWidth: 32,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    } as React.CSSProperties,
    children: <Icon iconName="Page" />,
  },
  {
    key: "nameRow",
    style: {
      flexGrow: 1,
      minWidth: 150,
      maxWidth: 400,
    },
    canSort: true,
    children: (
      <>
        <span>Name</span>
        <Icon iconName="SortUp" />
        <Icon iconName="ChevronDownSmall" style={{ fontSize: 8 }} />
      </>
    ),
  },
  {
    key: "modified",
    style: {
      minWidth: 120,
      maxWidth: 180,
    },
    canSort: true,
    children: (
      <>
        <span>Modified</span>
        <Icon iconName="ChevronDownSmall" style={{ fontSize: 8 }} />
      </>
    ),
  },
  {
    key: "sharing",
    style: {
      minWidth: 120,
      maxWidth: 180,
    },
    canSort: true,
    children: (
      <>
        <span>Sharing</span>
        <Icon iconName="ChevronDownSmall" style={{ fontSize: 8 }} />
      </>
    ),
  },
  {
    key: "size",
    style: {
      minWidth: 120,
      maxWidth: 180,
    },
    canSort: true,
    children: (
      <>
        <span>Size</span>
        <Icon iconName="ChevronDownSmall" style={{ fontSize: 8 }} />
      </>
    ),
  },
];
export const Items = Array.from({ length: 1000 }).map((item, index) => ({
  key: `item${index}`,
  type: <FolderIcon />,
  name: `Item ${index}`,
  nameRow: (
    <>
      <span style={{ fontSize: 14 }}>{`Item ${index}`} </span>
    </>
  ),
  modified: "Jan 26, 2017",
  sharing: "Sharing",
  size: `${Math.round(Math.random() * 100)} KB`,
}));
