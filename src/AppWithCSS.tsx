import * as React from "react";
import { Icon } from "./Icon";
import { Items, Columns } from "./testData";
import cx from "classnames";
import "./App.scss";

/**
 * Helper to create components quickly.
 */
const create = (
  name,
  Base: React.ReactType = "div",
  className?: string
) => p => {
  const { as: C = Base, ...props } = p;

  return <C {...props} className={cx("ms-" + name, p.className, className)} />;
};

const AppFrame = create("AppFrame");
const Button = create("Button", "button");
const SquareButton = create("SquareButton", Button);
const Header = create("Header", "div", "ms-scheme-strong");
const ProductTitle = create("ProductTitle", "h1");
const PersonaCoin = create("PersonaCoin");
const CommandBar = create("CommandBar", "div", "ms-scheme-neutral");
const CommandButton = create("CommandButton", Button);
const Search = create("Search");
const SideNav = create("SideNav", "div", "ms-scheme-neutral");
const SideNavButton = create("SideNavButton");
const ItemView = create("ItemView");
const Breadcrumb = create("Breadcrumb");
const Folders = create("Folders");
const FolderButton = create("FolderButton", Button);

const FolderImage = () => (
  <div style={{ position: "relative", alignSelf: "center" }}>
    <img src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_backplate.svg" />
    <img
      style={{ position: "absolute", left: 0, top: 0 }}
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_frontplate_thumbnail.svg"
    />
  </div>
);

const FolderTitle = create("FolderTitle");
const FolderDate = create("FolderDate");

const Folder = props => (
  <FolderButton>
    <FolderImage />
    <FolderTitle>{props.name}</FolderTitle>
    <FolderDate>{props.date}</FolderDate>
  </FolderButton>
);

const DetailsList = create("DetailsList");

const DetailsCheckButton = props => (
  <Button {...props} style={{ position: "relative", width: 40 }}>
    <Icon iconName="CircleRing" style={{ fontSize: 18 }} />
    <Icon
      style={{
        fontSize: 16,
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: -1.5,
        transform: "translate(-50%, -50%)"
      }}
      iconName="StatusCircleCheckmark"
    />
  </Button>
);

const DetailsHeaderContainer = create("DetailsHeaderContainer");
const DetailsHeaderCell = create("DetailsHeaderCell");
const DetailsHeaderButton = create("DetailsHeaderButton", Button);
const DetailsHeader = props => (
  <DetailsHeaderContainer>
    <DetailsCheckButton size="40px" style={{ flexShrink: 0 }} />
    {Columns.map(column => (
      <DetailsHeaderCell
        key={column.key}
        as={column.canSort && DetailsHeaderButton}
        style={column.style}
      >
        {column.children}
      </DetailsHeaderCell>
    ))}
  </DetailsHeaderContainer>
);

const DetailsRowContainer = create(
  "DetailsRowContainer",
  DetailsHeaderContainer
);
const DetailsRowCell = create("DetailsRowCell", DetailsHeaderCell);

const DetailsRow = (props: { columns: any; item: any }) => (
  <DetailsRowContainer>
    <DetailsCheckButton as="span" size="40px" style={{ flexShrink: 0 }} />
    {props.columns.map(column => (
      <DetailsRowCell key={column.key} style={column.style}>
        {props.item[column.key]}
      </DetailsRowCell>
    ))}
  </DetailsRowContainer>
);

const Persona = props => <PersonaCoin>DZ</PersonaCoin>;

export const AppWithCSS = props => {
  const [isDark, setDark] = React.useState(false);
  const [isListView, setListView] = React.useState(true);

  return (
    <>
      <AppFrame
        className={cx("ms-theme", isDark ? "ms-theme-dark" : "ms-theme-light")}
      >
        <Header>
          <SquareButton>
            <Icon iconName="waffle" style={{ fontSize: 24 }} />
          </SquareButton>
          <ProductTitle>{`OneDrive (sass + css variables)`}</ProductTitle>
          <SquareButton>
            <Icon iconName="help" style={{ fontSize: 16 }} />
          </SquareButton>
          <SquareButton>
            <Persona />
          </SquareButton>
        </Header>
        <Search>
          <Icon iconName="search" />
          <span>Search everything</span>
        </Search>

        <CommandBar>
          <div style={{ display: "flex", flexGrow: 1 }}>
            <CommandButton>
              <Icon iconName="add" style={{ fontSize: 16 }} />
              <span>New</span>
              <Icon iconName="chevrondown" style={{ fontSize: 12 }} />
            </CommandButton>
            <CommandButton>
              <Icon iconName="upload" style={{ fontSize: 16 }} />
              <span>Upload</span>
              <Icon iconName="chevrondown" style={{ fontSize: 12 }} />
            </CommandButton>
            <CommandButton onClick={() => setDark(!isDark)}>
              <Icon iconName="brush" style={{ fontSize: 16 }} />
              <span>{isDark ? "Light mode" : "Dark mode"}</span>
            </CommandButton>
          </div>

          <CommandButton>
            <Icon iconName="sortlines" style={{ fontSize: 16 }} />
            <span>Sort</span>
            <Icon iconName="chevrondown" style={{ fontSize: 12 }} />
          </CommandButton>

          <CommandButton onClick={() => setListView(!isListView)}>
            <Icon
              iconName={isListView ? "list" : "viewall"}
              style={{ fontSize: 16 }}
            />
          </CommandButton>

          <CommandButton>
            <Icon iconName="info" style={{ fontSize: 16 }} />
          </CommandButton>
        </CommandBar>

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
            <DetailsList>
              <DetailsHeader />
              {Items.map(item => (
                <DetailsRow key={item.name} columns={Columns} item={item} />
              ))}
            </DetailsList>
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
