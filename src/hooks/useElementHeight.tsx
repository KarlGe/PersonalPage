import { useRef, useState, useEffect } from "react";

export const useElementHeight = () => {
  const heightRef = useRef<HTMLDivElement>(null);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    if (!heightRef.current) {
      return;
    }
    const newHeight = heightRef.current.offsetHeight;
    if (elementHeight === newHeight) {
      return;
    }
    if (heightRef.current) {
      setElementHeight(heightRef.current.offsetHeight);
    }
  }, [elementHeight]);

  return { heightRef, elementHeight };
};
