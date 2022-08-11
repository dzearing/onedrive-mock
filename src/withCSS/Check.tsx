import { createPure, IComponentProps } from "./create";
import { Icon } from "../Icon";

import "./Check.global.scss";

export interface ICheckProps extends IComponentProps {
  on?: boolean;
}

const CheckCircleIcon = createPure("CheckCircleIcon", Icon, {
  iconName: "CircleRing",
});

const CheckIcon = createPure("CheckIcon", Icon, {
  iconName: "StatusCircleCheckmark",
});

export const Check = createPure<ICheckProps>("Check", (props) => {
  const { on, as: C = "div", ...p } = props;

  return (
    <C {...p}>
      <CheckCircleIcon />
      {on && <CheckIcon />}
    </C>
  );
});
