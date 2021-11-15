import * as React from "react";
import { Icon } from "../Icon";
import cx from "classnames";
import { create, createPure } from "./create";
import { Button } from "./Button";
import { Header } from "./Header";
import { DetailsHeader } from "./DetailsHeader";
import { Items, Columns } from "../testData";
import { CommandBar } from "./CommandBar";
import { Viewport } from "../virtualizedList/Viewport";
import { FixedList } from "../virtualizedList/FixedList";
import { DetailsRow } from "./DetailsRow";

import "./App.scss";

const AppFrame = create("AppFrame");
const Search = create("Search");
const SideNav = create("SideNav", "div");
const SideNavButton = createPure("SideNavButton", Button);
const ItemView = create("ItemView");
const Breadcrumb = create("Breadcrumb");
const Folders = create("Folders");
const FolderButton = create("FolderButton", Button);

const FolderImage = createPure("FolderImage", () => (
  <div style={{ position: "relative", alignSelf: "center" }}>
    <img
      alt=""
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_backplate.svg"
    />
    <img
      alt=""
      style={{ position: "absolute", left: 0, top: 0 }}
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_frontplate_thumbnail.svg"
    />
  </div>
));

const FolderTitle = createPure("FolderTitle");
const FolderDate = createPure("FolderDate");

const Folder = createPure("Folder", (props) => (
  <FolderButton>
    <FolderImage />
    <FolderTitle>{props.name}</FolderTitle>
    <FolderDate>{props.date}</FolderDate>
  </FolderButton>
));

export const App = (props) => {
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

        <Viewport as={ItemView} style={{ padding: 20 }}>
          <Breadcrumb>Files</Breadcrumb>

          {isListView ? (
            <>
              <DetailsHeader columns={Columns} />

              <FixedList
                items={Items}
                itemAs={DetailsRow}
                itemSize={{ height: 40 }}
                itemProps={{ columns: Columns }}
              />
            </>
          ) : (
            <Folders>
              {Items.map((item) => (
                <Folder key={item.name} {...item} />
              ))}
            </Folders>
          )}
        </Viewport>
      </AppFrame>
      {props.children}
    </>
  );
};
