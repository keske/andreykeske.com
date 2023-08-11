import { create } from "zustand";

import * as Works from "@/components/Preview/index";

export type Store = {
  selectedWorkId: string | null;
  setSelectedWorkId: (value: string | null) => void;

  readonly works: Work[];
};

const DEFAULT_STATE: Array<Pick<Work, "component" | "title">> = [
  {
    component: Works.About,
    title: "About",
  },
  {
    component: Works.Interface,
    title: "Interface",
  },
  {
    component: Works.Metaphors,
    title: "Metaphors",
  },
  {
    component: Works.Minecraft,
    title: "Minecraft",
  },
  {
    component: Works.Mimicry,
    title: "Mimicry",
  },
  {
    component: Works.Morphism,
    title: "Morphism",
  },
  {
    component: Works.Streets,
    title: "Streets",
  },
  {
    component: Works.Typography,
    title: "Typography",
  },
];

export type Work = {
  component: React.FC;
  id: string;
  title: string;
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
