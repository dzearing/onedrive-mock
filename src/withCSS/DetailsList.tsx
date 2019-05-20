import * as React from "react";
import { createPure, create, IComponentProps } from "./create";
import { Items, Columns } from "../testData";
import { Icon } from "../Icon";
import { Button } from "./Button";
import { Check } from "./Check";
import { DetailsRow } from "./DetailsRow";
import { DetailsHeader } from "./DetailsHeader";

import "./DetailsList.scss";

export interface IDetailsListProps extends IComponentProps {
  items: any[];
  columns: any[];
}

export const DetailsList = createPure<IDetailsListProps>(
  "DetailsList",
  props => {
    const { items, columns, as: C = "div", ...p } = props;

    return (
      <C {...p}>
        <DetailsHeader columns={columns} />

        {items.map(item => (
          <DetailsRow key={item.key} columns={columns} item={item} />
        ))}
      </C>
    );
  }
);
