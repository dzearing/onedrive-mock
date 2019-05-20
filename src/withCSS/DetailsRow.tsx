import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Check } from "./Check";

import "./DetailsRow.scss";

export interface IDetailsRowProps extends IComponentProps {
  columns: any[];
  item: any;
}

const DetailsRowCell = create("DetailsRowCell");

export const DetailsRow = createPure<IDetailsRowProps>("DetailsRow", props => {
  const { item, columns, ...p } = props;

  return (
    <span {...p}>
      <Check />

      {props.columns.map(column => (
        <DetailsRowCell key={column.key} style={column.style}>
          {props.item[column.key]}
        </DetailsRowCell>
      ))}
    </span>
  );
});
