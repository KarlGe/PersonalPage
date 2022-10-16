import { useEffect } from "react";
import { LayoutVariant, useStore } from "../store/store";

export const useLayoutSettings = (
  pageTitle: string | null,
  layoutVariant: LayoutVariant
) => {
  const { setPageTitle, setLayoutVariant } = useStore();
  useEffect(() => {
    if (pageTitle) {
      setPageTitle(pageTitle);
    }
    setLayoutVariant(layoutVariant);
  }, []);
};
