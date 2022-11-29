import create from "zustand";

import {
  Catch,
  LOT2046Tattoo,
  TmuxChess,
  WarpedLego,
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
    component: WarpedLego,
    title: "Lego",
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
