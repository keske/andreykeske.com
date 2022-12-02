import create from "zustand";

import {
  Canvases,
  Catch,
  DockRecycleBins,
  FridayDock,
  Globalization,
  Graffiti,
  IkeaGarbage,
  InvertedManhattan,
  LOT2046Tattoo,
  Lego,
  TmuxChess,
  VintageGoogleStreetView,
  Volcom,
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
    component: DockRecycleBins,
    title: "The Dock's Recycle Bins",
    year: 2011,
  },
  {
    component: IkeaGarbage,
    title: "The first discarded piece of IKEA furniture in Augmented Reality",
    year: 2017,
  },
  {
    component: Globalization,
    title: "Globalization",
    year: 2016,
  },
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
    component: VintageGoogleStreetView,
    title: "Vintage Google StreetView",
    year: 2016,
  },
  {
    component: InvertedManhattan,
    title: "Inverted Manhattan",
    year: 2011,
  },
  {
    component: Graffiti,
    title: "Graffiti 2006..2009",
    year: 2006,
  },
  {
    component: Canvases,
    title: "Canvases 2006..2009",
    year: 2006,
  },
  {
    component: Volcom,
    title: "Volcom Art Galery",
    year: 2007,
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
