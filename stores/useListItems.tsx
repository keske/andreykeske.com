import create from "zustand";

import {
  BTCBubble,
  Ball,
  Blackhole,
  Canvases,
  Catch,
  DockRecycleBins,
  EsherSwitchButton,
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
  WaterFilter,
  WaterOnMars,
} from "@/components/Preview/index";

export type Item = {
  component: () => JSX.Element;
  title: string;
  year: number;
};

export type Items = Item[];

export type Store = {
  readonly items: Items;
};

const DEFAULT_STATE: Items = [
  {
    component: Blackhole,
    title: "Blackhole",
    year: 2016,
  },
  {
    component: Ball,
    title: "Ball in the Dock",
    year: 2014,
  },
  {
    component: EsherSwitchButton,
    title: "Radio Button to Switch Evolution",
    year: 2021,
  },
  {
    component: BTCBubble,
    title: "Bitcoin Bubble",
    year: 2021,
  },
  {
    component: WaterFilter,
    title: "Eco problems with water",
    year: 2016,
  },
  {
    component: DockRecycleBins,
    title: "The Dock's Recycle Bins",
    year: 2011,
  },
  {
    component: IkeaGarbage,
    title: "The first discarded piece of IKEA furniture in AR",
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
  {
    component: WaterOnMars,
    title: "Water on Mars",
    year: 2011,
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
