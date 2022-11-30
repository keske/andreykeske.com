import create from "zustand";

import {
  Catch,
  FridayDock,
  Graffiti,
  LOT2046Tattoo,
  Lego,
  TmuxChess,
} from "@/components/Preview/index";

export type Items = Array<{
  component: () => JSX.Element;
  title: string;
}>;

export type Store = {
  readonly items: Items;
};

const DEFAULT_STATE: Items = [
  {
    component: Catch,
    title: "The Catch",
  },
  {
    component: LOT2046Tattoo,
    title: "LOT 2046 Tattoo Machine from Toothbrush",
  },
  {
    component: TmuxChess,
    title: "Tnux Chess",
  },
  {
    component: Lego,
    title: "Lego",
  },
  {
    component: FridayDock,
    title: "Friday Dock",
  },
  {
    component: Graffiti,
    title: "Graffiti",
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
