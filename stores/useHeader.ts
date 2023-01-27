import create from "zustand";

const DEFAULT_TEXT_COLOR = "text-black";

export type UseHeader = {
  resetTextColor: () => void;
  setTextColor: (value: string) => void;
  readonly textColor: string;
};

export const useHeader = create<UseHeader>((set) => ({
  resetTextColor: () => {
    set(() => ({
      textColor: DEFAULT_TEXT_COLOR,
    }));
  },

  setTextColor: (value: string) => {
    set(() => ({
      textColor: value,
    }));
  },

  textColor: DEFAULT_TEXT_COLOR,
}));
