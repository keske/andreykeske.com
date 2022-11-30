import create from "zustand";

import {
  Catch,
  FridayDock,
  Graffiti,
  InvertedManhattan,
  LOT2046Tattoo,
  Lego,
  TmuxChess,
} from "@/components/Preview/index";

export type Items = Array<{
  component: () => JSX.Element;
  title: string;
  year: number;
}>;

export type Store = {
  readonly items: Items;
};

const DEFAULT_STATE: Items = [
  {
    component: Catch,
    title: "The Catch",
    year: 2013,
  },
  {
    component: LOT2046Tattoo,
    title: "LOT 2046 Tattoo Machine from Toothbrush",
    year: 2019,
  },
  {
    component: TmuxChess,
    title: "Tmux Chess",
    year: 2014,
  },
  {
    component: Lego,
    title: "Lego",
    year: 2021,
  },
  {
    component: FridayDock,
    title: "Friday Dock",
    year: 2013,
  },
  {
    component: InvertedManhattan,
    title: "Inverted Manhattan",
    year: 2011,
  },
  {
    component: Graffiti,
    title: "Graffiti",
    year: 2006,
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
