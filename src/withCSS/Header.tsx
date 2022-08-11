import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Button } from "./Button";
import { Icon } from "../Icon";
import { Persona } from "./Persona";

import "./Header.global.scss";

const SquareButton = create("SquareButton", Button);
const WaffleIcon = createPure<{}>("WaffleIcon", Icon, {
  iconName: "waffleoffice365"
});
const HelpIcon = createPure("HelpIcon", Icon, { iconName: "help" });
const ProductTitle = createPure("ProductTitle", "h1");

export const Header = createPure<IComponentProps>(
  "Header",
  p => (
    <div {...p}>
      <SquareButton>
        <WaffleIcon />
      </SquareButton>
      <ProductTitle>{`OneDrive (sass + css variables)`}</ProductTitle>
      <SquareButton>
        <HelpIcon />
      </SquareButton>
      <SquareButton>
        <Persona />
      </SquareButton>
    </div>
  ),
  { className: "ms-scheme-strong" }
);
