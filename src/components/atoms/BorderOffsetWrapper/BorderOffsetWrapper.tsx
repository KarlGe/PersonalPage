import { cx } from "linaria";
import React, { ReactNode } from "react";
import { offsetBorderClassName } from "../../Layout/global.linaria";

type Props = { children: ReactNode; filled?: boolean };

function BorderOffsetWrapper({ children, filled }: Props) {
  return (
    <div className={cx(offsetBorderClassName, filled && "filled")}>
      {children}
    </div>
  );
}

BorderOffsetWrapper.defaultProps = {
  filled: false,
};

export default BorderOffsetWrapper;
