import create from "zustand";

import * as Works from "@/components/Preview/index";

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
    component: Works.ClothUI,
    title: "Cloth UI",
    year: 2022,
  },
  {
    component: Works.SoftVideoPlayer,
    title: "Soft Video Player",
    year: 2022,
  },
  {
    component: Works.DistortingMirrors,
    title: "Distorting Mirrors",
    year: 2021,
  },
  {
    component: Works.TickyApplication,
    title: "Ticky iOS Application",
    year: 2021,
  },
  {
    component: Works.Hydra,
    title: "Hydra",
    year: 2021,
  },
  {
    component: Works.MandelbrotSet,
    title: "Mandelbrot Set",
    year: 2021,
  },
  {
    component: Works.Blackhole,
    title: "Blackhole",
    year: 2016,
  },
  {
    component: Works.Ball,
    title: "Ball in the Dock",
    year: 2014,
  },
  {
    component: Works.EsherSwitchButton,
    title: "Radio Button to Switch Evolution",
    year: 2021,
  },
  {
    component: Works.RollingStones,
    title: "Rolling Stones Emoji Logotype",
    year: 2017,
  },
  {
    component: Works.BTCBubble,
    title: "Bitcoin Bubble",
    year: 2021,
  },
  {
    component: Works.EmojiTattooFlashes,
    title: "Emoji Tattoo Flashes",
    year: 2017,
  },
  {
    component: Works.WaterFilter,
    title: "Eco problems with water",
    year: 2016,
  },
  {
    component: Works.DockRecycleBins,
    title: "The Dock's Recycle Bins",
    year: 2011,
  },
  {
    component: Works.IkeaGarbage,
    title: "The first discarded piece of IKEA furniture in AR",
    year: 2017,
  },
  {
    component: Works.Globalization,
    title: "Globalization",
    year: 2016,
  },
  {
    component: Works.Catch,
    title: "The Catch",
    year: 2013,
  },
  {
    component: Works.LOT2046Tattoo,
    title: "LOT 2046 Tattoo Machine from Toothbrush",
    year: 2019,
  },
  {
    component: Works.TmuxChess,
    title: "Tmux Chess",
    year: 2014,
  },
  {
    component: Works.Lego,
    title: "Lego",
    year: 2021,
  },
  {
    component: Works.FridayDock,
    title: "Friday Dock",
    year: 2013,
  },
  {
    component: Works.VintageGoogleStreetView,
    title: "Vintage Google StreetView",
    year: 2016,
  },
  {
    component: Works.InvertedManhattan,
    title: "Inverted Manhattan",
    year: 2011,
  },
  {
    component: Works.Graffiti,
    title: "Graffiti 2006..2009",
    year: 2006,
  },
  {
    component: Works.Canvases,
    title: "Canvases 2006..2009",
    year: 2006,
  },
  {
    component: Works.Volcom,
    title: "Volcom Art Galery",
    year: 2007,
  },
  {
    component: Works.WaterOnMars,
    title: "Water on Mars",
    year: 2011,
  },
  {
    component: Works.Sneakers,
    title: "Nike Dunk x Adidas Superstar",
    year: 2011,
  },
];

const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));

export default useListItems;
