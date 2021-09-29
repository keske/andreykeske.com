import create, { SetState } from 'zustand';

export type Store = {
  readonly warpRatio: number;

  setWarpRatio: (value: number) => void;
};

const useStore = create<Store>(
  (set: SetState<Store>) => ({
    setWarpRatio: (value) => {
      set(() => ({ warpRatio: value }));
    },

    warpRatio: 2.5,
  }),
);

export default useStore;
