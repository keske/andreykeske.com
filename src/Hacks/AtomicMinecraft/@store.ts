import create, { SetState } from "zustand";

export type Store = {
  readonly showAir: boolean;
  readonly showLines: boolean;

  handleShowAir: (value: boolean) => void;
  handleShowLines: (value: boolean) => void;
};

const useStore = create<Store>((set: SetState<Store>) => ({
  handleShowAir: (value) => {
    set(() => ({ showAir: value }));
  },

  handleShowLines: (value) => {
    set(() => ({ showLines: value }));
  },

  showAir: false,
  showLines: true,
}));

export default useStore;
