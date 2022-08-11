import * as React from "react";
import cx from "classnames";

export interface IComponentProps extends React.HTMLAttributes<any> {
  as?: React.FC<IComponentProps>;
  className?: string;
}

/**
 * Helper to create components quickly.
 */
export const create = <TProps extends IComponentProps = IComponentProps>(
  name,
  Base: React.ReactType = "div",
  defaultProps: TProps = {} as TProps
): React.FC<TProps & IComponentProps> => {
  const component = (p: IComponentProps) => {
    const { as: asValue = Base, ...props } = p;
    const Comp = asValue as React.FC<TProps & IComponentProps>;
    
    return (
      <Comp
        {...defaultProps}
        {...props}
        className={cx("ms-" + name, p.className, defaultProps.className)}
      />
    );
  };

  component.displayName = name;

  return component;
};

export const createPure = <TProps extends IComponentProps = IComponentProps>(
  name,
  Base: React.ReactType = "div",
  defaultProps: any = {}
): React.FC<TProps> => React.memo(create<TProps>(name, Base, defaultProps));
