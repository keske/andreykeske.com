import create from "zustand";

import * as Works from "@/components/Preview/index";

export type Item = {
  component: React.ReactElement;
  hasMobileVersion: boolean;
  title: string;
  type: string;
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
    title: "Me",
    type: "about",
    year: 2023,
  },
  {
    component: Works.TimestampTattoo,
    hasMobileVersion: false,
    title: "Timestamp Tattoo",
    type: "Graphic",
    year: 2022,
  },
  {
    component: Works.ClothUI,
    hasMobileVersion: false,
    title: "Cloth UI",
    type: "Soft",
    year: 2022,
  },
  {
    component: Works.SoftVideoPlayer,
    hasMobileVersion: false,
    title: "Video Player",
    type: "Soft",
    year: 2022,
  },
  {
    component: Works.DistortingMirrors,
    hasMobileVersion: false,
    title: "Distorting Mirrors",
    type: "Camera",
    year: 2021,
  },
  {
    component: Works.TickyApplication,
    hasMobileVersion: false,
    title: "Ticky App",
    type: "iOS",
    year: 2021,
  },
  {
    component: Works.Dock,
    hasMobileVersion: false,
    title: "Dock",
    type: "Mac OS",
    year: 2021,
  },
  {
    component: Works.Finder,
    hasMobileVersion: false,
    title: "Finder",
    type: "Mac OS",
    year: 2021,
  },
  {
    component: Works.MandelbrotSet,
    hasMobileVersion: false,
    title: "Mandelbrot Set",
    type: "Uncategorized",
    year: 2021,
  },
  {
    component: Works.Blackhole,
    hasMobileVersion: false,
    title: "Desktop",
    type: "Mac OS",
    year: 2016,
  },
  {
    component: Works.EnergyOrParticle,
    hasMobileVersion: false,
    title: "Wave–particle duality",
    type: "Camera",
    year: 2018,
  },
  {
    component: Works.EsherSwitchButton,
    hasMobileVersion: false,
    title: "Radio Button to Switch",
    type: "UI",
    year: 2021,
  },
  {
    component: Works.Emojies,
    hasMobileVersion: false,
    title: "Emojies",
    type: "Graphic",
    year: 2017,
  },
  {
    component: Works.BTCBubble,
    hasMobileVersion: false,
    title: "Bitcoin Bubble",
    type: "Uncategorized",
    year: 2021,
  },
  {
    component: Works.WaterFilter,
    hasMobileVersion: false,
    title: "Eco problems with water",
    type: "Street Art",
    year: 2016,
  },
  {
    component: Works.MinecraftWarped,
    hasMobileVersion: false,
    title: "Warped",
    type: "Minecraft",
    year: 2016,
  },
  {
    component: Works.IkeaGarbage,
    hasMobileVersion: true,
    title: "Discarded piece of IKEA furniture",
    type: "AR",
    year: 2017,
  },
  {
    component: Works.Globalization,
    hasMobileVersion: false,
    title: "Globalization",
    type: "Uncategorized",
    year: 2016,
  },
  {
    component: Works.LOT2046Tattoo,
    hasMobileVersion: false,
    title: "LOT 2046 Tattoo Machine from Toothbrush",
    type: "Uncategorized",
    year: 2019,
  },
  {
    component: Works.Terminal,
    hasMobileVersion: true,
    title: "Terminal",
    type: "Mac OS",
    year: 2014,
  },
  {
    component: Works.LegoWarped,
    hasMobileVersion: false,
    title: "Warped",
    type: "Lego",
    year: 2021,
  },
  {
    component: Works.LegoHTML,
    hasMobileVersion: false,
    title: "HTML",
    type: "Lego",
    year: 2021,
  },
  {
    component: Works.VintageGoogleStreetView,
    hasMobileVersion: false,
    title: "Vintage Google StreetView",
    type: "Uncategorized",
    year: 2016,
  },
  {
    component: Works.InvertedManhattan,
    hasMobileVersion: false,
    title: "Inverted Manhattan",
    type: "Graphic",
    year: 2011,
  },
  {
    component: Works.Graffiti,
    hasMobileVersion: false,
    title: "Street Art 2006..2012",
    type: "Street Art",
    year: 2006,
  },
  {
    component: Works.Canvases,
    hasMobileVersion: false,
    title: "Canvases 2006..2009",
    type: "Uncategorized",
    year: 2006,
  },
  {
    component: Works.Volcom,
    hasMobileVersion: false,
    title: "Volcom Art Galery",
    type: "Graphic",
    year: 2007,
  },
  {
    component: Works.WaterOnMars,
    hasMobileVersion: false,
    title: "Water on Mars",
    type: "UI",
    year: 2011,
  },
  {
    component: Works.Sneakers,
    hasMobileVersion: false,
    title: "Nike Dunk x Adidas Superstar",
    type: "Graphic",
    year: 2011,
  },
].sort((a, b) => a.type.localeCompare(b.type));

export const useListItems = create<Store>(() => ({
  items: DEFAULT_STATE,
}));
