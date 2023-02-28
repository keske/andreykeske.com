import { create } from "zustand";

type Color = "black" | "white";

type Scheme = {
  bg: Color;
  text: Color;
};

const DEFAULT_SHEME: Scheme = {
  bg: "white",
  text: "black",
};

export type UseHeader = {
  resetScheme: () => void;
  readonly scheme: Scheme;
  setScheme: (scheme: Scheme) => void;
};

export const useHeader = create<UseHeader>((set) => ({
  resetScheme: () => {
    set(() => ({
      scheme: DEFAULT_SHEME,
    }));
  },

  scheme: DEFAULT_SHEME,

  setScheme: (scheme: Scheme) => {
    set(() => ({
      scheme: scheme,
    }));
  },
}));
