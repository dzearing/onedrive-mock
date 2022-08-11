import * as React from "react";
import { StyleHelpers } from "./StyleHelpers";
import { LightTheme, DarkTheme } from "./theme";
import { Icon } from "./Icon";
import * as ThemeVariables from "./themeVariables";
import * as Fonts from "./fonts";
import { NoWrapStyle } from "./commonStyles";
import { FontSizes } from "@fluentui/react/lib/Styling";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Toggle } from "@fluentui/react/lib/Toggle";
import { Items, Columns } from "./testData";
import { Viewport } from "./virtualizedList/Viewport";
import { FixedList } from "./virtualizedList/FixedList";

const { ThemeProvider, styled, StyleMethod } = StyleHelpers;

const AppFrame = styled.div`
  ${(props) => props.theme.default}
  ${Fonts.BodyFont}
  display: grid;
  grid-template-rows: 50px 44px auto;
  grid-template-columns: 228px auto;
  grid-template-areas:
    "header header"
    "search commands"
    "nav content";
  width: 100vw;
  height: 100vh;
`;
AppFrame.displayName = "AppFrame";

const flexGap = (gap) => `
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
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
`;

SquareButton.displayName = "SquareButton";

const Header = styled("div", { displayName: "Header" })`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props) => props.theme.strong}
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
  ${(props) => props.theme.default}

  grid-area: commands;
  display: flex;
  padding: 0 20px;
`;

const CommandButton = styled(Button)`
  height: 44px;
  padding: 0 12px;
  background-color: transparent;

  & > [data-icon-name]:first-child {
    color: var(${ThemeVariables.IconColor});
  }

  ${flexGap("8px")}
`;

const UserName = styled.div`
  ${(props) => props.theme.neutral}
  font-size: 14px;
  font-weight: 600;
  grid-area: search;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid var(${ThemeVariables.BorderColor});

  & > * {
    margin: 0 8px;
  }
`;

const SideNav = styled.div`
  ${(props) => props.theme.neutral}
  grid-area: nav;
  display: flex;
  padding: 16px 0;
  border-right: 1px solid var(${ThemeVariables.BorderColor});
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
`;

const SideNavButton = styled(Button, { displayName: "SideNavButton" })`
  display: flex;
  gap: 12px;
  justify-content: start;
  font-weight: ${(p) => (p.selected ? 600 : 400)};
  font-size: 14px;
  padding: 0 16px;
  height: 36px;
  background-color: ${(p) =>
    p.selected ? `var(${ThemeVariables.BackgroundHoverColor})` : "transparent"};

  :hover {
    background-color: var(${ThemeVariables.BackgroundHoverColor});
  }

  :active {
    background-color: var(${ThemeVariables.BackgroundPressedColor});
  }
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

const TitleArea = styled.div`
  padding: 32px 32px 32px;
`;

const Breadcrumb = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 4px;
  line-height: 36px;
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
);

const FolderTitle = styled.div`
  ${NoWrapStyle}
`;

const FolderDate = styled.div`
  ${NoWrapStyle}
  font-size: 12px;

  color: var(${ThemeVariables.SubTextColor});
`;

const Folder = (props) => (
  <FolderButton>
    <FolderImage />
    <FolderTitle>{props.name}</FolderTitle>
    <FolderDate>{props.date}</FolderDate>
  </FolderButton>
);

const DetailsCheckButton = (props) => (
  <Button {...props} style={{ position: "relative", width: 40 }}>
    <Icon iconName="CircleRing" style={{ fontSize: 18 }} />
    <Icon
      style={{
        fontSize: 16,
        position: "absolute",
        left: "50%",
        top: "50%",
        marginTop: -1.5,
        transform: "translate(-50%, -50%)",
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
  gap: 4px;
  justify-content: start;
  font-size: ${FontSizes.medium};

  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 8px;

  ${NoWrapStyle}
`;

const DetailsHeaderButton = styled(Button)`
  display: flex;
  flex-grow: 1;
  gap: 4px;
  justify-content: start;
  font-size: ${FontSizes.small};
`;

const DetailsHeader = (props) => (
  <DetailsHeaderContainer>
    <DetailsCheckButton size="40px" style={{ flexShrink: 0 }} />
    {Columns.map(({canSort, ...column}) => (
      <DetailsHeaderCell
        {...column}
        as={canSort && DetailsHeaderButton}
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

const DetailsRowCell = styled(DetailsHeaderCell)`
  font-weight: normal;
`;

const DetailsRow = (props) => {
  const { item, index, columns, ...rest } = props;

  return (
    <DetailsRowContainer {...rest}>
      <DetailsCheckButton as="span" size="40px" style={{ flexShrink: 0 }} />
      {columns.map((column, i) => (
        <DetailsRowCell key={i} style={column.style}>
          {item[column.key]}
        </DetailsRowCell>
      ))}
    </DetailsRowContainer>
  );
};

const Persona = (props) => <PersonaCoin>DZ</PersonaCoin>;

export const App = (props) => {
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
              <Persona/>
            </SquareButton>
          </Header>

          <UserName>David Zearing</UserName>

          <div
            style={{ background: "white", borderBottom: "1px solid #edebe9" }}
          >
            <CommandBar>
              <div style={{ display: "flex", flexGrow: 1 }}>
                <CommandButton>
                  <Icon iconName="add" style={{ fontSize: 16 }} />
                  <span>New</span>
                  <Icon iconName="chevrondownsmall" style={{ fontSize: 8 }} />
                </CommandButton>
                <CommandButton>
                  <Icon iconName="upload" style={{ fontSize: 16 }} />
                  <span>Upload</span>
                  <Icon iconName="chevrondownsmall" style={{ fontSize: 8 }} />
                </CommandButton>
                <CommandButton onClick={() => setDark(!isDark)}>
                  <Icon iconName="brush" style={{ fontSize: 16 }} />
                  <span>{isDark ? "Light mode" : "Dark mode"}</span>
                </CommandButton>
              </div>

              <CommandButton>
                <Icon iconName="sortlines" style={{ fontSize: 16 }} />
                <span>Sort by</span>
                <Icon iconName="chevrondownsmall" style={{ fontSize: 8 }} />
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
          </div>

          <SideNav>
            <SideNavButton selected>
              <Icon iconName="FabricFolder" style={{ fontSize: 16 }} />
              <span>My files</span>
            </SideNavButton>
            <SideNavButton>
              <Icon iconName="History" style={{ fontSize: 16 }} />
              <span>Recent</span>
            </SideNavButton>
            <SideNavButton>
              <Icon iconName="Photo2" style={{ fontSize: 16 }} />
              <span>Photos</span>
            </SideNavButton>
            <SideNavButton>
              <Icon iconName="People" style={{ fontSize: 16 }} />
              <span>Shared</span>
            </SideNavButton>
            <SideNavButton>
              <Icon iconName="RecycleBin" style={{ fontSize: 16 }} />
              <span>Recycle</span>
            </SideNavButton>
          </SideNav>

          <Viewport as={ItemView}>
            <TitleArea>
              <Breadcrumb>My files</Breadcrumb>
            </TitleArea>

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
                {Items.map((item) => (
                  <Folder key={item.name} {...item} />
                ))}
              </Folders>
            )}
          </Viewport>
        </AppFrame>
      </>
    </ThemeProvider>
  );
};
