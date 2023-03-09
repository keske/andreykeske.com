import { create } from "zustand";

import * as Works from "@/components/Preview/index";

export type Work = {
  component: React.ReactElement<any, React.JSXElementConstructor<any> | string>;
  id: string;
  title: string;
};

export type Store = {
  selectedWorkId: string | null;
  setSelectedWorkId: (value: string | null) => void;

  readonly works: Work[];
};

const DEFAULT_STATE: Work[] = [
  {
    component: Works.About,
    title: "About",
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
    component: Works.Objects,
    title: "Objects",
  },
  {
    component: Works.Streets,
    title: "Streets",
  },
  {
    component: Works.Typography,
    title: "Typography",
  },
  {
    component: Works.UI,
    title: "UI",
  },
];

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
