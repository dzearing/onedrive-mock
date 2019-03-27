import * as React from "react";
import { render } from "react-dom";
import { initializeIcons, Icon, FocusZone } from "office-ui-fabric-react";
import { ThemeProvider, styled, parseStyles } from "./newStyled/index";
import { LightTheme, DarkTheme } from "./theme";
import * as ThemeVariables from "./themeVariables";
import * as Fonts from "./fonts";
import { NoWrapStyle } from "./commonStyles";

import "./styles.css";

initializeIcons();
// parseStyles();

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

  > * {
    margin: 0 4px;
  }
`;

const SquareButton = styled(Button)`
  width: 50px;
  height: 50px;
`;

const Header = styled.div`
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
`;

const CommandButton = styled(Button)`
  height: 40px;
  padding: 0 12px;

  & > [data-icon-name]:first-child {
    color: var(${ThemeVariables.IconColor});
  }
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

  & > *:first-child {
    margin: 0;
  }

  & > * {
    margin: 20px 0;
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

const Persona = props => <PersonaCoin>DZ</PersonaCoin>;

const TestData = Array.from({ length: 200}).map((item, index) =>({ name: `Item ${index}`, date: 'Jan 26, 2017' }));

const App = () => {
  const [isDark, setDark] = React.useState(false);

  return (
    <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
      <AppFrame>
        <Header>
          <SquareButton>
            <Icon iconName="waffle" style={{ fontSize: 24 }} />
          </SquareButton>
          <ProductTitle>OneDrive (using new merge-styles proto)</ProductTitle>
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

          <CommandButton>
            <Icon iconName="viewall" style={{ fontSize: 16 }} />
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

          <Folders as={FocusZone} style={{ cellCount: 1200000 }}>
            { TestData.map(item => <Folder key={item.name} {...item}/> )}
          </Folders>
        </ItemView>
      </AppFrame>
    </ThemeProvider>
  );
};

performance.mark("render-start");

const rootElement = document.getElementById("root");
render(<App />, rootElement);

performance.mark("render-end");
performance.measure("render", "render-start", "render-end");
