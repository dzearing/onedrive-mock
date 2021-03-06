import * as React from "react";
import { StyleHelpers } from "./StyleHelpers";
import { LightTheme, DarkTheme } from "./theme";
import { Icon } from "./Icon";
import * as ThemeVariables from "./themeVariables";
import * as Fonts from "./fonts";
import { NoWrapStyle } from "./commonStyles";
import { FontSizes } from "@uifabric/styling";
import { Items, Columns } from "./testData";
import { Viewport } from "./virtualizedList/Viewport";
import { FixedList } from "./virtualizedList/FixedList";

const { ThemeProvider, styled, StyleMethod } = StyleHelpers;

const AppFrame = styled.div`
  ${props => props.theme.default}
  ${Fonts.BodyFont}
  display: grid;
  grid-template-rows: 50px 40px auto;
  grid-template-columns: 207px auto;
  grid-template-areas:
    "header header"
    "search commands"
    "nav content";
  width: 100vw;
  height: 100vh;
`;
AppFrame.displayName = "AppFrame";

const flexGap = gap => `
> * {
  margin-left: ${gap};
}
> *:first-child {
  margin-left: 0;
}
`;

const Button = styled.button`
  ${Fonts.BodyFont}
  ${NoWrapStyle}
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: inherit;
  border: none;
  color: var(${ThemeVariables.TextColor});

  :hover {
    background-color: var(${ThemeVariables.BackgroundHoverColor});
  }

  :active {
    background-color: var(${ThemeVariables.BackgroundPressedColor});
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 1px var(${ThemeVariables.FocusBorderColor}) inset;
  }
`;

Button.displayName = "Button";

const SquareButton = styled(Button)`
  width: ${props => props.size || "50px"};
  height: ${props => props.size || "50px"};
`;

SquareButton.displayName = "SquareButton";

const Header = styled("div", { displayName: "Header" })`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${props => props.theme.strong}
`;

const ProductTitle = styled.h1`
  ${Fonts.SemiBoldFont}
  padding: 0 20px;
  font-size: 16px;
  flex-grow: 1;
`;
ProductTitle.displayName = "ProductTitle";

const PersonaCoin = styled.div`
  flex-shrink: 0;
  background: rgb(126, 56, 120);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CommandBar = styled.div`
  ${props => props.theme.neutral}

  grid-area: commands;
  display: flex;
  padding: 0 20px;
`;

const CommandButton = styled(Button)`
  height: 40px;
  padding: 0 12px;

  & > [data-icon-name]:first-child {
    color: var(${ThemeVariables.IconColor});
  }

  ${flexGap("8px")}
`;

const Search = styled.div`
  grid-area: search;
  display: flex;
  align-items: center;
  padding: 0 8px;
  border-bottom: 1px solid var(${ThemeVariables.BorderColor});

  & > * {
    margin: 0 8px;
  }
`;

const SideNav = styled.div`
  grid-area: nav;
  display: flex;
  padding: 20px 0;
  border-right: 1px solid var(${ThemeVariables.BorderColor});
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

const SideNavButton = styled(Button, { displayName: "SideNavButton" })`
  justify-content: start;
  font-weight: 100;
  font-size: 18px;
  padding: 0 16px;
  height: 36px;
`;

const ItemView = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding: 24px 32px;
  overflow: auto;

  & > * {
    margin-top: 20px;
  }

  & > *:first-child {
    margin-top: 0;
  }
`;

const Breadcrumb = styled.div`
  font-size: 28px;
  font-weight: 100;
`;

const Folders = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-min-cells: 1000000;
  grid-gap: 8px;
`;

const FolderButton = styled(Button)`
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: center;
  border-radius: 3px;

  &:hover {
    background: var(${ThemeVariables.BackgroundHoverColor});
  }
`;

const FolderImage = () => (
  <div style={{ position: "relative", alignSelf: "center" }}>
    <img src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_backplate.svg" />
    <img
      style={{ position: "absolute", left: 0, top: 0 }}
      src="https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/foldericons/folder-small_frontplate_thumbnail.svg"
    />
  </div>
);

const FolderTitle = styled.div`
  ${NoWrapStyle}
`;

const FolderDate = styled.div`
  ${NoWrapStyle}
  font-size: 12px;

  color: var(${ThemeVariables.SubTextColor});
`;

const Folder = props => (
  <FolderButton>
    <FolderImage />
    <FolderTitle>{props.name}</FolderTitle>
    <FolderDate>{props.date}</FolderDate>
  </FolderButton>
);

const DetailsList = styled.div``;

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

const DetailsHeaderContainer = styled.div`
  display: flex;
  height: 32px;
  line-height: 32px;
  align-items: stretch;
  border-bottom: 1px solid var(${ThemeVariables.BorderColor});
`;

const DetailsHeaderCell = styled.div`
  display: flex;
  justify-content: start;
  font-size: ${FontSizes.small};
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 8px;

  & > * {
    margin-left: 4px;
  }
  & > *:first-child {
    margin-left: 0;
  }
  ${NoWrapStyle}
`;

const DetailsHeaderButton = styled(Button)`
  justify-content: start;
  font-size: ${FontSizes.small};
`;

const DetailsHeader = props => (
  <DetailsHeaderContainer>
    <DetailsCheckButton size="40px" style={{ flexShrink: 0 }} />
    {Columns.map(column => (
      <DetailsHeaderCell
        {...column}
        as={column.canSort && DetailsHeaderButton}
      />
    ))}
  </DetailsHeaderContainer>
);

const DetailsRowContainer = styled(DetailsHeaderContainer)`
  width: 100%;
  height: 42px;
  line-height: 42px;

  :hover {
    background: var(${ThemeVariables.BackgroundHoverColor});
  }
  :active {
    background: var(${ThemeVariables.BackgroundPressedColor});
  }
`;

const DetailsRowCell = styled(DetailsHeaderCell)``;

const DetailsRow = props => {
  const { item, index, columns, ...rest } = props;

  return (
    <DetailsRowContainer {...rest}>
      <DetailsCheckButton as="span" size="40px" style={{ flexShrink: 0 }} />
      {columns.map(column => (
        <DetailsRowCell style={column.style}>{item[column.key]}</DetailsRowCell>
      ))}
    </DetailsRowContainer>
  );
};

const Persona = props => <PersonaCoin>DZ</PersonaCoin>;

export const App = props => {
  const [isDark, setDark] = React.useState(false);
  const [isListView, setListView] = React.useState(true);

  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <>
        <AppFrame>
          <Header>
            <SquareButton>
              <Icon iconName="waffle" style={{ fontSize: 24 }} />
            </SquareButton>
            <ProductTitle>{`OneDrive (${StyleMethod})`}</ProductTitle>
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

          <Viewport as={ItemView}>
            <Breadcrumb>Files</Breadcrumb>

            {isListView ? (
              <>
                <DetailsHeader />
                <FixedList
                  items={Items}
                  itemProps={{ columns: Columns }}
                  itemSize={{ height: 40 }}
                  itemAs={DetailsRow}
                />
              </>
            ) : (
              <Folders>
                {Items.map(item => (
                  <Folder key={item.name} {...item} />
                ))}
              </Folders>
            )}
          </Viewport>
        </AppFrame>
        {props.children}
      </>
    </ThemeProvider>
  );
};
