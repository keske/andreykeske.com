import { create } from "zustand";

import * as Works from "@/components/Works/index";

export type Work = {
  component: React.FC;
  id: string;
  title: string;
};

const DEFAULT_STATE: Array<Pick<Work, "component" | "title">> = [
  {
    component: Works.About,
    title: "ABOUT",
  },
  {
    component: Works.Interface,
    title: "INTERFACE",
  },
  {
    component: Works.Metaphors,
    title: "METAPHORS",
  },
  {
    component: Works.Minecraft,
    title: "MINECRAFT",
  },
  {
    component: Works.Mimicry,
    title: "MIMICRY",
  },
  {
    component: Works.Morphism,
    title: "MORPHISM",
  },
  {
    component: Works.Streets,
    title: "STREETS",
  },
  {
    component: Works.Typography,
    title: "TYPOGRAPHY",
  },
];

export type Store = {
  selectedWorkId: string | null;
  setSelectedWorkId: (value: string | null) => void;

  readonly works: Work[];
};

export const useListItems = create<Store>((set) => ({
  selectedWorkId: null,

  setSelectedWorkId: (value: string | null) => {
    set(() => ({
      selectedWorkId: value,
    }));
  },

  works: DEFAULT_STATE.map((item) => ({
    ...item,
    id: item.title.toLocaleLowerCase().replace(/ /g, "-"),
  })),
}));
