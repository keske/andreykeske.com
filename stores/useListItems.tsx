import { create } from "zustand";

import * as Works from "@/components/Preview/index";

export type Item = {
  component: React.ReactElement<any, React.JSXElementConstructor<any> | string>;
  id: string;
  title: string;
};

export type Store = {
  readonly items: Item[];

  selectedCaseId: string | null;
  setSelectedCaseId: (value: string | null) => void;
};

const DEFAULT_STATE: Item[] = [
  {
    component: Works.AR,
    title: "AR",
  },
  {
    component: Works.MacOS,
    title: "MacOS",
  },
  {
    component: Works.StreetArt,
    title: "Street Art",
  },
];

export const useListItems = create<Store>((set) => ({
  items: DEFAULT_STATE.map((item) => ({
    ...item,
    id: item.title.toLocaleLowerCase().replace(/ /g, "-"),
  })),

  selectedCaseId: null,

  setSelectedCaseId: (value: string | null) => {
    set(() => ({
      selectedCaseId: value,
    }));
  },
}));
