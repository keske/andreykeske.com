import create, { SetState } from "zustand";

export type Store = {
  readonly animation: boolean;

  readonly showLines: boolean;

  handleAnimation: (value: boolean) => void;
  handleShowLines: (value: boolean) => void;
};

const useStore = create<Store>((set: SetState<Store>) => ({
  animation: false,

  handleAnimation: (value) => {
    set(() => ({ animation: value }));
  },

  handleShowLines: (value) => {
    set(() => ({ showLines: value }));
  },

  showLines: false,
}));

export default useStore;
