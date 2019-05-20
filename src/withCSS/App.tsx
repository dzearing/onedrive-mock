import * as React from "react";
import { Icon } from "../Icon";
import cx from "classnames";
import { createPure } from "./create";
import { Button } from "./Button";
import { Header } from "./Header";
import { DetailsList } from "./DetailsList";
import { Items, Columns } from "../testData";
import { CommandBar } from "./CommandBar";

import "./App.scss";

const AppFrame = createPure("AppFrame");
const Search = createPure("Search");
const SideNav = createPure("SideNav", "div");
const SideNavButton = createPure("SideNavButton", Button);
const ItemView = createPure("ItemView");
const Breadcrumb = createPure("Breadcrumb");
const Folders = createPure("Folders");
const FolderButton = createPure("FolderButton", Button);

const FolderImage = () => (
  <div style={{ position: "relative", alignSelf: "center" }}>
    <img src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_backplate.svg" />
    <img
      style={{ position: "absolute", left: 0, top: 0 }}
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_frontplate_thumbnail.svg"
    />
  </div>
);

const FolderTitle = createPure("FolderTitle");
const FolderDate = createPure("FolderDate");

const Folder = props => (
  <FolderButton>
    <FolderImage />
    <FolderTitle>{props.name}</FolderTitle>
    <FolderDate>{props.date}</FolderDate>
  </FolderButton>
);

export const App = props => {
  const [isDark, setDark] = React.useState(false);
  const [isListView, setListView] = React.useState(true);

  return (
    <>
      <AppFrame
        className={cx("ms-theme", isDark ? "ms-theme-dark" : "ms-theme-light")}
      >
        <Header />

        <Search>
          <Icon iconName="search" />
          <span>Search everything</span>
        </Search>

        <CommandBar
          isDark={isDark}
          setDark={setDark}
          isListView={isListView}
          setListView={setListView}
        />

        <SideNav>
          <SideNavButton>Files</SideNavButton>
          <SideNavButton>Recent</SideNavButton>
          <SideNavButton>Photos</SideNavButton>
          <SideNavButton>Shared</SideNavButton>
          <SideNavButton>Recycle bin</SideNavButton>
        </SideNav>

        <ItemView>
          <Breadcrumb>Files</Breadcrumb>

          {isListView ? (
            <DetailsList items={Items} columns={Columns} />
          ) : (
            <Folders>
              {Items.map(item => (
                <Folder key={item.name} {...item} />
              ))}
            </Folders>
          )}
        </ItemView>
      </AppFrame>
      {props.children}
    </>
  );
};
