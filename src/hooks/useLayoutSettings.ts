import { useEffect } from "react";
import { LayoutVariant, useStore } from "../store/store";

export const useLayoutSettings = (
  pageTitle: string,
  layoutVariant: LayoutVariant
) => {
  const { setPageTitle, setLayoutVariant } = useStore();
  useEffect(() => {
    setPageTitle(pageTitle);
    setLayoutVariant(layoutVariant);
  }, []);
};
