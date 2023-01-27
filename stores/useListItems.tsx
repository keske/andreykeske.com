import create from "zustand";

import * as Works from "@/components/Preview/index";

export type Item = {
  component: React.ReactElement;
  hasMobileVersion: boolean;
  title: string;
  year: number;
};

export type Store = {
  readonly items: Item[];
};

// @ts-expect-error work in progress
const DEFAULT_STATE: Item[] = [
  {
    component: Works.About,
    hasMobileVersion: false,
    title: "About",
    year: 2023,
  },
  {
    component: Works.ClothUI,
    hasMobileVersion: false,
    title: "Cloth UI",
    year: 2022,
  },
  {
    component: Works.SoftVideoPlayer,
    hasMobileVersion: false,
    title: "Soft Video Player",
    year: 2022,
  },
  {
    component: Works.DistortingMirrors,
    hasMobileVersion: false,
    title: "Distorting Mirrors",
    year: 2021,
  },
  {
    component: Works.TickyApplication,
    hasMobileVersion: false,
    title: "Ticky iOS Application",
    year: 2021,
  },
  {
    component: Works.Hydra,
    hasMobileVersion: false,
    title: "Hydra",
    year: 2021,
  },
  {
    component: Works.MandelbrotSet,
    hasMobileVersion: false,
    title: "Mandelbrot Set",
    year: 2021,
  },
  {
    component: Works.Blackhole,
    hasMobileVersion: false,
    title: "Blackhole",
    year: 2016,
  },
  {
    component: Works.Ball,
    hasMobileVersion: false,
    title: "Ball in the Dock",
    year: 2014,
  },
  {
    component: Works.EsherSwitchButton,
    hasMobileVersion: false,
    title: "Radio Button to Switch",
    year: 2021,
  },
  {
    component: Works.Emojies,
    hasMobileVersion: false,
    title: "Emojies",
    year: 2017,
  },
  {
    component: Works.BTCBubble,
    hasMobileVersion: false,
    title: "Bitcoin Bubble",
    year: 2021,
  },
  {
    component: Works.WaterFilter,
    hasMobileVersion: false,
    title: "Eco problems with water",
    year: 2016,
  },
  {
    component: Works.DockRecycleBins,
    hasMobileVersion: false,
    title: "The Dock's Recycle Bins",
    year: 2011,
  },
  {
    component: Works.IkeaGarbage,
    hasMobileVersion: true,
    title: "The first discarded piece of IKEA furniture in AR",
    year: 2017,
  },
  {
    component: Works.Globalization,
    hasMobileVersion: false,
    title: "Globalization",
    year: 2016,
  },
  {
    component: Works.Catch,
    hasMobileVersion: true,
    title: "The Catch",
    year: 2013,
  },
  {
    component: Works.LOT2046Tattoo,
    hasMobileVersion: false,
    title: "LOT 2046 Tattoo Machine from Toothbrush",
    year: 2019,
  },
  {
    component: Works.TmuxChess,
    hasMobileVersion: true,
    title: "Tmux Chess",
    year: 2014,
  },
  {
    component: Works.Lego,
    hasMobileVersion: false,
    title: "Lego",
    year: 2021,
  },
  {
    component: Works.FridayDock,
    hasMobileVersion: false,
    title: "Friday Dock",
    year: 2013,
  },
  {
    component: Works.VintageGoogleStreetView,
    hasMobileVersion: false,
    title: "Vintage Google StreetView",
    year: 2016,
  },
  {
    component: Works.InvertedManhattan,
    hasMobileVersion: false,
    title: "Inverted Manhattan",
    year: 2011,
  },
  {
    component: Works.Graffiti,
    hasMobileVersion: false,
    title: "Graffiti 2006..2009",
    year: 2006,
  },
  {
    component: Works.Canvases,
    hasMobileVersion: false,
    title: "Canvases 2006..2009",
    year: 2006,
  },
  {
    component: Works.Volcom,
    hasMobileVersion: false,
    title: "Volcom Art Galery",
    year: 2007,
  },
  {
    component: Works.WaterOnMars,
    hasMobileVersion: false,
    title: "Water on Mars",
    year: 2011,
  },
  {
    component: Works.Sneakers,
    hasMobileVersion: false,
    title: "Nike Dunk x Adidas Superstar",
    year: 2011,
  },
]
  .sort((a, b) => a.year - b.year)
  .reverse();

export const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));
