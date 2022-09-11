import { cx } from "linaria";
import React, { ReactNode } from "react";
import { useElementMousePosition } from "../../../hooks/useElementMousePosition";
import { offsetBorderClassName } from "../../Layout/global.linaria";

type Props = { children: ReactNode; filled?: boolean };

function BorderOffsetWrapper({ children, filled }: Props) {
  const { elementRef } = useElementMousePosition();

  return (
    <div
      className={cx(offsetBorderClassName, filled && "filled")}
      ref={elementRef as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>
  );
}

BorderOffsetWrapper.defaultProps = {
  filled: false,
};

export default BorderOffsetWrapper;
