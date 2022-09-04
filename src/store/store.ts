import create from "zustand";

export type LayoutVariant = "default" | "post";

interface SiteState {
  pageTitle: string;
  layoutVariant: LayoutVariant;
  setPageTitle: (newPageTitle: string) => void;
  setLayoutVariant: (newLayoutVariant: LayoutVariant) => void;
}

export const useStore = create<SiteState>((set) => ({
  pageTitle: undefined,
  setPageTitle: (newPageTitle) => set(() => ({ pageTitle: newPageTitle })),
  layoutVariant: "default",
  setLayoutVariant: (newLayoutVariant) =>
    set(() => ({ layoutVariant: newLayoutVariant })),
}));
