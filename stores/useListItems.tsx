import { create } from "zustand";

import * as Works from "@/components/Preview/index";

export type Work = {
  component: React.ReactElement<any, React.JSXElementConstructor<any> | string>;
  id: string;
  title: string;
};

const DEFAULT_STATE: Work[] = [
  {
    component: <Works.About />,
    id: "about",
    title: "About",
  },
  {
    component: <Works.Metaphors />,
    id: "metaphors",
    title: "Metaphors",
  },
  {
    component: <Works.Minecraft />,
    id: "minecraft",
    title: "Minecraft",
  },
  {
    component: <Works.Morphism />,
    id: "morphism",
    title: "Morphism",
  },
  {
    component: <Works.Streets />,
    id: "streets",
    title: "Streets",
  },
  {
    component: <Works.Typography />,
    id: "typography",
    title: "Typography",
  },
  {
    component: <Works.UI />,
    id: "ui",
    title: "UI",
  },
];

export type Store = {
  selectedWorkId: string | null;
  setSelectedWorkId: (value: string | null) => void;

  readonly works: Work[];
};

export const useListItems = create<Store>((set) => ({
  selectedWorkId: null,

  setSelectedWorkId: (value: string | null) => {
    set(() => ({
      selectedWorkId: value,
    }));
  },

  works: DEFAULT_STATE,
}));
