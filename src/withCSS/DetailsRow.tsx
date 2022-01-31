import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Check } from "./Check";

import "./DetailsRow.global.scss";

export interface IDetailsRowProps extends IComponentProps {
  columns: any[];
  item: any;
}

const DetailsRowCell = create("DetailsRowCell");

export const DetailsRow = createPure<IDetailsRowProps>("DetailsRow", p => {
  const { item, columns, ...rest } = p;

  return (
    <span {...rest}>
      <Check />

      {columns.map(column => (
        <DetailsRowCell key={column.key} style={column.style}>
          {item[column.key]}
        </DetailsRowCell>
      ))}
    </span>
  );
});
