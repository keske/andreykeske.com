import create, { SetState } from "zustand";

export type Store = {
  readonly height: number;
  readonly width: number;

  readonly warpRatio: number;

  handleHeight: (value: number) => void;
  handleWidth: (value: number) => void;

  setWarpRatio: (value: number) => void;
};

const useStore = create<Store>((set: SetState<Store>) => ({
  handleHeight: (value) => {
    set(() => ({ height: value }));
  },

  handleWidth: (value) => {
    set(() => ({ width: value }));
  },

  height: 10,

  setWarpRatio: (value) => {
    set(() => ({ warpRatio: value }));
  },
  warpRatio: 0,
  width: 10,
}));

export default useStore;
