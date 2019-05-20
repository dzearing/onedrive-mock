import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Check } from "./Check";
import { Button } from "./Button";

import "./DetailsHeader.scss";

const DetailsHeaderContainer = create("DetailsHeaderContainer");
const DetailsHeaderCell = createPure("DetailsHeaderCell");
const DetailsHeaderButton = createPure("DetailsHeaderButton", Button);

interface IDetailsHeaderProps extends IComponentProps {
  columns: any[];
}

export const DetailsHeader = create<IDetailsHeaderProps>(
  "DetailsHeader",
  props => {
    const { columns, ...p } = props;

    return (
      <DetailsHeaderContainer {...p}>
        <Check on />
        {columns.map(column => (
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
  }
);
