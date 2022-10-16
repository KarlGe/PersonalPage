import create from "zustand";

export type LayoutVariant = "default" | "post" | "about";

interface SiteState {
  pageTitle?: string;
  layoutVariant?: LayoutVariant;
  setPageTitle: (newPageTitle: string) => void;
  setLayoutVariant: (newLayoutVariant: LayoutVariant) => void;
}

export const useStore = create<SiteState>((set) => ({
  pageTitle: undefined,
  setPageTitle: (newPageTitle) => set(() => ({ pageTitle: newPageTitle })),
  layoutVariant: undefined,
  setLayoutVariant: (newLayoutVariant) =>
    set(() => ({ layoutVariant: newLayoutVariant })),
}));
