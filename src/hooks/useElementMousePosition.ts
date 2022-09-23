import { useEffect, useMemo, useRef } from "react";
import throttle from "lodash/throttle";

export const useElementMousePosition = () => {
  const elementRef = useRef<HTMLElement>(null);

  const setAttributes = (posX: number, posY: number) => {
    if (!elementRef.current) {
      return;
    }
    elementRef.current.style.setProperty("--mouse-pos-x", `${posX}`);
    elementRef.current.style.setProperty("--mouse-pos-y", `${posY}`);
  };

  const getMousePosition = (e: MouseEvent) => {
    if (!elementRef.current) {
      return;
    }
    const { left, y, top, width, height } =
      elementRef.current.getBoundingClientRect();
    const { clientX, clientY } = e;

    /**
     * We set the position as a percentage of the element we're hovering over
     */
    setAttributes((clientX - left) / width, (clientY - top) / height);
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
