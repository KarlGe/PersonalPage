import { useEffect, useMemo, useRef } from "react";
import throttle from "lodash/throttle";

export const useElementMousePosition = () => {
  const elementRef = useRef<HTMLElement>(null);

  const setAttributes = (posX: number, posY: number) => {
    elementRef.current.style.setProperty("--mouse-pos-x", `${posX}`);
    elementRef.current.style.setProperty("--mouse-pos-y", `${posY}`);
  };

  const getMousePosition = (e: MouseEvent) => {
    const { left, top, width, height } =
      elementRef.current.getBoundingClientRect();
    const { pageX, pageY } = e;

    /**
     * We set the position as a percentage of the element we're hovering over
     */
    setAttributes((pageX - left) / width, (pageY - top) / height);
  };
  const resetPosition = () => {
    setTimeout(() => setAttributes(0, 0), 100);
  };

  const mousePositionFunc = useMemo(() => throttle(getMousePosition, 100), []);

  useEffect(() => {
    if (elementRef && elementRef.current) {
      elementRef.current.addEventListener("mousemove", mousePositionFunc);
      elementRef.current.addEventListener("mouseleave", resetPosition);
    }
    return () => {
      if (elementRef.current) {
        elementRef.current.removeEventListener("mousemove", mousePositionFunc);
        elementRef.current.addEventListener("mouseleave", resetPosition);
      }
    };
  }, []);

  return { elementRef };
};
